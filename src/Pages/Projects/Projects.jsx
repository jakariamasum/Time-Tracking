import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        tasks: '',
    });
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        setProjects(storedProjects);
    }, []);

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (editingIndex !== null) {
            const updatedProjects = [...projects];
            updatedProjects[editingIndex] = formData;
            setProjects(updatedProjects);
            setEditingIndex(null);
            showAlert('success', 'Project updated successfully!');
        } else {
            setProjects([...projects, formData]);
            showAlert('success', 'Project added successfully!');
        }

        setFormData({
            name: '',
            description: '',
            tasks: '',
        });
    };

    const handleEditClick = (index) => {
        setFormData(projects[index]);
        setEditingIndex(index);
    };

    const handleDeleteClick = (index) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedProjects = projects.filter((_, i) => i !== index);
                setProjects(updatedProjects);
                showAlert('success', 'Project deleted successfully!');
            }
        });
    };

    const showAlert = (icon, text) => {
        Swal.fire({
            icon: icon,
            text: text,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>

            <form onSubmit={handleFormSubmit} className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Project Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="tasks" className="block text-sm font-medium text-gray-700">
                            Associated Tasks
                        </label>
                        <input
                            type="text"
                            id="tasks"
                            name="tasks"
                            value={formData.tasks}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Project Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            required
                        ></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                    {editingIndex !== null ? 'Update Project' : 'Add Project'}
                </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-md border border-gray-300 transform hover:scale-105 transition-transform duration-300"
                    >
                        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                        <p className="text-gray-600 mb-2">{project.description}</p>
                        <p className="text-gray-600">{project.tasks}</p>
                        <div className="mt-4 flex space-x-2">
                            <button
                                className="text-blue-500 hover:underline"
                                onClick={() => handleEditClick(index)}
                            >
                                Edit
                            </button>
                            <button
                                className="text-red-500 hover:underline"
                                onClick={() => handleDeleteClick(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
