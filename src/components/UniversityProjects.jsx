const academicProjects = [
  {
    title: "Juego de Ajedrez",
    description:
      "Proyecto académico enfocado en desarrollar la lógica y estructura de un juego de ajedrez.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Análisis de ventas",
    description:
      "Proyecto académico orientado al análisis y visualización de información de ventas para identificar resultados y tendencias.",
    technologies: ["Análisis de datos", "Excel"],
  },
  {
    title: "Proyecto de analítica",
    description:
      "Trabajo académico enfocado en el análisis de datos y la obtención de información útil para apoyar la toma de decisiones.",
    technologies: ["Analítica de datos", "Visualización de datos"],
  },
];
function UniversityProjects() {
  return (
    <section id="university-projects">
      <h2>Proyectos académicos</h2>

      <p>
        Trabajos y proyectos desarrollados durante mi formación académica,
        aplicando conocimientos de desarrollo web, análisis de datos y
        resolución de problemas.
      </p>
      <div className="academic-projects-list">
        {academicProjects.map((project) => (
  <div key={project.title} className="academic-project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech) => (
  <span key={tech} className="technology">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UniversityProjects;