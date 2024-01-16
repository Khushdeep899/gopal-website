// index.js


// import About from '../components/About'
// import Contact from '../components/Contact'
// import Main from '../components/Main'
// import Projects from '../components/Projects'
// import Skills from '../components/Skills'

// import Head from 'next/head'
import Main from '@/components/Main'
import Navbar from '../components/Navbar'

import styles from './page.module.css'


export default function Home() {
  return (


    <div>
      {/* <Head>
        <title>Gopal Drywalls</title>
        </Head> */}


    
      <Navbar />
     
      
      <Main />
   
      

    </div>
    
  )
}



