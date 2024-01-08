const TimerDisplay = ({ timer }) => {
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      return formattedTime;
    };
  
    return <div className="timer-display">{formatTime(timer)}</div>;
  };
  export default TimerDisplay;