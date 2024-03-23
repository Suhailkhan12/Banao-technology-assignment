import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import CreatePost from "./features/CreatePost/CreatePost";
import SinglePost from "./features/SinglePost/SinglePost";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/post" element={<CreatePost />} />
          <Route path="/:postId" element={<SinglePost />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
