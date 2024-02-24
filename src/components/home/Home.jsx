import Arnold from '../../assets/arnold1.jpg'
import CV from '../../assets/Arnold.pdf'

const Home = () => {
    return (
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <span className="home__greeting">Hello I am</span>
              <h1 className="home_name">Arnold Ramodike</h1>
              <h3 className="home__education">Frontend Developer</h3>
    
              <div className="home_buttons">
                <a href={CV} download className="button button--ghost">Download cv</a>
                <a href="#about" className="button">About me</a>
              </div>
            </div>
    
            <div className="home__handle">
              <img src={Arnold} alt="home" className="home__img" />
            </div>
            
            <div className="home__social">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="home__social-link"><i className="bx bxl-linkedin-square"></i></a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="home__social-link"><i className="bx bxl-github"></i></a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="home__social-link"><i className="bx bxl-dribbble"></i></a>
            </div>
    
            <a href="#about" className="home__scroll">
              <i className="bx bx-mouse home__scroll-icon"></i>
              <span className="home__scroll-name">scroll Down</span>
            </a>
          </div>
        </section>
      );
    }

export default Home