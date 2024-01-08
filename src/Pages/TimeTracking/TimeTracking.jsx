import React, { useState, useRef, useEffect } from 'react';
import TimerDisplay from './TimerDisplay';

const TimeTracking = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [activities, setActivities] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const projectNameRef = useRef(null);
  const [manualEntryModal, setManualEntryModal] = useState(false);
  const [manualEntryData, setManualEntryData] = useState({
    name: '',
    startTime: '',
    endTime: '',
  });

  useEffect(() => {
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

  const openManualEntryModal = () => {
    setManualEntryModal(true);
  };

  const closeManualEntryModal = () => {
    setManualEntryModal(false);
    setManualEntryData({
      name: '',
      startTime: '',
      endTime: '',
    });
  };

  const handleManualEntryChange = (e) => {
    setManualEntryData({
      ...manualEntryData,
      [e.target.name]: e.target.value,
    });
  };

  const submitManualEntry = () => {
    const { name, startTime, endTime } = manualEntryData;

    if (name && startTime && endTime) {
      const newActivity = {
        projectName: name,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
      };

      saveActivity(newActivity);

      setActivities((prevActivities) => [...prevActivities, newActivity]);
      closeManualEntryModal();
    }
  };

  const formatTime = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
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

      <div className="mb-4">
        <button
          onClick={openManualEntryModal}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Manual Entry
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
                    {formatTime(
                      Math.floor((new Date(activity.endTime) - new Date(activity.startTime)) / 1000)
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {manualEntryModal && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>•

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Manual Entry
                    </h3>
                    <div className="mt-2">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Project Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={manualEntryData.name}
                        onChange={handleManualEntryChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                        placeholder="Enter project name"
                        required
                      />

                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Start Time
                      </label>
                      <input
                        type="datetime-local"
                        name="startTime"
                        value={manualEntryData.startTime}
                        onChange={handleManualEntryChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                        required
                      />

                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        End Time
                      </label>
                      <input
                        type="datetime-local"
                        name="endTime"
                        value={manualEntryData.endTime}
                        onChange={handleManualEntryChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={submitManualEntry}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Save
                </button>
                <button
                  onClick={closeManualEntryModal}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeTracking;
