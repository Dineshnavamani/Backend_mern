import Navigation from './Navigation'
import Footer from './Footer'

const Difficulties = () => {
  return (
    <main className="site-shell">
      <Navigation />

      <section className="page-hero difficulties-hero">
        <p className="eyebrow">Page 02 / The difficult part</p>
        <h1>
          Progress brings
          <br />
          <em>new pressure.</em>
        </h1>
        <p className="page-intro">
          More technology can create better opportunities, but it also creates difficult questions for companies, workers and families.
        </p>
      </section>

      <section className="challenge-section">
        <div className="challenge-column">
          <h2>What IT faces</h2>

          <div className="challenge-item">
            <h3>Automation and job changes</h3>
            <p>
              AI can complete many routine tasks. IT workers must learn new tools and focus on creativity, planning and judgment.
            </p>
          </div>

          <div className="challenge-item">
            <h3>Cybersecurity threats</h3>
            <p>
              More connected systems mean more chances for hacking, data theft and damage to important services.
            </p>
          </div>

          <div className="challenge-item">
            <h3>Fast skill changes</h3>
            <p>
              Programming languages and software change quickly. Companies must give workers enough time to learn.
            </p>
          </div>
        </div>

        <div className="challenge-column human-challenges">
          <h2>What humans face</h2>

          <div className="challenge-item">
            <h3>Stress and uncertainty</h3>
            <p>
              People may worry about losing their jobs or not being able to keep up with new technology.
            </p>
          </div>

          <div className="challenge-item">
            <h3>Less human connection</h3>
            <p>
              Too much screen-based work can increase loneliness, tiredness and poor communication.
            </p>
          </div>

          <div className="challenge-item">
            <h3>Unequal opportunities</h3>
            <p>
              Not everyone has the same internet access, education or money to learn digital skills.
            </p>
          </div>
        </div>
      </section>

      <section className="answer-section">
        <p className="eyebrow">The useful response</p>
        <h2>
          Learn continuously.
          <br />
          <em>Stay human.</em>
        </h2>
        <p>
          Technology changes quickly, but qualities such as patience, teamwork, honesty and empathy remain useful in every future.
        </p>
      </section>

      <Footer />
    </main>
  )
}

export default Difficulties
