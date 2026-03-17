import { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const isLight = () => document.documentElement.classList.contains("light") ||
      (!document.documentElement.classList.contains("dark") &&
        window.matchMedia("(prefers-color-scheme: light)").matches);

    const getColors = () => isLight()
      ? { head: "30,30,60", tail: "60,60,120" }
      : { head: "255,255,255", tail: "200,220,255" };

    const createStar = () => {
      const speed = Math.random() * 3 + 2;
      return {
        x: Math.random() * canvas.width,
        y: -20,
        len: Math.random() * 60 + 40,
        speedX: speed * 0.6,
        speedY: speed,
        opacity: 0,
        targetOpacity: Math.random() * 0.6 + 0.2,
        width: Math.random() * 1 + 0.3,
        fadeIn: true,
      };
    };

    const stars: ReturnType<typeof createStar>[] = [];

    for (let i = 0; i < 6; i++) {
      const s = createStar();
      s.y = Math.random() * canvas.height;
      s.opacity = s.targetOpacity;
      s.fadeIn = false;
      stars.push(s);
    }

    let lastSpawn = 0;
    let animId: number;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { head, tail } = getColors();

      if (time - lastSpawn > 1500) {
        stars.push(createStar());
        lastSpawn = time;
      }

      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];

        if (s.fadeIn) {
          s.opacity = Math.min(s.opacity + 0.02, s.targetOpacity);
          if (s.opacity >= s.targetOpacity) s.fadeIn = false;
        }

        const progress = s.y / canvas.height;
        if (progress > 0.75) {
          s.opacity = s.targetOpacity * (1 - (progress - 0.75) / 0.25);
        }

        s.x += s.speedX;
        s.y += s.speedY;

        const tailX = s.x - s.speedX * (s.len / s.speedY);
        const tailY = s.y - s.len;

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(${head},${s.opacity})`);
        grad.addColorStop(0.4, `rgba(${tail},${s.opacity * 0.4})`);
        grad.addColorStop(1, `rgba(${tail},0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.lineCap = "round";
        ctx.stroke();

        if (s.y > canvas.height + s.len || s.x > canvas.width + s.len) {
          stars.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default StarField;