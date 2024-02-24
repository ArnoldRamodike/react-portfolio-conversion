import Header from './components/header/Header';
import Home from './components/home/Home'
import About  from './components/about/AboutUs'
import Skills  from './components/skills/Skills'
import Service from './components/service/Services'
import Work from './components/work/Work'
import Testimonial from './components/testimonial/Testimonials';
import ContactUs from './components/contact/ContactUs';
import Footer from './components/footer/Footer';




function App() {


  return (
    <body>
       <Header/>
       <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Service/>
        <Work/>
        <Testimonial/>
        <ContactUs/>
        <Footer/>
       </main>
    </body>
  )
}

export default App
