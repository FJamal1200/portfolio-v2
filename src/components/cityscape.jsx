const buildings = [
  { width: 88, height: 250, windows: 9, tone: "dark", sign: "pink" },
  { width: 76, height: 320, windows: 11, tone: "deep", sign: "none" },
  { width: 96, height: 290, windows: 10, tone: "mid", sign: "cyan" },
  { width: 82, height: 360, windows: 14, tone: "dark", sign: "none" },
  { width: 108, height: 430, windows: 16, tone: "mid", sign: "pink" },
  { width: 78, height: 285, windows: 10, tone: "dark", sign: "orange" },
  { width: 92, height: 520, windows: 20, tone: "deep", sign: "none" },
  { width: 72, height: 310, windows: 11, tone: "dark", sign: "cyan" },
  { width: 116, height: 400, windows: 17, tone: "mid", sign: "none" },
  { width: 84, height: 570, windows: 22, tone: "deep", sign: "pink" },
  { width: 130, height: 345, windows: 15, tone: "dark", sign: "orange" },
  { width: 76, height: 455, windows: 17, tone: "mid", sign: "none" },
  { width: 118, height: 390, windows: 15, tone: "dark", sign: "cyan" },
  { width: 90, height: 500, windows: 20, tone: "deep", sign: "pink" },
  { width: 108, height: 330, windows: 13, tone: "mid", sign: "none" },
  { width: 82, height: 420, windows: 16, tone: "dark", sign: "orange" },
  { width: 98, height: 275, windows: 10, tone: "mid", sign: "none" },
  { width: 74, height: 340, windows: 12, tone: "deep", sign: "cyan" },
  { width: 112, height: 460, windows: 18, tone: "dark", sign: "pink" },
  { width: 86, height: 295, windows: 10, tone: "mid", sign: "none" },
];

const Cityscape = () => {
  return (
    <div className="cityscape" aria-hidden="true">
      <div className="city-glow city-glow-left" />
      <div className="city-glow city-glow-center" />
      <div className="city-glow city-glow-right" />

      <div className="city-moon">
        <span className="moon-line" />
        <span className="moon-line" />
        <span className="moon-line" />
        <span className="moon-line" />
        <span className="moon-line" />
        <span className="moon-line" />
      </div>

      <div className="city-grid">
        {buildings.map((building, index) => (
          <div
            className={`building tone-${building.tone}`}
            key={index}
            style={{
              width: `${building.width}px`,
              height: `${building.height}px`,
            }}
          >
            <div className="building-roof" />

            {building.sign !== "none" && (
              <div className={`neon-sign sign-${building.sign}`}>
                <span />
                <span />
                <span />
              </div>
            )}

            <div className="building-windows">
              {Array.from({ length: building.windows }).map((_, windowIndex) => (
                <span key={windowIndex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cityscape;