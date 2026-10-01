const Banner = () => {
  return (
    <section className="issue-banner" aria-label="Issue management overview">
      <div className="banner-copy">
        <p className="banner-kicker"><span className="pulse-dot" /> TEAM OPERATIONS / ISSUE DESK</p>
        <h2>Small issues.<br /><em>Clear ownership.</em></h2>
        <p>Bring every request into view, route it to the right team, and keep the next step obvious.</p>
        <a href="#issues" className="banner-link">View issue log <span aria-hidden="true">↓</span></a>
      </div>
      <div className="banner-side">
        <p className="banner-side-label">COMMON REQUESTS</p>
        <div className="banner-topic"><span>01</span><strong>Account access</strong><b>↗</b></div>
        <div className="banner-topic"><span>02</span><strong>Equipment & devices</strong><b>↗</b></div>
        <div className="banner-topic"><span>03</span><strong>Workplace support</strong><b>↗</b></div>
        <div className="banner-note">One shared place to report, assign, and resolve.</div>
      </div>
    </section>
  )
}

export default Banner
