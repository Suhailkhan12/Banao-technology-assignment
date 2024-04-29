import MilestoneTracker from "./feature.jsx/Milestonetracker";
import ParentingTips from "./feature.jsx/Parenttips";

function App() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen flex justify-center items-center">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-8 text-center">Parenting App</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MilestoneTracker />
            <ParentingTips />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
