"use client"

import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >=90 ){
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    },[])




    return (

        <div className={
            shadow
              ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-gray-200'
              : 'fixed w-full h-20 z-[100] bg-gray-200'
          }>
            <div className='flex justify-between items-center w-full px-2 2xl:px-16'>
                <Link href='/'>
                <Image src="/assets/logo-no-bg.png" alt="Navigation Logo" width={350} height={100} />
                </Link>
                <div>
                    <ul className='hidden md:flex '>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'> Home </li>
                        </Link>
                        <Link href="/#about">
                            <li className='ml-10 text-sm uppercase hover:border-b'> About </li>
                        </Link>
                        <Link href='/#services'>
                            <li className='ml-10 text-sm uppercase hover:border-b'> Services </li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'> Projects </li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'> Contact </li>
                        </Link>
                    </ul>

                    <div onClick={handleNav} className='md:hidden'>

                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    nav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 transition-all'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 transition-all'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src="/assets/gopal-logo.png" alt="Navigation Logo" width={80} height={50} />
                            <div onClick={handleNav} className='rounded-full shadow lg shadow-gray p-3 cursor-pointer'>
                                <AiOutlineClose  />
                            </div>
                        </div>

                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Seamless Finishes, Lasting Impressions.</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/#home'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'> Home </li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'> About </li>
                            </Link>
                            <Link href='/#services'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'> Services </li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'> Projects </li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'> Contact </li>
                            </Link>
                        </ul>

                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5'>
                                {"Let's Connect"}
                            </p>

                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaFacebook />
                                </div>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>

                            </div>


                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Navbar