const skills = [
  {
    category: "DESIGN",
    items: ["Figma", "UX Research", "Wireframing", "Prototyping", "Information Architecture"],
  },
  {
    category: "FRONTEND",
    items: ["React", "JavaScript", "HTML", "CSS", "TypeScript"],
  },
  {
    category: "DATA + SOFTWARE",
    items: ["Python", "Pandas", "PyTorch", "SQL", "Streamlit"],
  },
  {
    category: "TOOLS",
    items: ["Git", "GitHub", "Linux", "VS Code", "Jupyter"],
  },
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <span className="section-number">01</span>

        <div>
          <p className="eyebrow">PROFILE</p>
          <h2>ABOUT ME</h2>
        </div>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <p className="large-copy">
            I work between design and development: understanding how people use
            systems, shaping the interface around those needs, and building
            enough of the technical side to make ideas real.
          </p>

          <p>
            My work includes UX design, front-end development, data projects,
            automation, and machine learning experiments. I like projects where
            technical decisions and user experience have to work together
            instead of being treated as separate problems.
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.category}>
              <p className="skill-category">{group.category}</p>

              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;