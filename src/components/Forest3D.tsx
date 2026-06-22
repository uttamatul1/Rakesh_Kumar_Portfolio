import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Forest3DProps {
  mode: string;
}

interface SceneRefData {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  disposed: boolean;
  t?: number;
  update?: (t: number) => void;
}

export const Forest3D: React.FC<Forest3DProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<SceneRefData | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 800);
    camera.position.set(0, 9, 34);
    camera.lookAt(0, 4, 0);

    sceneRef.current = {
      renderer,
      scene,
      camera,
      disposed: false
    };

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();

    window.addEventListener('resize', resize);

    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;

    function onMove(e: MouseEvent) {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    document.addEventListener('mousemove', onMove);

    let rafId: number;
    function animate() {
      rafId = requestAnimationFrame(animate);
      if (!sceneRef.current || sceneRef.current.disposed) return;

      const ref = sceneRef.current;
      const t = ref.t = (ref.t || 0) + 0.011;
      mx += (tmx - mx) * 0.035;
      my += (tmy - my) * 0.035;

      if (ref.update) ref.update(t);

      const scrollY = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      camera.position.x += (mx * 1.6 - camera.position.x) * 0.025;
      camera.position.y += (-my * 0.8 + 9 - scrollY * 3 - camera.position.y) * 0.025;
      camera.position.z = 34 + scrollY * 6;
      camera.lookAt(mx * 0.3, 4 - scrollY * 1.5, 0);
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      if (sceneRef.current) {
        sceneRef.current.disposed = true;
      }
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMove);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const ref = sceneRef.current;
    if (!ref) return;

    const { scene } = ref;
    while (scene.children.length) {
      const child = scene.children[0];
      scene.remove(child);
    }

    const isDay = mode === 'day';
    scene.fog = new THREE.FogExp2(isDay ? 0xeef3ee : 0x0a1210, isDay ? 0.02 : 0.024);

    const ambient = new THREE.AmbientLight(isDay ? 0xffffff : 0x9fc4b3, isDay ? 1.2 : 0.9);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(isDay ? 0xfff8e8 : 0x6f8fc9, isDay ? 1.1 : 0.35);
    sun.position.set(isDay ? 10 : -8, 22, isDay ? 14 : 12);
    scene.add(sun);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(140, 90),
      new THREE.MeshLambertMaterial({
        color: isDay ? 0x9fb89f : 0x1a352a,
        transparent: true,
        opacity: isDay ? 0.28 : 0.4
      })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    scene.add(ground);

    function buildTree(x: number, z: number, scale: number, leafHue: number, trunkCol: number) {
      const g = new THREE.Group();
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18 * scale, 0.3 * scale, 2.3 * scale, 7),
        new THREE.MeshLambertMaterial({ color: trunkCol })
      );
      trunk.position.y = 1.15 * scale;
      g.add(trunk);

      const leafMat = new THREE.MeshLambertMaterial({ color: leafHue });
      [
        [1.5 * scale, 2.3 * scale, 2.0 * scale],
        [1.1 * scale, 3.3 * scale, 1.5 * scale],
        [0.7 * scale, 4.2 * scale, 1.05 * scale]
      ].forEach(([r, y, h]) => {
        const cone = new THREE.Mesh(new THREE.ConeGeometry(r, h, 8), leafMat);
        cone.position.y = y;
        g.add(cone);
      });

      g.position.set(x, -2, z);
      return g;
    }

    const dayLeaf = [0x6fae6f, 0x7cbf7e, 0x86c688];
    const nightLeaf = [0x1f4d33, 0x254f38, 0x2a5940];
    const leafPalette = isDay ? dayLeaf : nightLeaf;
    const trunkCols = [0x6b4226, 0x5c3317, 0x7a4f2a];
    const treeDefs = [
      [-18, -20, 1.2],
      [-10, -22, 1.3],
      [-2, -20, 1.1],
      [7, -23, 1.25],
      [15, -20, 1.15],
      [22, -21, 1.0],
      [-24, -19, 1.2],
      [27, -19, 1.05],
      [-20, -11, 0.85],
      [-13, -10, 0.78],
      [16, -11, 0.85],
      [24, -9, 0.72]
    ];

    const trees = treeDefs.map(([x, z, s], i) => {
      const leaf = leafPalette[i % leafPalette.length];
      const trunk = trunkCols[i % trunkCols.length];
      const tr = buildTree(x, z, s, leaf, trunk);
      tr.userData = {
        swaySpeed: 0.4 + Math.random() * 0.5,
        swayPhase: Math.random() * Math.PI * 2,
        swayAmt: 0.012 + Math.random() * 0.015
      };
      scene.add(tr);
      return tr;
    });

    let fireflies: THREE.Points | null = null;
    if (!isDay) {
      const fCount = 22;
      const fPos = new Float32Array(fCount * 3);
      const fTime = new Float32Array(fCount);
      for (let i = 0; i < fCount; i++) {
        fPos[i * 3] = (Math.random() - 0.5) * 40;
        fPos[i * 3 + 1] = Math.random() * 8 + 1;
        fPos[i * 3 + 2] = (Math.random() - 0.5) * 18;
        fTime[i] = Math.random() * Math.PI * 2;
      }
      const fGeo = new THREE.BufferGeometry();
      fGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
      fireflies = new THREE.Points(
        fGeo,
        new THREE.PointsMaterial({
          color: 0xc9a14a,
          size: 0.22,
          transparent: true,
          opacity: 0.7
        })
      );
      fireflies.userData = {
        fTime,
        count: fCount
      };
      scene.add(fireflies);
    }

    ref.update = (t: number) => {
      trees.forEach(tr => {
        const d = tr.userData;
        tr.rotation.z = Math.sin(t * d.swaySpeed + d.swayPhase) * d.swayAmt;
      });

      if (fireflies) {
        const fp = fireflies.geometry.attributes.position.array as Float32Array;
        const fTime = fireflies.userData.fTime as Float32Array;
        const count = fireflies.userData.count;
        for (let i = 0; i < count; i++) {
          fTime[i] += 0.006;
          fp[i * 3] += Math.sin(fTime[i] * 1.1) * 0.008;
          fp[i * 3 + 1] += Math.sin(fTime[i] * 0.9 + i) * 0.006;
          fp[i * 3 + 2] += Math.cos(fTime[i] * 0.7) * 0.007;
        }
        fireflies.geometry.attributes.position.needsUpdate = true;
        (fireflies.material as THREE.PointsMaterial).opacity = 0.4 + Math.abs(Math.sin(t * 1.2)) * 0.35;
      }
    };
  }, [mode]);

  return <canvas id="c3d" ref={canvasRef} />;
};
