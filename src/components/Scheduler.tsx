import React, { useState } from 'react';

export const Scheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [duration, setDuration] = useState<string>('30 min');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [agenda, setAgenda] = useState<string>('');
  const [isScheduled, setIsScheduled] = useState<boolean>(false);

  // Generate next 5 business days (excluding Saturday & Sunday)
  const getNextBusinessDays = () => {
    const days = [];
    const current = new Date();
    // Move starting date to tomorrow to avoid booking for today if the slots are already past
    current.setDate(current.getDate() + 1);
    
    while (days.length < 5) {
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // 0 = Sunday, 6 = Saturday
        days.push(new Date(current));
      }
      current.setDate(current.getDate() + 1);
    }
    return days;
  };

  const businessDays = getNextBusinessDays();

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM'
  ];

  const formatValue = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) {
      alert('Please select a date and time slot.');
      return;
    }
    setIsScheduled(true);
  };

  const handleReset = () => {
    setSelectedDate('');
    setSelectedSlot('');
    setDuration('30 min');
    setName('');
    setEmail('');
    setAgenda('');
    setIsScheduled(false);
  };

  if (isScheduled) {
    const dateObj = new Date(selectedDate);
    const dateFormatted = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return (
      <div className="scheduler-success">
        <div className="success-icon">✓</div>
        <h4>Meeting Request Confirmed</h4>
        <p className="success-desc">
          Your call request with Dr. Rakesh Kumar has been registered. A calendar invitation and conference details will be sent shortly.
        </p>
        <div className="summary-card">
          <div className="summary-row">
            <span>Date</span>
            <strong>{dateFormatted}</strong>
          </div>
          <div className="summary-row">
            <span>Time</span>
            <strong>{selectedSlot} ({duration})</strong>
          </div>
          <div className="summary-row">
            <span>Agenda</span>
            <strong>{agenda || 'General Discussion'}</strong>
          </div>
          <div className="summary-row">
            <span>Attendee</span>
            <strong>{name} ({email})</strong>
          </div>
        </div>
        <button type="button" className="btn btn-g" onClick={handleReset} style={{ marginTop: '20px' }}>
          Schedule Another Call
        </button>
      </div>
    );
  }

  return (
    <form className="scheduler-form" onSubmit={handleSubmit}>
      {/* Date Selector */}
      <div className="form-row">
        <label>1. Select a Date</label>
        <div className="date-selector-grid">
          {businessDays.map((date) => {
            const val = formatValue(date);
            const isSelected = selectedDate === val;
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            const dayNum = date.toLocaleDateString('en-US', { day: 'numeric' });
            const monthName = date.toLocaleDateString('en-US', { month: 'short' });
            return (
              <button
                type="button"
                key={val}
                className={`date-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedDate(val)}
              >
                <span className="date-day">{dayName}</span>
                <span className="date-num">{dayNum}</span>
                <span className="date-month">{monthName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slot Selector */}
      <div className="form-row">
        <label>2. Select a Time (IST)</label>
        <div className="slots-grid">
          {timeSlots.map((slot) => {
            const isSelected = selectedSlot === slot;
            return (
              <button
                type="button"
                key={slot}
                className={`slot-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            );
          })}
        </div>
      </div>

      {/* Call Details Grid */}
      <div className="form-double-row">
        <div className="form-row">
          <label>Duration</label>
          <select value={duration} onChange={(e) => setDuration(e.target.value)}>
            <option>15 min</option>
            <option>30 min</option>
            <option>45 min</option>
          </select>
        </div>
        <div className="form-row">
          <label>Your Full Name</label>
          <input
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <label>Your Email Address</label>
        <input
          type="email"
          required
          placeholder="you@organization.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-row">
        <label>Agenda / Topic of Discussion</label>
        <textarea
          rows={3}
          required
          placeholder="e.g. PHYTORID™ tech feasibility, environmental advisory, research collaboration..."
          value={agenda}
          onChange={(e) => setAgenda(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-g" style={{ alignSelf: 'flex-start', marginTop: '10px' }}>
        Confirm & Request Call
      </button>
    </form>
  );
};
