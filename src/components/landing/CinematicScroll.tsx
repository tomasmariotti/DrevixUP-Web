import { useEffect, useRef, useState, useCallback } from "react";

/* ─── CONFIG ─── */
const TOTAL_FRAMES = 40;
const FRAME_PATH = (i: number) => `/frames/frame_${String(i).padStart(3, "0")}.jpg`;

interface Stage {
  /** Inclusive start frame */
  from: number;
  /** Inclusive end frame */
  to: number;
  /** Headline text */
  text: string;
  /** Sub-headline text */
  sub: string;
  /** CSS colour for the ambient glow */
  glow: string;
  /** Extra CSS class on the text container */
  accent: string;
}

const STAGES: Stage[] = [
  {
    from: 0,
    to: 6,
    text: "Los visitantes llegan…",
    sub: "Tu sitio web está activo. El tráfico fluye. Pero ningún sistema está observando.",
    glow: "rgba(99,102,241,0.25)",
    accent: "cinematic-accent-blue",
  },
  {
    from: 7,
    to: 13,
    text: "Pero nadie responde",
    sub: "El chat está vacío. Los formularios se ignoran. Cada segundo te cuesta un lead.",
    glow: "rgba(239,68,68,0.22)",
    accent: "cinematic-accent-red",
  },
  {
    from: 14,
    to: 20,
    text: "DrevixUp se activa",
    sub: "El motor de conversión con IA se ilumina y comienza a escanear señales de intención.",
    glow: "rgba(139,92,246,0.30)",
    accent: "cinematic-accent-purple",
  },
  {
    from: 21,
    to: 27,
    text: "La IA responde al instante",
    sub: "Conversaciones en tiempo real potenciadas por IA. Sin demora, sin oportunidad perdida.",
    glow: "rgba(59,130,246,0.30)",
    accent: "cinematic-accent-blue",
  },
  {
    from: 28,
    to: 33,
    text: "Seguimientos enviados automáticamente",
    sub: "Secuencias de email personalizadas se despliegan sin mover un dedo.",
    glow: "rgba(16,185,129,0.25)",
    accent: "cinematic-accent-green",
  },
  {
    from: 34,
    to: 39,
    text: "Conversión completada",
    sub: "Lead capturado, calificado y convertido. Tu sistema nunca duerme.",
    glow: "rgba(16,185,129,0.35)",
    accent: "cinematic-accent-green",
  },
];

/* ─── HELPERS ─── */
function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/* ─── COMPONENT ─── */
const CinematicScroll = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const [imagesReady, setImagesReady] = useState(false);

  /* Scroll-derived state */
  const currentFrameRef = useRef(0);       // smoothed float
  const targetFrameRef = useRef(0);        // raw scroll-mapped
  const rafIdRef = useRef(0);
  const [activeStage, setActiveStage] = useState(0);
  const [textProgress, setTextProgress] = useState(0);     // 0→1 within stage
  const [scrollProgress, setScrollProgress] = useState(0); // 0→1 global

  /* ─── preload all frames ─── */
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loaded++;
        loadedCountRef.current = loaded;
        if (loaded === TOTAL_FRAMES) setImagesReady(true);
      };
      img.onerror = () => {
        loaded++;
        loadedCountRef.current = loaded;
        if (loaded === TOTAL_FRAMES) setImagesReady(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  /* ─── draw a frame to canvas ─── */
  const drawFrame = useCallback(
    (frameIdx: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const img = imagesRef.current[frameIdx];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      /* size canvas to container */
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      /* contain-fit the image for mobile responsiveness */
      const cw = rect.width;
      const ch = rect.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.min(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cw - sw) / 2;
      const sy = (ch - sh) / 2;

      ctx.clearRect(0, 0, cw, ch);

      /* subtle motion blur via alpha trails */
      ctx.globalAlpha = 0.92;
      ctx.drawImage(img, sx, sy, sw, sh);
      ctx.globalAlpha = 1;

      /* vignette overlay for cinematic feel */
      const vg = ctx.createRadialGradient(cw / 2, ch / 2, cw * 0.25, cw / 2, ch / 2, cw * 0.75);
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, cw, ch);
    },
    [],
  );

  /* ─── scroll handler + animation loop ─── */
  useEffect(() => {
    if (!imagesReady) return;

    /* initial draw */
    drawFrame(0);

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const rawProgress = clamp(-rect.top / sectionHeight, 0, 1);
      targetFrameRef.current = rawProgress * (TOTAL_FRAMES - 1);
      setScrollProgress(rawProgress);
    };

    const tick = () => {
      /* smooth interpolation towards target */
      const prev = currentFrameRef.current;
      const target = targetFrameRef.current;
      const smoothed = lerp(prev, target, 0.12);
      currentFrameRef.current = smoothed;

      const frameIdx = clamp(Math.round(smoothed), 0, TOTAL_FRAMES - 1);
      drawFrame(frameIdx);

      /* determine active stage */
      let stageIdx = 0;
      for (let i = STAGES.length - 1; i >= 0; i--) {
        if (frameIdx >= STAGES[i].from) {
          stageIdx = i;
          break;
        }
      }
      setActiveStage(stageIdx);

      /* text progress within stage with easing */
      const stage = STAGES[stageIdx];
      const stageLen = stage.to - stage.from;
      const tp = stageLen > 0 ? clamp((frameIdx - stage.from) / stageLen, 0, 1) : 1;
      setTextProgress(easeOutCubic(tp));

      rafIdRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafIdRef.current);
    };
  }, [imagesReady, drawFrame]);

  /* ─── resize canvas on window change ─── */
  useEffect(() => {
    const handleResize = () => {
      const frameIdx = clamp(Math.round(currentFrameRef.current), 0, TOTAL_FRAMES - 1);
      drawFrame(frameIdx);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  const stage = STAGES[activeStage];

  return (
    <section
      ref={sectionRef}
      id="cinematic-scroll"
      className="cinematic-section"
      /* 6× viewport height to create scroll room for pinning */
      style={{ height: "600vh" }}
    >
      {/* ─── PINNED VIEWPORT ─── */}
      <div className="cinematic-pinned">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="cinematic-canvas"
        />

        {/* Ambient glow that shifts colour per stage */}
        <div
          className="cinematic-glow"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 60%, ${stage.glow}, transparent 70%)`,
          }}
        />

        {/* Loading overlay */}
        {!imagesReady && (
          <div className="cinematic-loader">
            <div className="cinematic-loader-spinner" />
            <p className="cinematic-loader-text">
              Cargando experiencia… {Math.round((loadedCountRef.current / TOTAL_FRAMES) * 100)}%
            </p>
          </div>
        )}

        {/* Text overlay */}
        {imagesReady && (
          <div className="cinematic-overlay">
            {/* Progress bar */}
            <div className="cinematic-progress-track">
              <div
                className="cinematic-progress-bar"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Stage indicators */}
            <div className="cinematic-stage-dots">
              {STAGES.map((_, i) => (
                <button
                  key={i}
                  className={`cinematic-dot ${i === activeStage ? "cinematic-dot-active" : ""} ${i < activeStage ? "cinematic-dot-past" : ""}`}
                  aria-label={`Etapa ${i + 1}`}
                />
              ))}
            </div>

            {/* Main text block */}
            <div
              className={`cinematic-text-block ${stage.accent}`}
              style={{
                opacity: clamp(textProgress * 2, 0, 1),
                transform: `translateY(${lerp(40, 0, clamp(textProgress * 2, 0, 1))}px)`,
              }}
            >
              <span className="cinematic-stage-label">
                Etapa {activeStage + 1} / {STAGES.length}
              </span>
              <h2 className="cinematic-headline">{stage.text}</h2>
              <p className="cinematic-sub">{stage.sub}</p>
            </div>

            {/* Scroll hint at the start */}
            {scrollProgress < 0.05 && (
              <div className="cinematic-scroll-hint">
                <div className="cinematic-scroll-mouse">
                  <div className="cinematic-scroll-wheel" />
                </div>
                <span>Desliza para explorar</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CinematicScroll;
