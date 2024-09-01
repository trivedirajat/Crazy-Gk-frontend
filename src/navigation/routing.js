import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
