import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import { MdVerifiedUser } from "react-icons/md";
import { TbCloudUpload, TbFaceId } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";




const Upload = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const handleUpload = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "clash-of-codes");
    data.append("cloud_name", "dkjknjdfs");
    fetch("https://api.cloudinary.com/v1_1/dkjknjdfs/image/upload", {
      method: "POST",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.url);
      })
      .catch((err) => console.log(err));

  };
  return (
    <div className="bg-[#E4D9FF]">
      <Navbar />
      <div >
        <p className="text-4xl text-black font-bold text-center p-10 ">
          Let the World Recognize You
        </p>
        <div className="text-center">


          <div class="relative">
            <div class="border-4 border-dotted border-gray-800 p-10 mx-64 mt-10">
              <div class="relative">
                <input type="file" class="absolute opacity-0" onChange={(e) => setImage(e.target.files[0])} />
                <button class="px-16 py-4 text-white font-bold text-lg bg-[#4051A3] rounded-lg ">
                  Upload File
                </button>
              </div>
            </div>
              <hr className="border border-gray-500 mt-20" />

              <div className=" flex mt-10">
                <div className="w-1/4">
                  <MdVerifiedUser className="flex ml-44 cursor-pointer " size="70" />
                  <div className="text-black font-bold text-lg">
                    Secure your Documents
                  </div>
                </div>
                <div className="w-1/4">
                  <TbCloudUpload className="flex ml-44 cursor-pointer" size="70" />
                  <div className="text-black font-bold text-lg">
                    Upload Your Documents in seconds
                  </div>
                </div>
                <div className="w-1/4">
                  <TbFaceId className="flex ml-44 cursor-pointer " size="70" />
                  <div className="text-black font-bold text-lg">
                    Identify your face
                  </div>
                </div>
                <div className="w-1/4">
                  <BsDatabaseAdd className="flex ml-44 cursor-pointer " size="70" />
                  <div className="text-black font-bold text-lg">
                    Keep A record of your data
                  </div>
                </div>



              </div>
              <hr className="border border-gray-500 mt-10" />


            
            <div>

              <footer class="bg-[#090E40] py-4 mt-24">
                <div class="container mx-auto text-center text-white font-bold h-10">
                  <p>Our Website And the services we provide</p>

                </div>
              </footer>





            </div>
          </div>
        </div>


        <div>
        </div>
      </div>
    </div>  );
};

      export default Upload;
