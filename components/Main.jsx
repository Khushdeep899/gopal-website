import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Main = () => {
    return (
        <div id='home' className='w-full pt-20 text-center flex flex-col justify-center items-center bg-gray-100'>
            <div className='max-w-[1240px] mx-auto p-4'>
                <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 mb-6'>
                    Premium Mud and Tape Services for Your Home
                </h1>
                <p className='py-4 text-lg text-gray-700 mb-4'>
                    Crafting Seamless Walls for a Perfect Finish
                </p>
                <p className='text-md text-gray-500 max-w-xl mx-auto'>
                    With over a decade of experience in drywall finishing, Gopal Drywall Ltd. offers professional mud and tape services that ensure a flawless finish for your home or commercial space. Our attention to detail and commitment to quality make us the preferred choice for builders and homeowners alike.
                </p>
                <div className='flex flex-wrap justify-center gap-6 mt-8'>
                    <Link href='/#services'>
                    <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition'>
                        Our Services
                    </button>
                    </Link>
                    <Link href='/#contact'>
                    <button className='bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition'>
                        Get a Quote
                    </button>
                    </Link>
                </div>
            
                <div className='mt-8'>
                    <p className='uppercase tracking-widest text-[#5651e5]'> 
                        Let's Connect 
                    </p>

                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaFacebook />
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>

                    </div>


                </div>

        </div>
    </div>
  );
}

export default Main;
