import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import NewUsers from "./Pages/NewUsers";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<NewUsers />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
