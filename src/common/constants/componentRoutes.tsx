import { IRouteComponents } from "../../models/IRouteComponents";
// import { DashBoard } from "../../pages/buyer/dashboard/Dashboard";
import { Footer } from "../components/footer/Footer";
import Header from "../components/header/Header";
import { routeConfig } from "./routeConfig";
// import { ForgotPassword } from "../../pages/buyer/login/forgot_password/ForgotPassword";
import Login from "../../pages/buyer/login/signIn/signIn";
import ResetLink from "../../pages/buyer/login/resetLink/resetLink";
import ProductListingPage from "../../pages/productListing/ProductListingPage";
import AccountVerification from "../../pages/buyer/login/accountVerification/accountVerification";
import { ForgotPassword } from "../../pages/buyer/login/forgotPassword/forgotPassword";
import ResetCompleted from "../../pages/buyer/login/resetCompleted/resetCompleted";
import { ResetPassword } from "../../pages/buyer/login/resetPassword/resetPassword";
import SignUpForm from "../../pages/buyer/login/signUp/signUp";


export const componentRoutes: Array<IRouteComponents> = [
  {
    path: routeConfig.dashboard,
    element: (
      <div className="parent_container">
        <Header />
        <div className="content_container">
          {/* <DashBoard /> */}
          <ProductListingPage />
        </div>
        <Footer />
      </div>
    ),
  },
];

export const loginRoutes: Array<IRouteComponents> = [
  {
    path: routeConfig.signup,
    element: (
      <div className="parent_container">
        {/* <Header /> */}
        <div className="content_container">
          <SignUpForm />
        </div>
        <Footer />
      </div>
    ),
  },

  {
    path: routeConfig.signin,
    element: (
      <div className="parent_container">
        {/* <Header /> */}
        <div className="content_container">
          <Login />
        </div>
        <Footer />
      </div>
    ),
  },

  {
    path: routeConfig.forgotPassword,
    element: (
      <div className="parent_container">
        {/* <Header /> */}
        <div className="content_container">
          <ForgotPassword />
        </div>
        <Footer />
      </div>
    ),
  },

  {
    path: routeConfig.accountVerification,
    element: (
      <div className="parent_container">
        {/* <Header /> */}
        <div className="content_container">
          <AccountVerification />
        </div>
        <Footer />
      </div>
    ),
  },

  {
    path: routeConfig.resetPassword,
    element: (
      <div className="parent_container">
        {/* <Header /> */}
        <div className="content_container">
          <ResetPassword />
        </div>
        <Footer />
      </div>
    ),
  },

  {
    path: routeConfig.resetLink,
    element: (
      <div className="parent_container">
        {/* <Header /> */}
        <div className="content_container">
          <ResetLink />
        </div>
        <Footer />
      </div>
    ),
  },
  
  {
    path: routeConfig.resetCompleted,
    element: (
      <div className="parent_container">
        <Header />
        <div className="content_container">
          <ResetCompleted />
          
        </div>
        <Footer />
      </div>
    ),
  },
]
