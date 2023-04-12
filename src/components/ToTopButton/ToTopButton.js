import React, { useEffect, useState } from "react";
import "./toTopButton.css";
import { BsChevronUp } from "react-icons/bs";

const ToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  let windowHeight = window.innerHeight;

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      if (
        document.body.scrollTop > windowHeight ||
        document.documentElement.scrollTop > windowHeight
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, [windowHeight]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button onClick={handleScrollToTop} id="toTopButton" title="To Top">
          <BsChevronUp className="topButtonIcon" />
        </button>
      )}
    </>
  );
};

export default ToTopButton;
