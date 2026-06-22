export interface CardItem {
  num: string;
  h: string;
  p: string;
  tag: string;
  title: string;
  body: string;
}

export interface TimelineEvent {
  year: string;
  h: string;
  p: string;
  tag: string;
  title: string;
  body: string;
}

export interface ExpertiseItem {
  ico: string;
  h: string;
  p: string;
  tag: string;
  title: string;
  body: string;
}

export interface AwardItem {
  yr: string;
  h: string;
  p: string;
  tag: string;
  title: string;
  body: string;
}

export interface MediaItem {
  thumb: string;
  tag: string;
  h: string;
  title: string;
  p: string;
  meta: string;
  body: string;
}

export interface MediaTab {
  id: string;
  label: string;
  items: MediaItem[];
}

export const ABOUT_CARDS: CardItem[] = [
  {
    num: "01",
    h: "Air Quality & Pollution Control",
    p: "Emission inventories, monitoring networks & the 1996 catalytic-converter policy.",
    tag: "Core expertise",
    title: "Air Quality & Pollution Control",
    body: "Urban air quality monitoring networks, emission inventories, dispersion modelling, and source apportionment for some of India's most polluted regions. His work contributed to the promulgation of catalytic converters in India in 1996."
  },
  {
    num: "02",
    h: "PHYTORID™ Technology",
    p: "India's most widely transferred natural wastewater treatment system.",
    tag: "Signature Innovation",
    title: "PHYTORID™ Technology",
    body: "PHYTORID is a constructed-wetland based natural sewage treatment system requiring zero energy and zero maintenance. Treated water can be reused for multiple purposes, including drinking. It holds the record for the largest number of technology transfers for any low-cost wastewater treatment solution in India."
  },
  {
    num: "03",
    h: "Climate Change & Health",
    p: "WHO-partnered climate-health studies; carbonaceous aerosol research with IIT Bombay.",
    tag: "WHO Collaboration",
    title: "Climate Change & Health",
    body: "In collaboration with the World Health Organization, Dr. Kumar led research connecting climate change to public health outcomes. His work on carbonaceous aerosols and greenhouse gases was conducted alongside IIT Bombay and over 15 national institutions."
  },
  {
    num: "04",
    h: "Adjunct Professor, IIT Bombay",
    p: "Mentored the next generation at India's top engineering institution.",
    tag: "Academia",
    title: "Adjunct Professor, IIT Bombay",
    body: "He served as Adjunct Professor at the Centre for Environmental Science & Engineering, IIT Bombay, mentoring the next generation of environmental engineers and maintaining a bridge between research and education."
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1985 – 1987",
    h: "IIT Bombay — M.Tech. (1st Rank)",
    p: "M.Sc. Chemistry (First Class, Merit Scholarship) and M.Tech. in Environmental Science & Engineering — ranked first in class.",
    tag: "Education · 1985–1987",
    title: "M.Sc. Chemistry & M.Tech., IIT Bombay (1st Rank)",
    body: "Graduated with First Class honours in Chemistry (Merit Scholarship) and then completed an M.Tech. in Environmental Science & Engineering — ranking first in his class at one of India's most prestigious institutions. This period laid the technical foundation for his entire career."
  },
  {
    year: "1990 – 1994",
    h: "Ph.D., RTM Nagpur University + Commonwealth Award, UK",
    p: "Doctoral research in Environmental Engineering, with a supported stint at the University of East Anglia on the Commonwealth Commission Award.",
    tag: "Doctoral Research · 1990–1994",
    title: "Ph.D., RTM Nagpur University & Commonwealth Award",
    body: "Earned his Ph.D. in Environmental Engineering from RTM Nagpur University. The Commonwealth Commission Award (UK, 1994) supported a research period at the University of East Anglia — exposing him early to international research methods that shaped his collaborative approach for the rest of his career."
  },
  {
    year: "1996",
    h: "ISO 14001 Lead Auditor — RAB (UK) & EARA (USA)",
    p: "Dual international certification in environmental management systems audit.",
    tag: "Professional Qualification · 1996",
    title: "ISO 14001 Lead Auditor Certification",
    body: "Certified as Lead Auditor for ISO 14001 Environmental Management Systems by both RAB (UK) and EARA (USA). This rigorous dual-certification reflected his early focus on standards-based environmental management — a thread that runs through his later contributions to BIS standards."
  },
  {
    year: "2003 – 2016",
    h: "Chief Scientist & Head, CSIR-NEERI Mumbai Zonal Centre",
    p: "Led air quality research and PHYTORID development for India's commercial capital.",
    tag: "Senior Leadership · 2003–2016",
    title: "Chief Scientist & Head, CSIR-NEERI Mumbai Zonal Centre",
    body: "Rose to Chief Scientist & Head at CSIR-NEERI's Mumbai centre — directing air-quality monitoring, urban emission inventories, and the PHYTORID technology development programme. The Mumbai role was the proving ground for everything he later brought to the Director's office in Nagpur."
  },
  {
    year: "23 May 2016",
    h: "Director, CSIR-NEERI, Nagpur",
    p: "Took charge of India's premier environmental engineering institution — the culmination of a 30-year career at CSIR-NEERI.",
    tag: "Peak Leadership",
    title: "Director, CSIR-NEERI, Nagpur — 23 May 2016",
    body: "Assumed charge as Director of CSIR-National Environmental Engineering Research Institute on 23rd May 2016, succeeding Dr. Tapas Nandy. Led India's premier environmental engineering research body, overseeing programmes in air quality, water treatment, waste management, climate change, and environmental policy."
  },
  {
    year: "Ongoing",
    h: "Director & Founder — continued impact",
    p: "Champion of nature-based, low-cost solutions for India's environmental challenges.",
    tag: "Present",
    title: "Ongoing — Director & Founder",
    body: "Continues to advocate for science-led, sustainable environmental solutions. Active across conferences, policy forums and collaborative research networks. His legacy institutions — PHYTORID deployments, CSIR-NEERI standards programmes — continue to influence India's environmental engineering practice."
  }
];

export const EXPERTISE: ExpertiseItem[] = [
  {
    ico: "🌬️",
    h: "Air Pollution Control",
    p: "Monitoring networks, emission inventories, source apportionment & the 1996 catalytic-converter mandate.",
    tag: "Core Domain",
    title: "Air Pollution Control & Management",
    body: "Urban air quality monitoring networks, emission inventories, dispersion modelling and source apportionment for some of India's most polluted regions, including Chandrapur. His work contributed directly to the promulgation of catalytic converters in India in 1996 — a national policy milestone."
  },
  {
    ico: "💧",
    h: "Water & Wastewater (PHYTORID™)",
    p: "Zero-energy, zero-maintenance constructed wetland technology — India's most-transferred treatment solution.",
    tag: "Signature Innovation",
    title: "Water & Wastewater — PHYTORID™",
    body: "PHYTORID is a constructed-wetland based natural treatment system requiring zero energy and zero maintenance. India produces ~62 billion litres of wastewater daily. PHYTORID holds the record for the largest number of technology transfers for any low-cost treatment solution in India."
  },
  {
    ico: "🌍",
    h: "Climate Change & Health",
    p: "WHO-partnered research linking climate change to health outcomes across Indian populations.",
    tag: "WHO Partnership",
    title: "Climate Change & Health Research",
    body: "Climate-health research in collaboration with the World Health Organization. Carbonaceous aerosol and greenhouse gas studies with IIT Bombay and 15+ national institutions. Bridging atmospheric science with public health epidemiology."
  },
  {
    ico: "♻️",
    h: "Waste Management",
    p: "Low-cost strategy and technology for municipal and industrial solid waste treatment.",
    tag: "Applied Engineering",
    title: "Hazardous & Municipal Waste Management",
    body: "Strategy and technology for the safe handling, treatment and disposal of municipal and industrial solid waste — applying the same low-cost, low-maintenance philosophy that underpins PHYTORID to India's growing waste challenge."
  },
  {
    ico: "📋",
    h: "EIA & Environmental Audit",
    p: "ISO 14001 Lead Auditor; Supreme Court committee member; EIAs for industry and infrastructure.",
    tag: "Standards & Compliance",
    title: "Environmental Impact Assessment & Audit",
    body: "As a certified ISO 14001 Lead Auditor (RAB, UK & EARA, USA), Dr. Kumar has conducted and led EIAs and environmental audits for industry and infrastructure — also serving on a committee constituted by the Hon'ble Supreme Court of India."
  },
  {
    ico: "🔬",
    h: "Cleaner Technology & Patents",
    p: "10 patents including 2 international (Europe & Australia); CSIR-NEERI Best Patent Award 2006.",
    tag: "Innovation & IP",
    title: "Cleaner Technology & Patents",
    body: "Ten patents on pollution-control devices, including two international patents (Europe and Australia) on low-cost wastewater treatment technology. Winner of CSIR-NEERI's Best Patent Award (2006)."
  }
];

export const AWARDS: AwardItem[] = [
  {
    yr: "1994",
    h: "Commonwealth Commission Award, UK",
    p: "Fellowship for higher studies at the University of East Anglia, UK.",
    tag: "International Fellowship",
    title: "Commonwealth Commission Award, UK — 1994",
    body: "Awarded by the Commonwealth Commission, UK, to support higher studies in environmental science. This fellowship took Dr. Kumar to the University of East Anglia — an early international experience that shaped his collaborative, globally-aware research approach."
  },
  {
    yr: "2005",
    h: "Environmental Leadership Award — US-AEP & USAID",
    p: "For outstanding contribution to improving quality of life across Asia.",
    tag: "International Recognition",
    title: "Environmental Leadership Award — US-AEP & USAID, 2005",
    body: "Presented by US Asia Environmental Partnership and USAID for outstanding contributions to improving quality of life for populations across Asia through environmental partnership work."
  },
  {
    yr: "2006",
    h: "Best Patent Award, CSIR-NEERI",
    p: "For securing European & Australian patents on wastewater treatment technology.",
    tag: "IP Recognition",
    title: "Best Patent Award, CSIR-NEERI — 2006",
    body: "Awarded by CSIR-NEERI for securing European and Australian patents on a low-cost wastewater treatment technology — part of his portfolio of ten patents on pollution-control devices."
  },
  {
    yr: "2007",
    h: "Air Quality Management Award — IAAPC",
    p: "For outstanding contribution to air quality management in India.",
    tag: "Professional Recognition",
    title: "Air Quality Management Award — IAAPC, 2007",
    body: "The Indian Association for Air Pollution Control honoured Dr. Kumar for outstanding contribution to air quality management in India — recognising decades of monitoring, inventory, and source apportionment work."
  },
  {
    yr: "2011",
    h: "Vasundhara Award (3rd Prize)",
    p: "PHYTORID deployment at Siemens, Navi Mumbai — World Environment Day 2011.",
    tag: "Industry Deployment",
    title: "Vasundhara Award (3rd Prize) — World Environment Day 2011",
    body: "Presented for the successful deployment of PHYTORID at Siemens, Navi Mumbai — demonstrating that constructed-wetland treatment works at industrial scale with zero energy input. Awarded on World Environment Day 2011."
  },
  {
    yr: "2012",
    h: "Largest Technology Transfer — PHYTORID",
    p: "Most widely transferred low-cost wastewater solution in India.",
    tag: "National Record",
    title: "Largest Technology Transfer — PHYTORID, 2012",
    body: "Recognised for achieving the largest number of technology transfers for any low-cost wastewater treatment solution in India — reflecting how widely PHYTORID was adopted by municipalities and industry across the country."
  },
  {
    yr: "2012",
    h: "VASVIK Award",
    p: "For exemplary urban environment improvement through PHYTORID technology.",
    tag: "S&T Excellence",
    title: "VASVIK Award — 2012",
    body: "The VASVIK Foundation honoured Dr. Kumar for exemplary, sustained work on urban environment improvement through PHYTORID — a sustainable, constructed-wetland based sewage treatment technology."
  },
  {
    yr: "2015",
    h: 'Hiyoshi "Think of Ecology" Award — Japan',
    p: "International recognition for integrating ecology into environmental engineering.",
    tag: "International Honour, Japan",
    title: 'Hiyoshi "Think of Ecology" Award — September 2015',
    body: "An international award from Japan celebrating Dr. Kumar's integration of ecological thinking into mainstream environmental engineering — recognising his philosophy of working with natural systems rather than against them."
  },
  {
    yr: "Recent",
    h: "Rashtriya Vigyan Puraskar — Vigyan Shri",
    p: "Nominated by the Government of India for contributions to Environmental Science.",
    tag: "Government of India",
    title: "Rashtriya Vigyan Puraskar — Vigyan Shri",
    body: "Director, CSIR-NEERI selected for the Rashtriya Vigyan Puraskar — Vigyan Shri by the Government of India, for his contributions to Environmental Science — one of India's most prestigious science awards."
  }
];

export const MEDIA_TABS: MediaTab[] = [
  {
    id: "innovation",
    label: "Engineering & Innovation",
    items: [
      {
        thumb: "PHYTORID™ ROLLOUT",
        tag: "Technology Rollout · Maharashtra",
        h: "PHYTORID™ Zero-Energy Natural Treatment Scaling Up",
        title: "PHYTORID™ Zero-Energy Wastewater Treatment",
        p: "Constructed-wetland sewage treatment system serving 64 rural communities in Maharashtra.",
        meta: "Rural Sanitation · Active",
        body: "Dr. Kumar spearheaded the rollout of PHYTORID™, a zero-energy natural wastewater treatment technology, across 64 rural communities in Maharashtra. This constructed-wetland environmental engineering solution is currently under active review for technology transfer by over 15 distinct domestic utilities and regional development boards to solve complex sanitation infrastructure limits without grid energy dependencies."
      },
      {
        thumb: "EMISSIONS MANDATE",
        tag: "Automobile Emissions Pioneer · Policy",
        h: "Technical Foundation for Landmark 1996 Catalytic Converter Mandate",
        title: "Indian Automobile Emissions Pioneer",
        p: "Core research contributions toward introducing catalytic converters for passenger vehicles.",
        meta: "National Policy · 1996",
        body: "Dr. Kumar pioneered the technical formulation and administrative enforcement of the landmark 1996 national mandate introducing catalytic converters for passenger vehicles across India's urban networks. His research established the emissions guidelines and testing protocols that shaped the country's early clean transport landscape."
      },
      {
        thumb: "AIR QUALITY MONITORS",
        tag: "Pollution Monitoring · Frameworks",
        h: "Leadership over Ambient Air Quality and Dispersion Modeling Arrays",
        title: "Multi-Agency Air Pollution Frameworks",
        p: "Ambient air monitoring networks, source apportionment, and localized dispersion modeling.",
        meta: "Industrial Zones · Monitored",
        body: "Providing engineering leadership over urban ambient air quality monitoring frameworks, source apportionment arrays, and localized pollutant dispersion modeling. These systems have been deployed across highly industrialized economic zones to identify unique pollution profiles and target mitigation strategies."
      }
    ]
  },
  {
    id: "academic",
    label: "Academic & Institutional",
    items: [
      {
        thumb: "IIT DELHI (CERCA)",
        tag: "Academic Leadership · IIT Delhi",
        h: "Steering Center for Climate Change and Air Pollution Research",
        title: "Steering Committee Chairperson at CERCA, IIT Delhi",
        p: "Guiding interdisciplinary climate risk tracking and atmospheric science modeling.",
        meta: "CERCA · Chairperson",
        body: "Dr. Rakesh Kumar serves as the Chairperson of the Steering Committee for the Arun Duggal Center for Research in Climate Change and Air Pollution (CERCA) at IIT Delhi, guiding interdisciplinary climate risk tracking, policy advisory programs, and advanced atmospheric science modeling."
      },
      {
        thumb: "CSIR HEADQUARTERS",
        tag: "Institutional Coordination · Delhi",
        h: "Coordinating CSIR's High-Level Science Programs and Industry Ops",
        title: "CSIR Special Programs Coordinator",
        p: "Bridging high-level research objectives with industrial operations.",
        meta: "CSIR · Coordinator",
        body: "Documenting his role coordinating national research protocols, bridging high-level science goals with industrial operations directly from the Council of Scientific and Industrial Research (CSIR) headquarters in Delhi."
      },
      {
        thumb: "INDOOR ENVIRONMENT",
        tag: "Public Health Advocacy · SIE",
        h: "Advocating Clean Indoor Air Inside Kitchens, Factories, and Workplaces",
        title: "President, Society for Indoor Environment (SIE)",
        p: "Field research measuring indoor air quality in rural kitchens and corporate floors.",
        meta: "SIE · President",
        body: "As President of the Society for Indoor Environment (SIE), Dr. Kumar leads field public health research programs measuring indoor air quality inside rural domestic kitchens, industrial floors, and standard corporate workplaces to mitigate indoor pollutant exposure."
      },
      {
        thumb: "AWMA INDIA CHAPTER",
        tag: "Professional Leadership · AWMA",
        h: "Bridging Academia and Industry via Waste & Air Management Forums",
        title: "Chairperson, AWMA India Chapter",
        p: "Bridging environmental academic studies with applied compliance frameworks.",
        meta: "AWMA India · Chairperson",
        body: "Serving as Chairperson of the Air & Waste Management Association (AWMA) India Chapter, Dr. Kumar organizes technological workshops that bridge academic environmental studies with applied industrial compliance frameworks to improve compliance and engineering standards."
      }
    ]
  },
  {
    id: "international",
    label: "International & Public Health",
    items: [
      {
        thumb: "WHO COLLABORATION",
        tag: "Joint Epidemiological Research",
        h: "WHO Collaboration: Connecting Climate Variations to Public Health",
        title: "Joint WHO Epidemiological Projects",
        p: "Epidemiologic research connecting long-term climate variations with regional health.",
        meta: "WHO Collaboration · Active",
        body: "Dr. Kumar profiled his joint climate change and epidemiologic research initiatives launched across multiple Indian academic nodes in active collaboration with the World Health Organization (WHO), connecting long-term climate variations directly to regional public health trends."
      },
      {
        thumb: "GLOBAL CONSULTANCY",
        tag: "International Consulting · 30+ Yrs",
        h: "Environmental Project Audits and Monitoring for Global Entities",
        title: "Global Environmental Consulting & Auditing",
        p: "Audits and monitoring for USEPA, IAEA, World Bank, and ADB.",
        meta: "USEPA, IAEA, World Bank, ADB",
        body: "Detailing over three decades of environmental project management, monitoring networks, and compliance audits structured alongside major international entities including the United States Environmental Protection Agency (USEPA), the International Atomic Energy Agency (IAEA), the World Bank, and the Asian Development Bank (ADB)."
      }
    ]
  }
];
