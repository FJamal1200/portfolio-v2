import Cityscape from "./cityscape";

const Hero = () => {
  return (
    <section className="hero" id="top">
      <Cityscape />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="status-dot" />
            PORTFOLIO / 2026
          </div>

          <p className="hero-kicker">UX DESIGN + SOFTWARE DEVELOPMENT</p>

          <h1>
            I DESIGN
            <br />
            DIGITAL <span>EXPERIENCES.</span>
          </h1>

          <p className="hero-description">
            I design clear interfaces and build practical software that
            respects the user's time and attention.
          </p>

          <div className="hero-actions">
            <a href="#ux" className="button button-primary">
              VIEW MY WORK
            </a>

            <a
              href="https://github.com/FJamal1200"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              GITHUB ↗
            </a>
          </div>
        </div>

        <aside className="hero-terminal">
          <div className="terminal-header">
            <div className="terminal-lights">
              <span />
              <span />
              <span />
            </div>

            <span>PROFILE.INFO</span>
          </div>

          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-label">NAME</span>
              <span>Farshid Jamal</span>
            </div>

            <div className="terminal-line">
              <span className="terminal-label">FOCUS</span>
              <span>UX / SOFTWARE / DATA</span>
            </div>

            <div className="terminal-line">
              <span className="terminal-label">TOOLS</span>
              <span>FIGMA / REACT / PYTHON</span>
            </div>

            <div className="terminal-line">
              <span className="terminal-label">STATUS</span>
              <span className="active-text">BUILDING THINGS</span>
            </div>

            <div className="terminal-rule" />

            <p className="terminal-note">
              Interested in useful products, thoughtful interfaces, and
              technical systems that solve actual problems.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;