import Work1 from '../../assets/work1.jpg'
import Work2 from '../../assets/work2.jpg'
import Work3 from '../../assets/work3.jpg'
import Work4 from '../../assets/work4.jpg'
import Work5 from '../../assets/work5.jpg'

const Work = () => {
    return (
        <section className="work section" id="work">
          <span className="section__subtitle">My Portfolio</span>
          <h2 className="section__title">Recent Work</h2>
    
          <div className="work__filter">
            <span className="work__item active-work" data-filter="all">All</span>
            <span className="work__item" data-filter=".web">Software</span>
            <span className="work__item" data-filter=".movil">API</span>
            <span className="work__item" data-filter=".design">Frontend</span>
          </div>
    
          <div className="work__container container grid">
            <div className="work__card mix web">
              <img src={Work1} alt="" className="work__img" />
              <h3 className="work__title">Web Design</h3>
              <div className="work___more">
              <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow work__icon"></i>
              </a>
              <a href="#" className="work__button">
                Code <i className="bx bxl-github"></i>
              </a>
              </div>
             
            </div>
            <div className="work__card mix movil">
              <img src={Work2} alt="" className="work__img" />
              <h3 className="work__title">Mobile Development</h3>
              <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow work__icon"></i>
              </a>
            </div>
            <div className="work__card mix design">
            <img src={Work3} alt="" className="work__img" />
              <h3 className="work__title">Brand Design</h3>
              <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow work__icon"></i>
              </a>
            </div>
            <div className="work__card mix web">
            <img src={Work4} alt="" className="work__img" />
              <h3 className="work__title">App movil</h3>
              <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow work__icon"></i>
              </a>
            </div>
            <div className="work__card mix design">
              <img src={Work5} alt="" className="work__img" />
              <h3 className="work__title">E-commerce</h3>
              <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow work__icon"></i>
              </a>
            </div>
          </div>
        </section>
      );
    }

export default Work