import { useState, useEffect, lazy, Suspense } from "react";

// Dynamically load the heavy canvas part to avoid bundling three.js and physics
const TechCanvas = lazy(() => import("./TechCanvas"));

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="techstack">
      <h2> My Techstack</h2>
      <Suspense fallback={<div style={{ height: 300 }} />}>
        {/* TechCanvas contains the heavy three.js + physics code and assets */}
        <TechCanvas isActive={isActive} />
      </Suspense>
    </div>
  );
};

export default TechStack;
