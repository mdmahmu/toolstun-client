import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AllTools from "./Pages/AllTools/AllTools";
import AddProduct from "./Pages/Dashborad/AddProduct/AddProduct";
import AddReview from "./Pages/Dashborad/AddReview/AddReview";
import Dashboard from "./Pages/Dashborad/Dashboard";
import ManageOrders from "./Pages/Dashborad/ManageOrders/ManageOrders";
import MyOrders from "./Pages/Dashborad/MyOrders/MyOrders";
import MyProfile from "./Pages/Dashborad/MyProfile/MyProfile";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";

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

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>

          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="manage_orders" element={<ManageOrders></ManageOrders>}></Route>
          <Route path="add_product" element={<AddProduct></AddProduct>}></Route>
          <Route path="my_orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="add_review" element={<AddReview></AddReview>}></Route>
          <Route path="my_profile" element={<MyProfile></MyProfile>}></Route>

        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
