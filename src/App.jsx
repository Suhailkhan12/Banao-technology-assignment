import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
