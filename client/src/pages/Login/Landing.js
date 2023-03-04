import React from 'react'
import Navbar from '../../components/Navbar';

function Landing() {
    return (
        <div className='bg-[#E4D9FF] h-full'>
            <Navbar />
            <div className='grid grid-cols-2 gap-3 p-8'>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-6 cursor-pointer p-8">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src="https://source.unsplash.com/random" alt="Card image" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-[#4051A3] font-bold">Detect Face</div>
                            <a href="#" className="block mt-1 text-lg leading-tight text-black hover:underline">You can upload a file and we can detect the Face for you</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-6 cursor-pointer p-8">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src="https://source.unsplash.com/random" alt="Card image" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-[#4051A3] font-bold">Detect Gender</div>
                            <a href="#" className="block mt-1 text-lg leading-tight text-black hover:underline">You can upload a file and we can detect the Gender for you</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-6 cursor-pointer p-8">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src="https://source.unsplash.com/random" alt="Card image" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-[#4051A3] font-bold">Check if you still look the same</div>
                            <a href="#" className="block mt-1 text-lg leading-tight text-black hover:underline">Upload your old and new image and check if you still look the same</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-6 cursor-pointer p-8">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="https://source.unsplash.com/random" alt="Card image" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-[#4051A3] font-bold">Detect Age</div>
                        <a href="#" className="block mt-1 text-lg leading-tight text-black hover:underline">You can upload a file and we can detect the Age for you</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;