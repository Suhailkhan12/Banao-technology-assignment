import React, { useState } from "react";

const MilestoneTracker = () => {
  const [milestones, setMilestones] = useState([]);
  const [milestone, setMilestone] = useState({
    id: null,
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMilestone((prevMilestone) => ({
      ...prevMilestone,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (milestone.id === null) {
      setMilestones([...milestones, { ...milestone, id: Date.now() }]);
    } else {
      const updatedMilestones = milestones.map((ms) =>
        ms.id === milestone.id ? { ...milestone } : ms
      );
      setMilestones(updatedMilestones);
    }
    setMilestone({ id: null, date: "", description: "" });
  };

  const handleEdit = (id) => {
    const milestoneToEdit = milestones.find((ms) => ms.id === id);
    setMilestone({ ...milestoneToEdit });
  };

  const handleDelete = (id) => {
    const updatedMilestones = milestones.filter((ms) => ms.id !== id);
    setMilestones(updatedMilestones);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Child Milestone Tracker</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="hidden" name="id" value={milestone.id} />
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
          {milestone.id ? "Update" : "Add Milestone"}
        </button>
      </form>
      <div>
        <h3 className="text-lg font-bold mb-2">Milestones:</h3>
        <ul>
          {milestones.map((ms) => (
            <li key={ms.id} className="mb-2">
              <strong>{ms.date}:</strong> {ms.description}
              <button
                className="ml-2 text-blue-500"
                onClick={() => handleEdit(ms.id)}
              >
                Edit
              </button>
              <button
                className="ml-2 text-red-500"
                onClick={() => handleDelete(ms.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MilestoneTracker;
