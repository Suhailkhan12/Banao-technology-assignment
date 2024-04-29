import MilestoneTracker from "./feature.jsx/Milestonetracker";
import ParentingTips from "./feature.jsx/Parenttips";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Parenting App</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MilestoneTracker />
          <ParentingTips />
        </div>
      </div>
    </>
  );
}

export default App;
