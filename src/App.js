import Navbar from "./components/Navbar";
import AllWorks from "./pages/Admin/AllWorks";
import Dashboard from "./pages/Admin/Dashboard";
import EditAbout from "./pages/Admin/EditAbout";
import ToolStack from "./pages/Admin/ToolStack";
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
          <Route path="about" element={<EditAbout />} />
          <Route path="tool-stack" element={<ToolStack />} />
          <Route path="works" element={<AllWorks />} />
          <Route path="blogs" element={<></>} />
        </Route>
      </Routes >
    </>
  );
}

export default App;
