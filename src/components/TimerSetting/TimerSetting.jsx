// TimerSettings.js

import React from 'react';

const TimerSettings = ({ manualTracking, toggleManualTracking }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={manualTracking}
          onChange={toggleManualTracking}
        />
        Manual Time Tracking
      </label>
    </div>
  );
};

export default TimerSettings;
