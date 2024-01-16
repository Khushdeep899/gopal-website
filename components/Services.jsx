import React from 'react';

const Services = () => {
    return (
        <div className={'w-full lg:h-screen bg-gray-100'}>
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">


            <p className={'text-xl tracking-widest uppercase text-amber-600'}>Services</p>
            <h2 className={'py-4'}>What We Can Do</h2>
            <div className="grid md:grid-cols-2 lg: grid-cols-4 gap-8 text-gray-600">
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <h3>Residential and Commercial</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <h3>Drywall Installation</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <h3>Popcorn Ceiling Removal</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <h3>Insulation</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <h3>Water Damage Repairs</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <h3>Renovations</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <h3>Garages</h3>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Services;
