import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Works from "./pages/Works";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<Work />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* <Route path="/blogs/:id" element={<Blog />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
