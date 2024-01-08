import React, { useState, useEffect } from 'react';

const ProjectSettings = ({ defaultProject, setDefaultProject }) => {
  const [isDefaultChecked, setIsDefaultChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsDefaultChecked(!isDefaultChecked);
  };

  useEffect(() => {
    if (isDefaultChecked) {
      setDefaultProject('Ninja project');
    } else {
      setDefaultProject('');
    }
  }, [isDefaultChecked, setDefaultProject]);

  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isDefaultChecked}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <span className="text-sm">Set as Ninja project</span>
      </label>
    </div>
  );
};

export default ProjectSettings;
