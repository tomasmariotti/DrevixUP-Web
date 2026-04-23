import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="theme-toggle-btn"
    >
      {/* Celestial body container */}
      <div className="theme-toggle-track">
        <div className={`theme-toggle-thumb ${isDark ? "is-dark" : "is-light"}`}>
          {/* Sun rays (visible in light mode) */}
          <div className="theme-toggle-rays">
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="theme-toggle-ray"
                style={{ transform: `rotate(${i * 45}deg)` }}
              />
            ))}
          </div>

          {/* Moon crater (visible in dark mode) */}
          <div className="theme-toggle-crater theme-toggle-crater-1" />
          <div className="theme-toggle-crater theme-toggle-crater-2" />
          <div className="theme-toggle-crater theme-toggle-crater-3" />
        </div>

        {/* Stars (visible in dark mode) */}
        <div className={`theme-toggle-stars ${isDark ? "visible" : ""}`}>
          <span className="theme-toggle-star" style={{ top: "20%", left: "15%" }} />
          <span className="theme-toggle-star" style={{ top: "55%", left: "75%" }} />
          <span className="theme-toggle-star theme-toggle-star-sm" style={{ top: "35%", left: "60%" }} />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
