const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">FJ</span>
          <span className="logo-name">
            FARSHID<span>JAMAL</span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#ux">UX WORK</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a
          className="nav-button"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          RESUME
        </a>
      </div>
    </header>
  );
};

export default Navbar;