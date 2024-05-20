import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import HomePage from "./pages/HomePage/HomePage";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUS/AboutUS";
import Cart from "./Compents/Cart/CartPage";
import MyAccount from "./pages/MyAccount/MyAccount";
import Packages from "./pages/Packages/Packages";
import PolicyAndPrivacy from "./pages/PolicyAndPrivacy/PolicyAndPrivacy";
import Services from "./pages/Services/Services";
import LoginPage from "./pages/LoginPage/Login";
import SignUp from "./pages/LoginPage/SignUp";
import NavBar from "./Compents/NavBar/NavBar";
import Footer from "./Compents/Footer/Footer";
import Navcol from "./Admin/Navcol/Navcol";
import TopBar from "./Admin/TopBar/TopBar";
import Admin2 from "./Admin/FienenceAdmin/Admin2";
import FormPage from "./pages/Form";
import Erorr404 from "./Erorr/Erorr404";
import HomeAdmin from "./Admin/AdminPages/HomeAdmin/HomeAdmin";
import Page2 from "./Admin/Pages/Page1/Page2";
import CustomerBill from "./Admin/CompentsAdmin/CustomerBill/CustomerData";
import P2 from "./Admin/Pages/Page2/P2";
import Super from "./Admin/SuperAdmin/Super";
import MessagePage from "./Admin/AdminPages/MessagePage/MessagePage";
import TransactionPage from "./Admin/AdminPages/TransactionPage/TransactionPage";
import ReservationsPage from "./Admin/AdminPages/ReservationsPage/ReservationsPage";
import RequestsPage from "./Admin/AdminPages/RequestsPage/RequestsPage";
import ItemCardPage from "./Admin/AdminPages/PakageDetails/ItemCardPage";
import TimeSlotPage from "./Admin/AdminPages/TimeSlotsPage/TimeSlotsPage";
import UserVerifiedPage from "./Admin/AdminPages/UserVerify/UserVerifiedPage";
import UsersPage from "./Admin/AdminPages/UsersList/UsersPage";
import ForgotPasswordForm from "./pages/ResetPassword/ForgetPassword";
import OTP from "./pages/ResetPassword/EnterOTP";
import BasicInfoPage from "./Compents/MyAccountCompents/BasicInfoPage/BasicInfoPage";
import { AuthProvider } from "./store/auth";
import RequireAuth from "./store/RequireAuth";
import ProductPage from "./pages/Products/ProudactPage";
import CARTO from "./pages/Products/CART/cartPage"
function App() {
  return (
    <RecoilRoot>
      <div className="App">

        <AuthProvider>

          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <NavBar />
                    <Outlet />
                    <Footer />
                  </>
                }
              >

                <Route index element={<HomePage />} />
                <Route path="ContactUs" element={<ContactUs />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="Cart" element={<Cart />} />
                <Route path="MyAccount" element={<RequireAuth> <MyAccount /> </RequireAuth>} />
                <Route path="Packages" element={<Packages />} />
                <Route path="Services" element={<Services />} />
                <Route path="PolicyAndPrivacy" element={<PolicyAndPrivacy />} />
                <Route path="form" element={<FormPage />} />
                <Route path="SignUp" element={<SignUp />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="/Cart2" element={<CARTO />} />
              </Route>
              <Route path="Admin*" element={<NoNavBarFooterRoutes />} />
              <Route path="SA*" element={<NoNavBarFooterRoutes2 />} />
              <Route path="*" element={<Erorr404 />} />
              <Route path="Forget" element={<ForgotPasswordForm />} />
              <Route path="EnterOTP" element={<OTP />} />
              <Route path="Basic" element={<BasicInfoPage />} />
              <Route path="Product" element={<ProductPage />} />
          
            </Routes>
          </BrowserRouter>

        </AuthProvider>

      </div>
    </RecoilRoot>
  );
}

function NoNavBarFooterRoutes() {
  return (
    <div className="SA1">
      <Navcol />
      <div className="Main">
        <TopBar />
        <Routes>
          <Route index element={<HomeAdmin />}
          />
          {/* Add Admin2 route here */}
          <Route path="H1" element={<Page2 />} />
          <Route path="H2" element={<P2 />} />
          <Route path="*" element={<Erorr404 />} />
          <Route path="CustomerBill" element={<CustomerBill />} />

          {/* <Route index element={<HomeAdmin />} /> */}
        </Routes>

      </div>
    </div >
  );
}
function NoNavBarFooterRoutes2() {
  return (
    <div className="SA2">
      <Navcol />
      <div className="Main2">
        <TopBar />
        <Routes>
          <Route index element={<HomeAdmin />}
          />
          {/* Add Admin2 route here */}
          <Route path="H1" element={<Super />} />
          <Route path="H2" element={<P2 />} />
          <Route path="PakageDetails" element={<ItemCardPage />} />
          <Route path="UsersPage" element={<UsersPage />} />
          <Route path="UserVerified" element={<UserVerifiedPage />} />
          <Route path="Slots" element={<TimeSlotPage />} />
          <Route path="Message" element={<MessagePage />} />
          <Route path="Transaction" element={<TransactionPage />} />
          <Route path="Reservations" element={<ReservationsPage />} />
          <Route path="Requests" element={<RequestsPage />} />
          <Route path="*" element={<Erorr404 />} />
          <Route path="CustomerBill" element={<CustomerBill />} />

          {/* <Route index element={<HomeAdmin />} /> */}
        </Routes>

      </div>
    </div >
  );
}

export default App;
