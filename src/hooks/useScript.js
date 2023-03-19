import React, { useEffect } from "react";

const useScript = (src, crossOrigin = "anonymous") => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
};

export default useScript;
