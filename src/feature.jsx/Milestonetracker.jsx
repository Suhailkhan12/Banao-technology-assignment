import React, { useState } from "react";

const MilestoneTracker = () => {
  const [milestones, setMilestones] = useState([]);
  const [milestone, setMilestone] = useState({ date: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMilestone((prevMilestone) => ({
      ...prevMilestone,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMilestones([...milestones, milestone]);
    setMilestone({ date: "", description: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Child Milestone Tracker</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="date" className="mr-2">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={milestone.date}
            onChange={handleChange}
            className="border border-gray-400 rounded p-2"
          />
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="description" className="mr-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={milestone.description}
            onChange={handleChange}
            className="border border-gray-400 rounded p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Milestone
        </button>
      </form>
      <div>
        <h3 className="text-lg font-bold mb-2">Milestones:</h3>
        <ul>
          {milestones.map((ms, index) => (
            <li key={index} className="mb-2">
              <strong>{ms.date}:</strong> {ms.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MilestoneTracker;
