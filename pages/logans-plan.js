import React, { useState, useEffect } from 'react';
import styles from '../styles/LogansPlan.module.css';

function LogansPlan() {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dayPlans, setDayPlans] = useState({});

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || {};
    const savedDayPlans = JSON.parse(localStorage.getItem('dayPlans')) || {};
    setNotes(savedNotes);
    setDayPlans(savedDayPlans);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('dayPlans', JSON.stringify(dayPlans));
  }, [dayPlans]);

  const renderCalendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`empty-${i}`} className={styles.calendarDayEmpty}></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = new Date().toDateString() === new Date(currentYear, currentMonth, day).toDateString();
      calendarDays.push(
        <div
          key={day}
          className={`${styles.calendarDay} ${isToday ? styles.calendarDayToday : ''}`}
          onClick={() => handleDayClick(day)}
        >
          <div className={styles.dayNumber}>{day}</div>
          <textarea
            className={styles.noteInput}
            value={notes[day] || ''}
            onChange={(e) => handleNoteChange(day, e.target.value)}
            placeholder="Add a note"
          />
        </div>
      );
    }

    return (
      <div className={styles.calendar}>
        <div className={styles.calendarHeader}>
          {daysOfWeek.map((day) => (
            <div key={day} className={styles.calendarDayHeader}>
              {day}
            </div>
          ))}
        </div>
        <div className={styles.calendarBody}>{calendarDays}</div>
      </div>
    );
  };

  const handleNoteChange = (day, note) => {
    const newNotes = { ...notes, [day]: note };
    setNotes(newNotes);
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const getPrevMonthName = () => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    return monthNames[prevMonth.getMonth()];
  };

  const getNextMonthName = () => {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    return monthNames[nextMonth.getMonth()];
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePlanChange = (block, value) => {
    const newDayPlans = { ...dayPlans, [selectedDay]: { ...dayPlans[selectedDay], [block]: value } };
    setDayPlans(newDayPlans);
  };

  const renderModal = () => {
    if (!isModalOpen) return null;

    const dayPlan = dayPlans[selectedDay] || {};

    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.closeButton} onClick={closeModal}>×</span>
          <h2>Plan for {selectedDay} {monthNames[date.getMonth()]}</h2>
          <div className={styles.planBlock}>
            <textarea
              value={dayPlan.block1 || ''}
              onChange={(e) => handlePlanChange('block1', e.target.value)}
              placeholder="Block 1"
            />
          </div>
          <div className={styles.planBlock}>
            <textarea
              value={dayPlan.block2 || ''}
              onChange={(e) => handlePlanChange('block2', e.target.value)}
              placeholder="Block 2"
            />
          </div>
          <div className={styles.planBlock}>
            <textarea
              value={dayPlan.block3 || ''}
              onChange={(e) => handlePlanChange('block3', e.target.value)}
              placeholder="Block 3"
            />
          </div>
          <div className={styles.planBlock}>
            <textarea
              value={dayPlan.block4 || ''}
              onChange={(e) => handlePlanChange('block4', e.target.value)}
              placeholder="Block 4"
            />
          </div>
          <div className={styles.planBlock}>
            <textarea
              value={dayPlan.block5 || ''}
              onChange={(e) => handlePlanChange('block5', e.target.value)}
              placeholder="Block 5"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.logansPlan}>
      <header className={styles.logansPlanHeader}>
        <h1>Logan's Plan</h1>
        <div>
          <button onClick={handlePrevMonth}>{getPrevMonthName()}</button>
          <button onClick={handleNextMonth}>{getNextMonthName()}</button>
        </div>
        {renderCalendar()}
        <p>Selected date: {date.toDateString()}</p>
      </header>
      {renderModal()}
    </div>
  );
}

export default LogansPlan;
