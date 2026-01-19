import "./hero.css";

export default function Hero({ onGetStarted }) {
  return (
    <section className="hero">

      <nav className="navbar">
        <div className="logo">WONDER<span>PLACES</span></div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>

      <div className="hero-content">
        <h1>Explore The World</h1>
        <button className="hero-btn" onClick={onGetStarted}>GET STARTED</button>
      </div>
    </section>
  );
}
