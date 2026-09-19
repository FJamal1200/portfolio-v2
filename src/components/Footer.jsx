const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} FARSHID JAMAL</p>

      <p>
        DESIGNED + BUILT WITH <span>REACT</span>
      </p>

      <a href="#top">BACK TO TOP ↑</a>
    </footer>
  );
};

export default Footer;