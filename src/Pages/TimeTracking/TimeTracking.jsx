import React, { useState, useRef, useEffect } from 'react';
import TimerDisplay from './TimerDisplay';
import ManualEntryModal from '../../components/ManualEntry/ManualEntry';
import BreakModal from '../../components/BreakModal/BreakModal';
import BreakSettings from '../../components/BreakSetting/BreakSetting';
import ProjectSettings from '../../components/ProjectSetting/ProjectSetting';
import TimerSettings from '../../components/TimerSetting/TimerSetting';

const TimeTracking = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [breakModal, setBreakModal] = useState(false);
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

    if ((isRunning && !isPaused) || (isBreak && !isPaused)) {
      const startTime = (currentProject || isBreak) ? Date.now() - timer : Date.now();

      intervalId = setInterval(() => {
        setTimer(Date.now() - startTime);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, isPaused, currentProject, timer, isBreak]);

  const startTimer = () => {
    if (!isRunning && !isBreak) {
      setIsRunning(true);
      setTimer(0);
      const startTime = new Date();

      setCurrentProject({
        projectName: defaultProject ? defaultProject : projectNameRef.current.value,
        startTime,
      });
    } else if (!isRunning && isBreak) {
      setIsBreak(false);
      setIsRunning(true);
      setTimer(0);
    }
  };

  const stopTimer = () => {
    if (isRunning || isBreak) {
      setIsRunning(false);
      setIsBreak(false);
      setIsPaused(false);
      setTimer(0);
      const endTime = new Date();

      if (!isBreak) {
        const newActivity = {
          projectName: currentProject.projectName,
          startTime: currentProject.startTime,
          endTime,
        };

        saveActivity(newActivity);

        setActivities((prevActivities) => [...prevActivities, newActivity]);
        setCurrentProject(null);
      }
    }
  };

  const pauseTimer = () => {
    if ((isRunning && !isBreak) || (isBreak && !isPaused)) {
      setIsPaused(true);
    }
  };

  const resumeTimer = () => {
    if ((isPaused && isRunning) || (isPaused && isBreak)) {
      setIsPaused(false);
    }
  };

  const startBreak = () => {
    if (!isRunning && !isBreak) {
      setIsBreak(true);
      setIsPaused(false);
      setTimer(0);
      setBreakModal(true);

      setTimeout(() => {
        setBreakModal(false);
        setIsBreak(0);
        setTimer(0)
      }, 30000);
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
      name: defaultProject ? defaultProject : '',
      startTime: '',
      endTime: '',
    });
  };

  const handleManualEntryChange = (e) => {
    setManualEntryData({
      ...manualEntryData,
      [e.target.name]: defaultProject ? defaultProject : e.target.value,
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


  const [manualTracking, setManualTracking] = useState(false);
  const [defaultProject, setDefaultProject] = useState('');
  const [breakReminders, setBreakReminders] = useState(false);

  const toggleManualTracking = () => {
    setManualTracking((prev) => !prev);
  };

  const toggleBreakReminders = () => {
    setBreakReminders((prev) => !prev);
  };





  const formatTime = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const getActionButton = () => {
    if ((isRunning && isPaused) || (isBreak && isPaused)) {
      return (
        <>
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
        </>
      );
    } else if ((isRunning && !isPaused) || (isBreak && !isPaused)) {
      return (
        <>
          <button
            onClick={pauseTimer}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Pause
          </button>
          <button
            onClick={stopTimer}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Stop
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={startTimer}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Start
          </button>
          <button
            onClick={startBreak}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Start Break
          </button>
        </>
      );
    }
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


      <div className="flex gap-6">
        <div className="mb-4">
          <button
            onClick={openManualEntryModal}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded"
          >
            Manual Entry
          </button>
        </div>

        <div className="mb-4">
          <ProjectSettings
            defaultProject={defaultProject}
            setDefaultProject={setDefaultProject}
          />
        </div>

        <div className="mb-4">
          <BreakSettings
            breakReminders={breakReminders}
            toggleBreakReminders={toggleBreakReminders}
          />
        </div>
      </div>






      <div className="mb-4">
        {getActionButton()}
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
        <ManualEntryModal
          modalData={manualEntryData}
          handleChange={handleManualEntryChange}
          handleSubmit={submitManualEntry}
          closeModal={closeManualEntryModal}
        />
      )}

      {breakModal && (
        <BreakModal timer={timer} />
      )}
    </div>
  );
};

export default TimeTracking;
