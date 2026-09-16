import Navigation from './Navigation'
import Footer from './Footer'

const Options = () => {
  return (
    <main className="site-shell">
      <Navigation />

      <section className="page-hero options-hero">
        <p className="eyebrow">Page 02 / Beyond the screen</p>
        <h1>
          If IT shrinks,
          <br />
          <em>where does energy move?</em>
        </h1>
        <p className="page-intro">
          The best alternatives are industries with real-world needs, human trust and work that is difficult to automate completely.
        </p>
      </section>

      <section className="industry-section">
        <article className="industry-card">
          <span>01</span>
          <h2>Healthcare</h2>
          <p>
            Care work, medical technology, mental health and support for older people will continue to need trained humans.
          </p>
          <strong>Useful strength: empathy + science</strong>
        </article>

        <article className="industry-card">
          <span>02</span>
          <h2>Clean energy</h2>
          <p>
            Solar power, wind power, batteries and climate projects will need people who can solve practical problems.
          </p>
          <strong>Useful strength: practical thinking</strong>
        </article>

        <article className="industry-card">
          <span>03</span>
          <h2>Manufacturing</h2>
          <p>
            Factories will need people who understand materials, machines, quality and the safe use of robotics.
          </p>
          <strong>Useful strength: hands-on precision</strong>
        </article>

        <article className="industry-card">
          <span>04</span>
          <h2>Education</h2>
          <p>
            Teachers, mentors and trainers will help people learn new skills throughout their working lives.
          </p>
          <strong>Useful strength: communication + patience</strong>
        </article>
      </section>

      <section className="options-bottom">
        <h2>
          Choose a real problem,
          <br />
          <em>then learn how to help.</em>
        </h2>
        <a className="text-link" href="/roadmap">
          See your roadmap <span>↘</span>
        </a>
      </section>

      <Footer />
    </main>
  )
}

export default Options
