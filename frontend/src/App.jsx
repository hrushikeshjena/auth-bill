import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Error from "./components/Error.js"
import Signup from "./pages/authenticationSystem/singup/index.jsx";
import Login from "./pages/authenticationSystem/login/index.jsx";
import EmailVerify from "./pages/authenticationSystem/emailVerify/index.jsx";
import ForgetPassword from "./pages/authenticationSystem/forgetPassWord/index";
import ResetPassword from "./pages/authenticationSystem/passwordReset/index.jsx";
import Dashboard from "./components/MainFile/Main.jsx";
import Inventory from "./pages/Inventory/Inventory";
import MenuItems from "./pages/MenuItems/AddMenuItem";
import BillingLogin from "./pages/billing-dashboard/billingLogin/BillingLogin.jsx";
import BillingDashboard from "./pages/billing-dashboard/billingDashboardRouting/BillingDashboardRouting";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {user ? (
            <Route path="/" element={<Dashboard />} />
          ) : (
            <Route path="/" element={<Navigate replace to="/login" />} />
          )}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route
            path="/password-reset/:id/:token"
            element={<ResetPassword />}
          />
          {/* <Route path="*" element=
          // {<Navigate replace to="/" />} 
          <Error/>
          /> */}

          <Route path="/Signin/billing" element={<BillingLogin />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/menuitems" element={<MenuItems />} />
        </Routes>
        <BillingDashboard />
      </BrowserRouter>
    </>
  );
}

export default App;
