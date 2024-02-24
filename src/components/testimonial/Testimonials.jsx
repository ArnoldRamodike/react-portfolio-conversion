import Testimonial1 from '../../assets/testimonial1.png';
import Testimonial2 from '../../assets/testimonial2.png';
import Testimonial3 from '../../assets/testimonial3.png';

const Testimonials = () => {
    return (
        <section className="testimonial section" id="testimonial">
          <span className="section__subtitle">My client say</span>
          <h2 className="section__title">Testimonial</h2>
    
          <div className="testimonial__container container swiper">
            <div className="swiper-wrapper">
              <div className="testimonial__card swiper-slide">
                <img src={Testimonial1} alt="testimonial" className="testimonial__img" />
    
                <h3 className="testimonial__name">John Doe</h3>
                <p className="testimonial__description">
                  A really good job, all aspects of the project were
                  followed step by step and with good results.
                </p>
              </div>
    
              <div className="testimonial__card swiper-slide">
                <img src={Testimonial2} alt="testimonial" className="testimonial__img" />
    
                <h3 className="testimonial__name">Max Lewis</h3>
                <p className="testimonial__description">
                  A really good job, all aspects of the project were
                  followed step by step and with good results.
                </p>
              </div>
    
              <div className="testimonial__card swiper-slide">
                <img src={Testimonial3} alt="testimonial" className="testimonial__img" />
    
                <h3 className="testimonial__name">Paula Valey</h3>
                <p className="testimonial__description">
                  A really good job, all aspects of the project were
                  followed step by step and with good results.
                </p>
              </div>
            </div>
    
            <div className="swiper-pagination"></div>
          </div>
        </section>
      );
    }

export default Testimonials