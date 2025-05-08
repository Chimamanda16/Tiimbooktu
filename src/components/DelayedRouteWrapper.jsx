import { useState, useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function DelayedRouteWrapper({ children }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
      setShowContent(true);
    }, 500); // Adjust delay here

    return () => clearTimeout(timer);
  }, []);

  return showContent ? children : null;
}
