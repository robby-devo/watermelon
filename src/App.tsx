import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  componentRoutes,
  
} from "./common/constants/componentRoutes";
import { IRouteComponents } from "./models/IRouteComponents";
import useToken from "./hooks/useToken";
import React from "react";
import { ThemeProvider } from "@mui/system";
import { customTheme } from "./common/styles/customTheme";
import ProductListingPage from "./pages/productListing/ProductListingPage";

import { routeConfig } from "./common/constants/routeConfig";
import SignInForm from "./pages/buyer/login/signIn/signIn";
import AccountVerification from "./pages/buyer/login/accountVerification/accountVerification";
import { ResetPassword } from "./pages/buyer/login/resetPassword/resetPassword";
import ResetLink from "./pages/buyer/login/resetLink/resetLink";
import { ForgotPassword } from "./pages/buyer/login/forgotPassword/forgotPassword";
import ResetCompleted from "./pages/buyer/login/resetCompleted/resetCompleted";
import SignUpForm from "./pages/buyer/login/signUp/signUp";

export const TokenContext: any = React.createContext({});

function App() {
  const { sessionToken, removeSessionToken } = useToken();
  const providerValue = React.useMemo(
    () => ({ removeSessionToken }),
    [removeSessionToken]
  );
  if (!sessionToken)
    return (
      <BrowserRouter basename="/">
        <Routes>
          {/* {loginRoutes.map((eachRoute: IRouteComponents) => (
            <Route
              path={eachRoute.path}
              element={eachRoute.element}
              key={eachRoute.path.split("/").join("-")}
            />
          ))} */}
          <Route path={routeConfig.signup} element={<SignUpForm />} />
          <Route path={routeConfig.signin} element={<SignInForm />} />
          <Route
            path={routeConfig.accountVerification}
            element={<AccountVerification />}
          />
          <Route path={routeConfig.resetPassword} element={<ResetPassword />} />
          <Route path={routeConfig.resetLink} element={<ResetLink />} />
          <Route path={routeConfig.forgotPassword} element={<ForgotPassword />} />
          <Route path="/product-listing" element={<ProductListingPage />} />
          <Route path={routeConfig.resetCompleted} element={<ResetCompleted />} />
        </Routes>
      </BrowserRouter>
    );
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <TokenContext.Provider value={providerValue}>
          <BrowserRouter basename="/">
            <Routes>
              {componentRoutes.map((eachRoute: IRouteComponents) => (
                <Route
                  path={eachRoute.path}
                  element={eachRoute.element}
                  key={eachRoute.path.split("/").join("-")}
                />
              ))}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </BrowserRouter>
        </TokenContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
