// index.js


// import About from '../components/About'
// import Contact from '../components/Contact'
// import Main from '../components/Main'
// import Projects from '../components/Projects'
// import Skills from '../components/Skills'

import Navbar from '../components/Navbar'

import About from "@/components/About";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div>
   
        <title>Gopal Drywalls</title>


      <Navbar />
       <Main/>
        <About/>

    </div>
  )
}



// the correct way: 
// import Head from 'next/head';
// // other imports

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Gopal Drywalls</title>
//         <meta name="description" content="We do mud tape" />
//         {/* other head elements */}
//       </Head>

//       {/* your content */}
//       <p> Test content</p>
//     </div>
//   );
// }

