
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Arnold Ramodike</h1>

        <ul className="footer__list">
          <li className="footer__link">
            <a href="#about" className="footer__link">About me</a>
          </li>
          <li className="footer__link">
            <a href="#work" className="footer__link">Projects</a>
          </li>
          <li className="footer__link">
            <a href="#testimonial" className="footer__link">Testimonials</a>
          </li>
        </ul>

        <ul className="footer__social">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <i className="bx bxl-facebook"></i>
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
            <i className="bx bxl-twitter"></i>
          </a>
        </ul>

        <span className="footer__copy">
          riccoR. All rights reserved. ❤️
        </span>
      </div>
    </footer>
  );
}

export default Footer