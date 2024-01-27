import Navbar from '../components/Navbar'
import About from "@/components/About";
import Main from "@/components/Main";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
   
        <title>Gopal Drywalls</title>


      <Navbar />
       <Main/>
        <About/>
        <Services/>
      <Projects />
        <Contact/>
   


    </div>
  )
}





