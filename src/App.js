import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Artist from "./website/pages/Artist";
import Blog from "./website/pages/Blog";
import Contact from "./website/pages/Contact";
import Dashboard from "./admin/pages/Dashboard";
import ManageArtist from "./admin/pages/ManageArtist";
import AddBlog from "./admin/pages/AddBlog";
import ManageBlog from "./admin/pages/ManageBlog";
import ManageContact from "./admin/pages/ManageContact";
import Signup from "./website/pages/Signup";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* website route */}
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/artist" element={<Artist/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>




     {/* admin route */}
     <Route path="/mdashboard" element={<Dashboard/>}></Route>
    <Route path="/martist" element={<ManageArtist/>}></Route>
    <Route path="/addblog" element={<AddBlog/>}></Route>
    <Route path="/manageblog" element={<ManageBlog/>}></Route>
    <Route path="/acontact" element={<ManageContact/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
