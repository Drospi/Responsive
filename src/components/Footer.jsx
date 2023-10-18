export const Footer = () => {
  return (
    <section className="footer">
      <div className="footer2">
        <div className="nav3">
          <a href="">Home </a>
          <a href="">Services</a>
          <a href="">Our Works</a>
          <a href="">Clients</a>
          <a href="">Contact</a>
        </div>
        <div className="redes">
          <h2>Diego</h2>
          <div>
            <span className="material-symbols-outlined">public</span>
            <span className="material-symbols-outlined">rocket_launch</span>
            <span className="material-symbols-outlined">diversity_3</span>
          </div>
        </div>
        <div className="input">
          <p className="email">want us to contact you?</p>
          <input type="email" name="email" placeholder="Email" id="email" />
          <button>Join</button>
        </div>
      </div>
      <p>created by Drospi - devChallenges.io</p>
    </section>
  );
};
