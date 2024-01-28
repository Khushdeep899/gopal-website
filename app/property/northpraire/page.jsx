import Navbar from '@/components/Navbar';
import Testimonial from '@/components/Testimonials';
import ImageGallery from '@/components/ImageGallery';
import Link from 'next/link';
import Image from 'next/image';



import React from 'react';

export default function northprairie() {

  const images = [
    { src: '/assets/projects/bhinder1.png', alt: 'Description of image 1' },
    { src: '/assets/projects/img2.jpg', alt: 'Description of image 1' },
    { src: '/assets/projects/img3.jpg', alt: 'Description of image 1' },
    { src: '/assets/projects/img4.jpg', alt: 'Description of image 1' }

   
  ];
  
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">North Prairie Projects</h1>
        <p className="text-lg text-center mb-8">
          An overview of our collaborative projects with North Prairie Developments, 
          showcasing our expertise in mud and taping for residential homes.
        </p>

        <ImageGallery images={images} />


   
     



        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Client Testimonials</h2>
          <Testimonial
            quote="Gopal Drywalls provided exceptional quality work for our new housing projects. Their attention to detail and efficiency is unmatched."
            author="John Doe, Project Manager at North Prairie Developments"
          />
      
        </div>

      
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
          <p>
            Detailed descriptions of specific projects with North Prairie...
          </p>
  
        </div>


        <div className="text-center my-8">
          <p className="text-xl mb-4">Interested in working with us?</p>
          <Link href='/#contact'>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Contact Us
          </button>
          </Link>

          

         
        </div>
      </div>
    </div>
  )
}
