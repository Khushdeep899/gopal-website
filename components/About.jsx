import React from 'react';
import Image from "next/image";

const About = () => {
    return (
        <div id='about' className={"w-full md:h-screen p-2 flex items-center py-16"}>
            <div className="mx-5 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
                <div className="col-span-2">
                    <p className={'uppercase text-xl tracking-widest text-yellow-700'}>About</p>
                    <h2 className={'py-4'}>Who We Are</h2>
                    <p className={'py-2 text-xl text-gray-600'}>Seamless Walls, Seamless Service</p>
                    <p className={'py-2 text-gray-600'}>Gopal Drywall Ltd. embodies the spirit of skilled workmanship in
                        Saskatoon&apos;s construction and renovation landscape. Our team, rich with seasoned
                        professionals, is adept at handling a variety of projects, with a particular flair for both
                        commercial and residential spaces. We take pride in our ability to deliver exceptional quality,
                        from intricate mudding to precision taping, ensuring that every wall is a testament to our
                        meticulous attention to detail. At Gopal Drywall Ltd., we don&apos;t just build walls—we craft
                        spaces that inspire, with a promise of enduring quality and a seamless customer experience that
                        stands as solid as our drywall work.</p>

                </div>
            </div>

            <div
                className="hidden lg:flex w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 mx-3 hover:scale-105 ease-in duration-300 flex-col">
                <Image src="/assets/bhinder-img.jpg" alt="logo" className={'rounded-xl shadow-xl'} width={380}
                       height={250}/>
                <p className="pt-4">Hardharminder Singh, Director</p>
            </div>


        </div>
    );
}

export default About;