import { useEffect, useRef, useState } from "react";
import ExploreGrid from "./components/ExploreGrid";

const SHADOW_HEIGHT = 340;
const MAX_SHADOW = 0.6;
const SHADOW_STEP = 0.08;
const IDLE_DELAY = 500;

export default function ExplorePage() {
  const [topShadow, setTopShadow] = useState(0);
  const [bottomShadow, setBottomShadow] = useState(0);

  const lastY = useRef(0);
  const idleTimer = useRef<number | null>(null);

  useEffect(() => {
    const clearIdleTimer = () => {
      if (idleTimer.current) {
        window.clearTimeout(idleTimer.current);
        idleTimer.current = null;
      }
    };

    const startIdleTimer = () => {
      clearIdleTimer();
      idleTimer.current = window.setTimeout(() => {
        setTopShadow(0);
        setBottomShadow(0);
      }, IDLE_DELAY);
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY.current;

      if (delta > 0) {
        setTopShadow((prev) => Math.min(prev + SHADOW_STEP, MAX_SHADOW));
        setBottomShadow((prev) => Math.max(prev - SHADOW_STEP, 0));
      } else if (delta < 0) {
        setBottomShadow((prev) => Math.min(prev + SHADOW_STEP, MAX_SHADOW));
        setTopShadow((prev) => Math.max(prev - SHADOW_STEP, 0));
      }

      lastY.current = currentY;
      startIdleTimer();
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearIdleTimer();
    };
  }, []);

  return (
    <div className="min-h-screen pt-39.25 pb-10 px-32.75 relative">
      {/* 🔹 상단 그림자 */}
      <div
        className="pointer-events-none fixed top-0 left-0 right-0 z-10 transition-opacity duration-300"
        style={{
          height: `${SHADOW_HEIGHT}px`,
          opacity: topShadow,
          background: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />

      {/* 🔹 하단 그림자 */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-10 transition-opacity duration-300"
        style={{
          height: `${SHADOW_HEIGHT}px`,
          opacity: bottomShadow,
          background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />

      <ExploreGrid />

      {/* 스크롤 여유 */}
      <div className="h-[120vh]" />
    </div>
  );
}
