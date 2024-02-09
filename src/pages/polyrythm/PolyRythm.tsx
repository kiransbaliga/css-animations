import { useEffect, useRef } from "react";
import "./polyrythm.css";
const PolyRythm = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      const parentdiv = canvasRef.current.parentElement;
      //draw an arc
      canvasRef.current.width = parentdiv?.clientWidth || 100;
      canvasRef.current.height = parentdiv?.clientHeight || 20;
      if (!ctx) return;

      ctx.strokeStyle = "white";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(600, 450, 80, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(600, 450, 120, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(600, 450, 160, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(600, 450, 200, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(600, 450, 240, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(600, 450, 280, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(600, 450, 320, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(280, 450);
      ctx.lineTo(920, 450);
      ctx.stroke();
    }
  }, []);
  return (
    <div className="Elevate glass">
      {/* canvas that fits inside the Elevate div */}
      <canvas ref={canvasRef}></canvas>
      <div className="ball a"></div>
    </div>
  );
};

export default PolyRythm;
