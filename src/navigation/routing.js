import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import routesConfig from "./routesConfig";

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Routing() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  useEffect(() => {
    if (user?._id) {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
}

export default Routing;
