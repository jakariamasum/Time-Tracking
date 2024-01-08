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
    <div>
      <label>
        <input
          type="text"
          className='bg-gray-200 text-center'
          value={defaultProject}
          onChange={(e) => setDefaultProject(e.target.value)}
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDefaultChecked}
          onChange={handleCheckboxChange}
        />
        Set as Ninja project
      </label>
    </div>
  );
};

export default ProjectSettings;
