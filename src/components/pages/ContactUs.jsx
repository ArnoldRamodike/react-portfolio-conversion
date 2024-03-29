

const ContactUs = () => {
    return (
      <section className="contact section" id="contact">
      <span className="section__subtitle">get in touch</span>
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">riccoarnold23@mail.com</span>

              <a href="mailto:examplemail@correo.com" target="_blank" className="contact__button">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon "></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp & Call</h3>
              <span className="contact__card-data">0739710445</span>

              <a href="https://api.whatsapp.com/send?phone=0739710445&text=Hello, more information!" target="_blank" className="contact__button">
                Text me <i className="bx bx-right-arrow-alt contact__button-icon "></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Arnold23.fb</span>

              <a href="https://m.me/bedimcode" target="_blank" className="contact__button">
                Text me <i className="bx bx-right-arrow-alt contact__button-icon "></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your Message</h3>

          <form action="" className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">Names</label>
              <input type="text" placeholder="Insert your Name" className="contact__form-input" />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">Mail</label>
              <input type="text" placeholder="Enter your Email" className="contact__form-input" />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">Message</label>
              <textarea name="" placeholder="Write your message" id="" cols="30" rows="10" className="contact__form-input"></textarea>
            </div>

            <button className="button button--ghost">Send Message</button>
          </form>
        </div>
      </div>
    </section>
      );
    }

export default ContactUs