function Hero({ name, role, description }) {
  return (
    <section id="hero" className="hero">
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{description}</p>
      <div className="hero-links">
  <a
    href="https://github.com/jdrp2444-lang"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a
    href="#contact"
    className="hero-contact-link"
  >
    Contactarme
  </a>
</div>
    </section>
  );
}

export default Hero;