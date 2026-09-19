import { Link } from "react-router-dom";

const uxProjects = [
  {
  number: "01",
  type: "UX / PRODUCT DESIGN",
  title: "Deadbeat Remover",
  description:
    "A mobile experience for practicing difficult workplace conversations, receiving structured feedback, and improving through repeated attempts.",
  skills: [
    "UX Research",
    "Product Strategy",
    "Wireframing",
    "Prototyping",
  ],
  image: "/ux/career-coach/DeadbeatRemoverLogo.png",
  link: "/career-coach",
  internal: true,
},
{
  number: "02",
  type: "UX / UI DESIGN",
  title: "AppTally",
  description:
    "A mobile productivity experience that helps users understand screen-time habits, identify distractions, and turn usage data into achievable goals.",
  skills: [
    "UX Research",
    "Information Architecture",
    "Wireframing",
    "UI Design",
  ],
  image: "/ux/Apptally/AppTallyLogo.png",
  link: "/apptally",
  internal: true,
},
];

const UXProjects = () => {
  return (
    <section className="section" id="ux">
      <div className="section-heading">
        <span className="section-number">03</span>

        <div>
          <p className="eyebrow">DESIGN WORK</p>
          <h2>UX CASE STUDIES</h2>
        </div>
      </div>

      <div className="ux-projects">
        {uxProjects.map((project) => (
          <article className="ux-project" key={project.number}>
            <div className="ux-image-wrapper">
              {/*
                Career Coach cover image:
                public/ux/career-coach/cover.jpg

                Second project:
                public/ux/project-two.jpg
              */}

              <img
                className="ux-image"
                src={project.image}
                alt={`${project.title} preview`}
              />

              <span className="ux-index">{project.number}</span>
            </div>

            <div className="ux-project-content">
              <p className="project-type">{project.type}</p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              {project.internal ? (
                <Link to={project.link} className="project-link">
                  READ CASE STUDY <span>↗</span>
                </Link>
              ) : (
                <a href={project.link} className="project-link">
                  READ CASE STUDY <span>↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};


export default UXProjects;