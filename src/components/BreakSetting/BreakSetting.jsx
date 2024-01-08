import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const BreakSettings = ({ breakReminders, toggleBreakReminders }) => {
  const [reminderInterval, setReminderInterval] = useState(null);

  useEffect(() => {
    if (breakReminders) {
      const intervalId = setInterval(() => {
        Swal.fire({
          icon: 'info',
          title: 'Take a Break!',
          text: 'It\'s time to take a break.',
          timer: 5000,
          showConfirmButton: false,
        });
      }, 30000);

      setReminderInterval(intervalId);
    } else {
      clearInterval(reminderInterval);
    }

    return () => {
      clearInterval(reminderInterval);
    };
  }, [breakReminders]);

  const handleToggleBreakReminders = () => {
    toggleBreakReminders();
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={breakReminders}
          onChange={handleToggleBreakReminders}
        />
        Enable Break Reminders
      </label>
    </div>
  );
};

export default BreakSettings;
