import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login/Login";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About";
import Footer from "./Pages/Shared/Footer/Footer";
import Gallery from "./Pages/Inventory/Gallery/Gallery/Gallery";
import Registration from "./Pages/Login/Registration/Registration";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ServiceDetail from "./Pages/Inventory/Services/ServiceDetail/ServiceDetail";
import ManageInventory from "./Pages/Inventory/ManageInventory/ManageInventory";
import AddInventory from "./Pages/Inventory/AddInventory/AddInventory";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ServiceDetail></ServiceDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory:/id"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addinventory"
          element={
            <RequireAuth>
              <AddInventory></AddInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
