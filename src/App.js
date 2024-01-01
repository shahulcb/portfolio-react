import Navbar from "./components/Navbar";
import About from "./pages/Visitor/About";
import Blog from "./pages/Visitor/Blog";
import Blogs from "./pages/Visitor/Blogs";
import Contact from "./pages/Visitor/Contact";
import Home from "./pages/Visitor/Home";
import Work from "./pages/Visitor/Work";
import Works from "./pages/Visitor/Works";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<Work />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
