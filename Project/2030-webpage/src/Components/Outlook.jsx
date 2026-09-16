import Navigation from './Navigation'
import Footer from './Footer'

const Outlook = () => {
  return (
    <main className="site-shell">
      <Navigation />

      <section className="page-hero outlook-hero">
        <p className="eyebrow">Page 01 / The near future</p>
        <h1>
          How IT changes
          <br />
          <em>by 2030.</em>
        </h1>
        <p className="page-intro">
          IT will probably not disappear. Instead, technology will become part of almost every industry and the jobs inside IT will change with it.
        </p>
      </section>

      <section className="detail-section">
        <div className="section-heading">
          <p className="eyebrow">The main shift</p>
          <h2>
            From building tools
            <br />
            <em>to guiding tools.</em>
          </h2>
        </div>

        <div className="detail-list">
          <article className="detail-item">
            <span>01</span>
            <div>
              <h3>AI becomes a co-worker</h3>
              <p>
                AI will help write code, test ideas, study data and answer common questions. People will still need to check the results and make responsible decisions.
              </p>
            </div>
          </article>

          <article className="detail-item">
            <span>02</span>
            <div>
              <h3>Every business becomes digital</h3>
              <p>
                Hospitals, farms, banks, factories and schools will use software. IT workers may move closer to these industries to understand their real problems.
              </p>
            </div>
          </article>

          <article className="detail-item">
            <span>03</span>
            <div>
              <h3>Trust becomes important</h3>
              <p>
                People will need to know if information is correct and if a system is safe. Privacy, cybersecurity and ethical thinking will be valuable skills.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="quote-section">
        <p>
          “The future of IT is not only about knowing technology. It is about knowing where technology should help people.”
        </p>
      </section>

      <Footer />
    </main>
  )
}

export default Outlook
