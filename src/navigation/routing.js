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

function Routing() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log("🚀 ~ Routing ~ navigate:", pathname);

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const ScrollToTop = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  useEffect(() => {
    if (user?._id && pathname === "/") {
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
