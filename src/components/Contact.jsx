const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div>
          <p className="eyebrow">04 / UPLINK</p>

          <h2>
            LET'S
            <br />
            CONNECT<span>.</span>
          </h2>

          <p className="contact-copy">
            Interested in UX, software, data, and the places where those fields
            overlap.
          </p>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/farshid-jamal/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <small>PROFESSIONAL</small>
              LinkedIn
            </span>

            <strong>↗</strong>
          </a>

          <a
            href="https://github.com/FJamal1200"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <small>CODE</small>
              GitHub
            </span>

            <strong>↗</strong>
          </a>

          <a href="mailto:farshidjamal2@gmail.com">
            <span>
              <small>DIRECT</small>
              Email
            </span>

            <strong>↗</strong>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;