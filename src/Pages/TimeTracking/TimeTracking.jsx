import { useState, useRef, useEffect } from 'react';
import TimerDisplay from './TimerDisplay';

const TimeTracking = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [activities, setActivities] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const projectNameRef = useRef(null);

  useEffect(() => {
    // Load activities from localStorage when the component mounts
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(storedActivities);
  }, []);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      const startTime = currentProject ? Date.now() - timer : Date.now();

      intervalId = setInterval(() => {
        setTimer(Date.now() - startTime);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, currentProject, timer]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      setTimer(0);
      const startTime = new Date();

      setCurrentProject({
        projectName: projectNameRef.current.value,
        startTime,
      });
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      setTimer(0);
      const endTime = new Date();

      const newActivity = {
        projectName: currentProject.projectName,
        startTime: currentProject.startTime,
        endTime,
      };

      // Save the activity to local storage
      saveActivity(newActivity);

      setActivities((prevActivities) => [...prevActivities, newActivity]);
      setCurrentProject(null);
    }
  };

  const resumeTimer = () => {
    if (!isRunning && currentProject) {
      setIsRunning(true);
      const elapsedMilliseconds = new Date() - currentProject.startTime;

      const startTime = Date.now() - elapsedMilliseconds;

      const intervalId = setInterval(() => {
        setTimer(Date.now() - startTime);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  };

  const saveActivity = (activity) => {
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    storedActivities.push(activity);
    localStorage.setItem('activities', JSON.stringify(storedActivities));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Project Name
        </label>
        <input
          ref={projectNameRef}
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter project name"
          required
        />
      </div>

      <div className="mb-4">
        <button
          onClick={startTimer}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Start
        </button>
        <button
          onClick={resumeTimer}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Resume
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Stop
        </button>
      </div>

      <div className="mb-4 font-bold text-3xl">
        <TimerDisplay timer={timer} />
      </div>

      {activities.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-2">Activity Log</h2>
          <table className="min-w-full border border-gray-500">
            <thead>
              <tr>
                <th className="border px-4 py-2">Project</th>
                <th className="border px-4 py-2">Start Time</th>
                <th className="border px-4 py-2">End Time</th>
                <th className="border px-4 py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{activity.projectName}</td>
                  <td className="border px-4 py-2">
                    {new Date(activity.startTime).toLocaleTimeString()}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(activity.endTime).toLocaleTimeString()}
                  </td>
                  <td className="border px-4 py-2">
                    {Math.floor((new Date(activity.endTime) - new Date(activity.startTime)) / 1000)} seconds
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TimeTracking;
