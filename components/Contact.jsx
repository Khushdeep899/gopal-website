import React from 'react';
import Image from "next/image";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
    return (
        <div className={'w-full lg:h-screen pt-5'}>
            <div className="max-w-[1240px] m-auto px-2 py16 w-full">
                <p className="text-xl tracking-widest uppercase text-amber-600">
                    Contact
                </p>
                <h2 className={'py-4'}>Get in Touch</h2>
                <div className={'grid lg:grid-cols-5 gap-8'}>
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div className="">
                                <Image className={'rounded-xl hover:scale-105 ease-in duration-300'} src={'/assets/bhinder-img.jpg'} height={270} width={350} alt={'contact'}></Image>
                            </div>
                            <div className="">
                                <h2 className={'py-2'}>Hardharminder Singh</h2>
                                <p>Director, Gopal Drywall Ltd.</p>
                                <p className="py-4">Available for any jobs and quotes.</p>
                            </div>
                        </div>
                    </div>

                    {/*Right Side*/}
                    <div className="col-span-3 w-full h-auto shadow-gray-400 rounded-xl shadow-xl lg:p-4">
                        <div className="p-4">
                            <form action="">
                                <div className={'grid md:grid-cols-2 gap-4 w-full py-2'}>
                                    <div className={'flex flex-col'}>
                                        <label className={'uppercase text-sm py-2'} htmlFor="">
                                            Name
                                        </label>
                                        <input type="text" name="" id=""
                                               className={'border-2 rounded-lg p-3 flex border-gray-300'}/>
                                    </div>

                                    <div className={'flex flex-col'}>
                                        <label className={'uppercase text-sm py-2'} htmlFor="">
                                            Phone Number
                                        </label>
                                        <input type="number" name="" id=""
                                               className={'border-2 rounded-lg p-3 flex border-gray-300'}/>
                                    </div>

                                    <div className={'flex flex-col py-2 col-span-2'}>
                                        <label className={'uppercase text-sm py-2'} htmlFor="">
                                            Email
                                        </label>
                                        <input type="email" name="" id=""
                                               className={'border-2 rounded-lg p-3 flex border-gray-300'}/>
                                    </div>

                                    <div className={'flex flex-col col-span-2'}>
                                        <label className={'uppercase text-sm py-2'} htmlFor="">
                                            Message
                                        </label>
                                        <textarea className={'border-2 rounded-lg border-gray-300 p-3 '} rows={15}></textarea>
                                    </div>

                                    <button className={'w-full text-gray-100 mt-4 p-2 col-span-2'}>Send Message</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href={'/'}>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp size={30} className={'m-auto text-amber-600 '}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
