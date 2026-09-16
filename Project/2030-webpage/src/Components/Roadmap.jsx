import Navigation from './Navigation'
import Footer from './Footer'

const Roadmap = () => {
  return (
    <main className="site-shell">
      <Navigation />

      <section className="page-hero roadmap-hero">
        <p className="eyebrow">Page 03 / Your move</p>
        <h1>
          Do not choose
          <br />
          <em>IT or nothing.</em>
        </h1>
        <p className="page-intro">
          Prepare for 2030 by combining one digital skill with one useful human or practical field.
        </p>
      </section>

      <section className="roadmap-page-section">
        <div className="roadmap-step">
          <span>01</span>
          <div>
            <h2>Keep one digital skill</h2>
            <p>
              Learn a skill such as basic programming, data analysis, digital design, cybersecurity or using AI tools. You do not need to know everything.
            </p>
          </div>
        </div>

        <div className="roadmap-step">
          <span>02</span>
          <div>
            <h2>Choose one human domain</h2>
            <p>
              Connect your digital skill to healthcare, energy, education, farming, design, business or another area that helps people.
            </p>
          </div>
        </div>

        <div className="roadmap-step">
          <span>03</span>
          <div>
            <h2>Practice in the real world</h2>
            <p>
              Build a small project, volunteer, speak with a worker or try an apprenticeship. Experience will teach you what books cannot.
            </p>
          </div>
        </div>

        <div className="roadmap-step">
          <span>04</span>
          <div>
            <h2>Keep learning and caring</h2>
            <p>
              Update your knowledge, protect your health and keep your relationships strong. A good career should support your life, not replace it.
            </p>
          </div>
        </div>
      </section>

      <section className="roadmap-final">
        <p>Your advantage is the intersection:</p>
        <h2>
          Technology literacy
          <br />
          <em>+ human usefulness.</em>
        </h2>
      </section>

      <Footer />
    </main>
  )
}

export default Roadmap
