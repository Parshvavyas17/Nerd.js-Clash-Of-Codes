import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import { MdVerifiedUser } from "react-icons/md";
import { TbCloudUpload, TbFaceId } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";

const Upload = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const uploadImage = () => {};

  const handleUpload = () => {
    const Data = new FormData();
    Data.append("file", image);
    Data.append("upload_preset", "clash-of-codes");
    Data.append("cloud_name", "dkjknjdfs");
    // console.log(Data.file);
    fetch("https://api.cloudinary.com/v1_1/dkjknjdfs/image/upload", {
      method: "POST",
      body: Data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.url);
        const Data2 = new FormData();
        Data2.append("url", data.url);
        console.log("Data2: ", Data2);
        fetch("http://127.0.0.1:8000/api/img/detect" ,{
          method: "POST",
          // mode: "no-cors",
          cache: "no-cache",
          
          body: {url: data.url},
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-[#E4D9FF]">
      <Navbar />
      <div>
        <p className="text-4xl text-black font-bold text-center p-10 ">
          Let the World Recognize You
        </p>
        <div className="text-center">
          <div class="relative">
            <div class="border-4 border-dotted border-gray-700 p-10 mx-64 mt-10 leading-loose mb-5">
              <div className="flex">
                <br />
                <form>
                  {" "}
                  <input
                    type="file"
                    class="absolute"
                    onChange={(e) => setImage(e.target.files[0])}
                    name="url"
                  />
                </form>
              </div>

              <button
                onClick={handleUpload}
                class="px-16 py-4 text-white font-bold text-lg bg-[#4051A3] rounded-lg "
              >
                Upload Image
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
        <footer class="bg-[#090E40] py-4 mt-24">
          <div class="container mx-auto text-center text-white font-bold h-10">
            <p>Our Website And the services we provide</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Upload;
