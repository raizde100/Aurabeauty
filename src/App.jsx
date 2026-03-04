import "./styles.css";

const impactItems = [
  {
    title: "Experiencia de marca",
    text: "Mensaje más consistente y mejor percepción de expertise.",
  },
  {
    title: "Experiencia de cliente",
    text: "Asesoría más clara y recomendaciones más relevantes.",
  },
  {
    title: "Equipo y performance",
    text: "Mayor conversión, ticket promedio y venta cruzada.",
  },
];

const services = [
  {
    name: "Retail Performance Diagnosis",
    bullets: ["Diagnóstico comercial", "Diagnóstico de equipo", "Diagnóstico de experiencia"],
    detail: "Lectura real del punto de venta.",
  },
  {
    name: "Advisor Mastery Program",
    bullets: ["Dominio de producto y piel", "Demostración efectiva", "Conversación beauty"],
    detail: "De vendedoras a consultoras de belleza.",
  },
  {
    name: "Sales & Retail Performance",
    bullets: ["Abordaje en tienda", "Técnicas de venta beauty", "Mentalidad comercial"],
    detail: "Entrenamiento enfocado en resultados.",
  },
  {
    name: "Brand & Retail Strategy",
    bullets: ["Arquitectura en tienda", "Activaciones estratégicas", "Inteligencia de punto de venta"],
    detail: "Alineación entre marca y ejecución.",
  },
];

const methodSteps = [
  { title: "Diagnóstico", detail: "1 a 4 semanas" },
  { title: "Oportunidades", detail: "Semana 4 a 5" },
  { title: "Capacitación", detail: "Semana 6 y 7" },
  { title: "Ejecución", detail: "Según cada caso" },
  { title: "Seguimiento", detail: "3 meses" },
];

function App() {
  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <div className="logo">AURA</div>
          <nav>
            <a href="#servicios">Servicios</a>
            <a href="#metodologia">Metodología</a>
          </nav>
          <a
            className="btn btn-main"
            href="https://learn.aurabeauty.pe"
            target="_blank"
            rel="noreferrer"
          >
            Iniciar sesión
          </a>
        </div>
      </header>

      <main>
        <section className="wrap hero hero-grid">
          <div>
            <p className="eyebrow">BEAUTY RETAIL CONSULTING</p>
            <h1>Transformamos vendedoras en consultoras de belleza</h1>
            <p className="lead">
              Consultoría comercial para mejorar conversión, ticket promedio y
              experiencia en tienda.
            </p>
            <div className="actions">
              <a className="btn btn-main" href="#servicios">
                Ver servicios
              </a>
              <a className="btn btn-ghost" href="#contacto">
                Contactar
              </a>
            </div>
          </div>

          <figure className="hero-image">
            <img src="/hero-aura-client.png" alt="Consultora de belleza atendiendo a una clienta en tienda retail" />
          </figure>
        </section>

        <section id="impacto" className="wrap section">
          <div className="section-head">
            <h2>Impacto</h2>
          </div>
          <div className="grid three">
            {impactItems.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="servicios" className="wrap section">
          <div className="section-head">
            <h2>Servicios</h2>
          </div>
          <div className="grid two">
            {services.map((service) => (
              <article className="card service" key={service.name}>
                <h3>{service.name}</h3>
                <ul className="clean-list">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="metodologia" className="wrap section">
          <div className="section-head">
            <h2>Metodología</h2>
          </div>

          <ol className="method-list">
            {methodSteps.map((step, idx) => (
              <li className="method-item" key={step.title}>
                <span>{String(idx + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contacto" className="wrap cta">
          <div className="cta-card">
            <h2>AURA · MIRANDA BEAUTY GROUP S.A.C</h2>
            <p>Una vendedora capacitada es el mejor embajador de marca.</p>
            <a className="btn btn-main" href="mailto:Miranda@aurabeauty.pe">
              Miranda@aurabeauty.pe
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>Consultoría comercial para beauty retail.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
