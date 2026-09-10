const skillCategories = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Vite"],
  },
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "APIs REST"],
  },
  {
    category: "Bases de datos",
    skills: ["MySQL", "SQL", "Modelado relacional"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "GitHub", "Docker", "Docker Compose"],
  },
];
const learningSkills = [
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "Testing",
  "GitHub Actions",
  "CI/CD",
  "Linux",
  "AWS",
  "Redis",
  "Clean Code",
];

function Skills() {
  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <p>
        Tecnologías y herramientas que utilizo y conocimientos que estoy
        desarrollando.
      </p>
      <div className="skills-list">
        {skillCategories.map((category) => (
          <div key={category.category} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills">
              {category.skills.map((skill) => (
                <span key={skill} className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h2>Actualmente aprendiendo</h2>

<div className="learning-skills">
  {learningSkills.map((skill) => (
    <span key={skill} className="learning-skill">
      {skill}
    </span>
  ))}
</div>
    </section>
  );
}

export default Skills;
 