import { useEffect, useRef, useState } from "react";
import Scene from "./Scene";

const CharacterModel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { root: null, threshold: 0.1 }
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: 200 }}>
      {visible ? <Scene /> : null}
    </div>
  );
};

export default CharacterModel;
