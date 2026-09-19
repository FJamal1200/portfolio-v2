import projects from "../data/projects";

const GithubProjects = () => {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <span className="section-number">02</span>

        <div>
          <p className="eyebrow">CODE / EXPERIMENTS</p>
          <h2>GITHUB PROJECTS</h2>
        </div>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="code-project" key={project.number}>
            <span className="code-project-number">
              {project.number}
            </span>

            <div className="code-project-info">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-demo-link"
                >
                  LIVE DEMO ↗
                </a>
              )}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="project-arrow"
              aria-label={`Open ${project.title} on GitHub`}
            >
              ↗
            </a>
          </article>
        ))}
      </div>

      <a
        href="https://github.com/FJamal1200"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        VIEW ALL REPOSITORIES ↗
      </a>
    </section>
  );
};

export default GithubProjects;