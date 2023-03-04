import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";

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
            <input type="file" class="absolute opacity-0 " onChange={(e) => setImage(e.target.files[0])} />
            <div class="border-4 border-dotted border-gray-700 p-10 mx-64 mt-10">
              <button class="px-16 py-4 text-white font-bold text-lg bg-[#4051A3] rounded-lg ">
                Upload Image
              </button>
            </div>
            <div className="h-10 ">

            </div>


          </div>

        </div>
        {/* <button onClick={handleUpload} className="">Upload</button>
        <h1>Uploaded image will be displayed here</h1> */}
        {/* <img src={url} /> */}
      </div>


      <div>
      </div>
    </div>
  );
};

export default Upload;
