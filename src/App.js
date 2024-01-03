import Navbar from "./components/Navbar";
import Dashboard from "./pages/Admin/Dashboard";
import About from "./pages/Visitor/About";
import Blog from "./pages/Visitor/Blog";
import Blogs from "./pages/Visitor/Blogs";
import Contact from "./pages/Visitor/Contact";
import Home from "./pages/Visitor/Home";
import Work from "./pages/Visitor/Work";
import Works from "./pages/Visitor/Works";
import { Routes, Route, useLocation } from "react-router-dom";


function App() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith("/admin")
  return (
    <>
      {isAdmin ? <Navbar userRole="admin" /> : <Navbar userRole="visitor" />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<Work />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="personal-details" element={<></>} />
          <Route path="tool-stack" element={<></>} />
          <Route path="post-work" element={<></>} />
          <Route path="post-blog" element={<></>} />
        </Route>
      </Routes >
    </>
  );
}

export default App;
