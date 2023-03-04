import React from 'react'
import Navbar from '../../components/Navbar';
import face from '../../assets/face detect.webp'
import gender from '../../assets/gender detect.png'
import age from '../../assets/age.avif'
import old from '../../assets/how old.jpg'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className='bg-[#E4D9FF] h-full'>
            <Navbar isLoggedIn />
            <div className='grid grid-cols-2 gap-2 p-8'>
                <Link to="/face" className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-6  p-8 hover:bg-gray-100">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src={face} alt="Card image" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-lg text-[#4051A3] font-bold">Detect Face</div>
                            <p className="text-lg font-semibold">You can upload a file and we can detect the Face for you</p>
                        </div>
                    </div>
                </Link>
                <Link to="/gender" className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-6   hover:bg-gray-100 p-8">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src={gender} alt="Card image" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-lg text-[#4051A3] font-bold">Detect Gender</div>
                            <p className="text-lg font-semibold">You can detect the gender by uplaoding an image</p>
                        </div>
                    </div>
                </Link>
                <Link to="verify" className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-6  hover:bg-gray-100 p-8">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src={old} alt="Card image" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-lg text-[#4051A3] font-bold">Check if you still look the same</div>
                            <p className="text-lg font-semibold">Check if you still looka as same as you were before</p>
                        </div>
                    </div>
                </Link>
                <Link to="/age" className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-6  hover:bg-gray-100 p-8">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src={age} alt="Card image" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-lg text-[#4051A3] font-bold">Detect Age</div>
                        <p className="text-lg font-semibold">You can detect the age from the image you upload</p>
                    </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Landing;