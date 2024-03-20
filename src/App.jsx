import Header from './components/layout/Header';
import Home from './components/layout/Home'
import About  from './components/pages/AboutUs'
import Skills  from './components/pages/Skills'
import Work from './components/pages/Work'
import Testimonial from './components/pages/Testimonials';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/layout/Footer';

function App() {
  
  return (
    <body>
       <Header/>
       <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Testimonial/>
        <ContactUs/>
        <Footer/>
       </main>
    </body>
  )
}

export default App
