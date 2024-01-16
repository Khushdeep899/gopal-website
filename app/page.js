import Navbar from '../components/Navbar'
import About from "@/components/About";
import Main from "@/components/Main";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
   
        <title>Gopal Drywalls</title>


      <Navbar />
       <Main/>
        <About/>
        <Services/>

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

