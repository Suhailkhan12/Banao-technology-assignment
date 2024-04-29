import React, { useState } from "react";

const ParentingTips = () => {
  const [articles] = useState([
    {
      title: "Tips for Better Sleep",
      content:
        "Establish a consistent bedtime routine, create a comfortable sleep environment, limit screen time before bed, encourage daytime physical activity, provide healthy snacks, incorporate relaxation techniques, set clear sleep expectations, address anxiety, avoid caffeine, and seek professional help if needed. These tips aim to promote healthy sleep habits and ensure children get the restful sleep they need for optimal growth and development.",
    },
    {
      title: "Healthy Eating Habits",
      content:
        "Healthy eating habits involve consuming a balanced diet that includes a variety of nutritious foods such as fruits, vegetables, whole grains, lean proteins, and healthy fats. These habits also entail limiting intake of processed foods, sugary snacks, and high-fat foods. By focusing on nutrient-dense foods and practicing portion control, individuals can maintain a healthy weight, support overall health, and reduce the risk of chronic diseases. Establishing healthy eating habits early in life sets the foundation for lifelong wellness.",
    },
    // Add more articles here
  ]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Parenting Tips and Articles</h2>
      {articles.map((article, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg font-bold">{article.title}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {activeIndex === index && <p className="mt-4">{article.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default ParentingTips;
