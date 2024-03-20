import Arnold from '../../assets/Arnold.jpg'

const AboutUs = () => {
  return (
    <section className="about section" id="about">
      <span className="section__subtitle">My Intro</span>
      <h2 className="section__title">About Me</h2>

      <div className="about__container container grid">
        <img src={Arnold} alt="about" className="about__img" />

        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className="bx bx-award"></i>
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">Over 4 years working</span>
            </div>

            <div className="about__box">
              <i className="bx bx-briefcase-alt"></i>
              <h3 className="about__title">Completed</h3>
              <span className="about__subtitle">48 + Projects</span>
            </div>

            <div className="about__box">
              <i className="bx bx-support"></i>
              <h3 className="about__title">Support</h3>
              <span className="about__subtitle">Online 24/7</span>
            </div>
          </div>

          <p className="about__description">
            Software Engineer with over four years of experience in full-stack development. 
            Proven track record of delivering high-quality software solutions for web and mobile applications. 
            Skilled in multiple programming languages and frameworks, with a strong emphasis on problem-solving and collaboration.
          </p>

          <a href="#contact" className="button">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs