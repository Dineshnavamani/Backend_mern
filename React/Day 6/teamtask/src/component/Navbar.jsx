const Navbar = () => {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Relay home">
        <span className="brand-mark">R</span>
        <span>relay<span className="brand-period">.</span></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#departments">Departments</a>
        <a href="#services">Services</a>
        <a href="#issues">Issues</a>
      </nav>
      <a className="header-link" href="#issues">Open issue desk <span aria-hidden="true">↗</span></a>
    </header>
  )
}

export default Navbar
