import React, { useState } from "react";

const ParentingTips = () => {
  const [articles] = useState([
    {
      title: "Tips for Better Sleep",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium rutrum neque nec scelerisque. Vestibulum ut ultricies tortor. Proin efficitur ipsum at erat rhoncus, nec pharetra sapien efficitur.",
    },
    {
      title: "Healthy Eating Habits",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium rutrum neque nec scelerisque. Vestibulum ut ultricies tortor. Proin efficitur ipsum at erat rhoncus, nec pharetra sapien efficitur.",
    },
    // Add more articles here
  ]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Parenting Tips and Articles</h2>
      {articles.map((article, index) => (
        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ParentingTips;
