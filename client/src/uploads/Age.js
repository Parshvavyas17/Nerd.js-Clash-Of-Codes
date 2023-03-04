import React from 'react';
import Navbar from '../components/Navbar';
import { MdVerifiedUser } from "react-icons/md";
import { TbCloudUpload, TbFaceId } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";

function Age() {
  return (
    <div className="bg-[#E4D9FF]">
      <Navbar isLoggedIn />
      <div>
        <h1 className="text-4xl text-black font-bold text-center p-10 ">
          Let the World Recognize You
        </h1>
        <p className="text-[#4051A3] text-3xl font-bold mx-64 text-center">- Detect Age</p>
        <div className="text-center">
          <div className="relative">
            <div className="border-4 border-dotted border-gray-700 p-10 mx-64 mt-10 leading-loose mb-5">
              <div className="flex">  
                <br />
                <form>
                  {" "}
                  <input
                    type="file"
                    className="absolute"
                    // onChange={(e) => setImage(e.target.files[0])}
                    name="url"
                  />
                </form>
              </div>

              <button
                // onClick={handleUpload}
                className="px-16 py-4 text-white font-bold text-lg bg-[#4051A3] rounded-lg "
              >
                Upload Image 1
              </button>
            </div>
            <div className="h-10 "></div>
          </div>
        </div>
        {/* <button onClick={handleUpload} className="">Upload</button>
        <h1>Uploaded image will be displayed here</h1> */}
        {/* <img src={url} /> */}
      </div>

      <div className=" flex mt-10">
        <div className="w-1/4">
          <MdVerifiedUser className="flex ml-44 cursor-pointer " size="70" />
          <div className="text-black font-bold text-lg text-center">
            Secure your Documents
          </div>
        </div>
        <div className="w-1/4">
          <TbCloudUpload className="flex ml-44 cursor-pointer" size="70" />
          <div className="text-black font-bold text-lg text-center">
            Upload Your Documents in seconds
          </div>
        </div>
        <div className="w-1/4">
          <TbFaceId className="flex ml-44 cursor-pointer " size="70" />
          <div className="text-black font-bold text-lg text-center">
            Identify your face
          </div>
        </div>
        <div className="w-1/4">
          <BsDatabaseAdd className="flex ml-44 cursor-pointer " size="70" />
          <div className="text-black font-bold text-lg text-center">
            Keep A record of your data
          </div>
        </div>
      </div>
      <hr className="border border-gray-500 mt-10" />

      <div>
        <footer className="bg-[#090E40] py-4 mt-24">
          <div className="container mx-auto text-center text-white font-bold h-10">
            <p>Our Website And the services we provide</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Age;