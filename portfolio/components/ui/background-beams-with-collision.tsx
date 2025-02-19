import { useEffect, useRef } from "react";
// ...existing code...
export default function BackgroundBeamsWithCollision({ parentRef }) {
  const canvasRef = useRef(null);
  // Remove unused variable
  // const ref = useRef(null);

  useEffect(() => {
    if (!parentRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // ...existing code...

    return () => {
      // Cleanup code
    };
  }, [parentRef]); // Add missing dependency

  return <canvas ref={canvasRef} />;
}
// ...existing code...
