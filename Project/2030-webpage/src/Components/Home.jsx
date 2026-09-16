import Navigation from './Navigation'
import Footer from './Footer'

const Home = () => {
  return (
    <main className="site-shell">
      <Navigation />

      <section className="hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow">A practical thought experiment</p>
          <h1>
            What comes <em>after</em> IT?
          </h1>
          <p className="hero-intro">
            Technology may not disappear in 2030. It may become part of everything. The important question is what people can do with technology that technology cannot do alone.
          </p>
          <a className="text-link" href="/roadmap">
            Build your next move <span>↘</span>
          </a>
        </div>

        <div className="hero-marker">
          <span>2030</span>
          <strong>?</strong>
          <small>SCENARIO / NOT DESTINY</small>
        </div>
      </section>

      <section className="home-introduction">
        <p className="eyebrow">A guide for thinking ahead</p>
        <h2>
          The future is not
          <br />
          <em>IT or nothing.</em>
        </h2>
        <p>
          Some IT jobs may change because of automation. At the same time, new opportunities can grow in healthcare, clean energy, education and manufacturing. This website looks at both sides of that change.
        </p>
      </section>

      <section className="home-pages">
        <a className="home-page-card" href="/outlook">
          <span>01</span>
          <h3>The outlook</h3>
          <p>See how IT may change by 2030 and which skills could become valuable.</p>
          <strong>Read the outlook ↗</strong>
        </a>

        <a className="home-page-card" href="/difficulties">
          <span>02</span>
          <h3>The difficulties</h3>
          <p>Understand the problems that companies and humans may face in a fast-changing world.</p>
          <strong>Explore the challenges ↗</strong>
        </a>

        <a className="home-page-card" href="/options">
          <span>02</span>
          <h3>The options</h3>
          <p>Discover alternative industries where human skills and practical work are important.</p>
          <strong>See the options ↗</strong>
        </a>

        <a className="home-page-card roadmap-card" href="/roadmap">
          <span>03</span>
          <h3>Your roadmap</h3>
          <p>Follow four simple steps to prepare for a future with or without a traditional IT job.</p>
          <strong>Make your plan ↗</strong>
        </a>
      </section>

      <section className="home-message">
        <p className="eyebrow">The central idea</p>
        <h2>
          Stay useful.
          <br />
          <em>Stay curious.</em>
        </h2>
        <p>
          Learn technology, but also learn people, nature, communication and the real problems around you. That combination can help you adapt to many careers.
        </p>
      </section>

      <Footer />
    </main>
  )
}

export default Home
