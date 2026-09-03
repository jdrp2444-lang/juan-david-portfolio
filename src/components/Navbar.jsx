function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-logo">
        Juan David
      </a>

      <div className="navbar-links">
  <a href="#about">Sobre mí</a>
  <a href="#skills">Habilidades</a>
  <a href="#projects">Proyectos</a>
  <a href="#university-projects">Académicos</a>
  <a href="#contact">Contacto</a>
</div>
    </nav>
  );
}

export default Navbar;