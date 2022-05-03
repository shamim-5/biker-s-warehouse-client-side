import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Inventory from "./Pages/Inventory/Inventory/Inventory";
import Login from "./Pages/Login/Login/Login";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About";
import Footer from "./Pages/Shared/Footer/Footer";
import Gallery from "./Pages/Inventory/Gallery/Gallery/Gallery";
import Registration from "./Pages/Login/Registration/Registration";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="registration" element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
