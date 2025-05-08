// components/PageLoader.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false }); // Optional

export default function PageLoader() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    // Simulate slight delay or wait for data if needed
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 300); // can tweak delay

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return null; // This component only handles loading
}
