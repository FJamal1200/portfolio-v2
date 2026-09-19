const CrtShowcase = () => {
  return (
    <section className="section crt-section" id="archive">
      <div className="section-heading">
        <span className="section-number">04</span>

        <div>
          <p className="eyebrow">ARCHIVE / LEGACY SITE</p>
          <h2>OLD PORTFOLIO IN A CRT</h2>
        </div>
      </div>

      <div className="crt-layout">
        <div className="crt-copy">
          <p className="project-type">
            WINDOWS 98 INSPIRED PORTFOLIO
          </p>

          <h3>Still part of the story.</h3>

          <p>
            Before this portfolio, I built an earlier site with a retro
            Windows-inspired aesthetic. I kept it here as an interactive archive
            to show how my visual approach evolved over time.
          </p>

          <p>
            It also reflects my interest in interfaces that feel intentional,
            distinctive, and memorable.
          </p>

          <div className="crt-actions">
            <a
              href="https://fjamal1200.github.io/PortfolioSite/"
              className="button button-primary"
              target="_blank"
              rel="noreferrer"
            >
              OPEN FULL SITE
            </a>

            <a
              href="#ux"
              className="button button-secondary"
            >
              BACK TO CASE STUDIES
            </a>
          </div>
        </div>

        <div
          className="crt-wrapper"
          aria-label="CRT display showing legacy portfolio"
        >
          <div>
            <div className="crt-frame">
              <div className="crt-screen-shell">
                <div className="crt-screen">
                  <iframe
                    src="https://fjamal1200.github.io/PortfolioSite/"
                    title="Farshid Jamal legacy Windows 98 portfolio"
                    className="crt-iframe"
                  />

                  <div className="crt-scanlines" />
                  <div className="crt-glow" />
                  <div className="crt-noise" />
                  <div className="crt-reflection" />
                </div>
              </div>

              <div className="crt-bottom-bar">
                <span className="crt-brand">
                  FJ ARCHIVE DISPLAY
                </span>

                <div className="crt-bottom-controls">
                  <span />
                  <span />
                  <span />

                  <div className="crt-led" />
                </div>
              </div>
            </div>

            <div className="crt-stand-neck" />
            <div className="crt-stand-base" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrtShowcase;