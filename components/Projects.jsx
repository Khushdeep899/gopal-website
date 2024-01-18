'use client'

import React from 'react';
import Image from 'next/image';
import propertyImg from '../public/assets/projects/property2.jpg';
import propertyImg2 from '../public/assets/projects/arbutus1.jpg';
import propertyImg3 from '../public/assets/projects/bhinder2.png';
import propertyImg4 from '../public/assets/projects/bhinder1.png';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase'>Projects</p>
            <h2 className='py-4'> What I've Built</h2>
            <div className='grid md:gird-cols-2 gap-8'>

                    <ProjectItem title='North Praire Developements' backgroundImg={propertyImg} projectUrl='/property'  />

                    <ProjectItem title='Arbutus Properties' backgroundImg={propertyImg2} projectUrl='/property'  />

                    <ProjectItem title='Harkaran Properties' backgroundImg={propertyImg3} projectUrl='/property'  />

                    <ProjectItem title='Baldev Properties' backgroundImg={propertyImg4} projectUrl='/property'  />




                </div>

            </div>

        </div>
        
     
  )
}

export default Projects