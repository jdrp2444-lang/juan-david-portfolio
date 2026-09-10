const projects = [
  {
    title: "BetGamex",
    description:
      "Plataforma web de esports y entretenimiento enfocada en gestionar competencias y apuestas virtuales.",
    technologies: ["React", "FastAPI", "MySQL", "Docker"],
    status: "En desarrollo",
    type: "Proyecto personal",
    github: null,
  },
  {
    title: "Juan David Portfolio",
    description:
      "Portafolio personal desarrollado para presentar mi perfil, conocimientos, proyectos y proceso de aprendizaje como desarrollador de software.",
    technologies: ["React", "Vite", "JavaScript", "CSS", "Git", "GitHub"],
    status: "En desarrollo",
    type: "Proyecto personal",
     github: "https://github.com/jdrp2444-lang/juan-david-portfolio",
  },
];
function Projects() {
  return (
    <section id="projects">
      <h2>Mis proyectos</h2>
      <p>Aquí puedes ver mis avances en proyectos personales y universitarios.</p>
       <div className="projects-list">
        {projects.map((project) => (
  <article key={project.title}>
  <h3>{project.title}</h3>

<span className="project-type">
  {project.type}
</span>

    <span className="project-status">
    {project.status}
  </span>

    <p>{project.description}</p>

    <div className="project-technologies">
    {project.technologies.map((tech) => (
      <span key={tech}>{tech}</span>
    ))}
  </div>


 {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
  >
    Ver código
  </a>
)}

  </article>
))}
</div>
    </section>
  );
}

export default Projects;