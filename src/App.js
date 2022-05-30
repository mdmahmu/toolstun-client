import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AllTools from "./Pages/AllTools/AllTools";
import Dashboard from "./Pages/Dashborad/Dashboard";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
        <Route path='/all_tools' element={<AllTools></AllTools>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>


        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
