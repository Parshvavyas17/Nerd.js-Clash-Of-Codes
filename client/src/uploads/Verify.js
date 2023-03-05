import React from "react";
import Navbar from "../components/Navbar";
import { MdVerifiedUser } from "react-icons/md";
import { TbCloudUpload, TbFaceId } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";
import { useState } from "react";

function Verify() {
  const [image1, setImage1] = useState("");
  const [url1, setUrl1] = useState("");
  const [image2, setImage2] = useState("");
  const [url2, setUrl2] = useState("");

  const handleUrlUpload = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/img/verify", {
      method: "POST",
      // mode: "no-cors",
      // cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        // 'Accept': 'application/json'
      },
      body: JSON.stringify({ url1, url2 }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setImage1("");
        setUrl1("");
        setUrl2("")
        alert(res.isSame);
      })
      .catch((error) => console.log(error));
  };

  // const handleUpload = (e) => {
  //   e.preventDefault();
  //   const Data = new FormData();
  //   Data.append("file", image);
  //   Data.append("upload_preset", "clash-of-codes");
  //   Data.append("cloud_name", "dkjknjdfs");
  //   fetch("https://api.cloudinary.com/v1_1/dkjknjdfs/image/upload", {
  //     method: "POST",
  //     body: Data,
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data.url);
  //       const Data2 = new FormData();
  //       Data2.append("url", data.url);
  //       console.log("Data2: ", Data2);
  //       fetch("http://127.0.0.1:8000/api/img/verify", {
  //         method: "POST",
  //         // mode: "no-cors",
  //         // cache: "no-cache",
  //         headers: {
  //           "Content-Type": "application/json",
  //           // 'Accept': 'application/json'
  //         },
  //         body: JSON.stringify({ url1: temp1, url2: temp2 }),
  //       })
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((res) => {
  //           console.log(res);
  //           alert(res.isSame ? "SAME": "DIFFERENT");
  //           // if (res.url === "No Face Detected :(") alert("No face detected");
  //           // else window.location.href = res.url;
  //         })
  //         .catch((error) => console.log(error));
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const handleUrl1 = (e) => {
  //   setUrl(e.target.value);
  // };
  return (
    <div className="bg-[#E4D9FF]">
      <Navbar isLoggedIn />
      <div>
        <h1 className="text-4xl text-black font-bold text-center p-10 ">
          Let the World Recognize You
        </h1>
        <p className="text-[#4051A3] text-3xl font-bold mx-64 text-center">
          - Verify Yourself
        </p>
        <div className="text-center">
          <div className="relative">
            <div className="border-4 border-dotted border-gray-700 p-10 mx-64 mt-10 leading-loose mb-5">
              <div className="flex">
                <div className="w-1/2">
                  <form>
                    {" "}
                    <input
                      type="text"
                      onChange={(e)=>setUrl1(e.target.value)}
                      name="url1"
                      placeholder="Enter the URL of the first image to be processed"
                    />
                    {/* <input
                      type="file"
                      onChange={(e) => setImage1(e.target.files[0])}
                      name="url"
                    /> */}
                  </form>
                  <br />
                  <br />{" "}
                  
                </div>
                <div className="w-1/2">
                  <form>
                    <input
                      type="text"
                      onChange={(e) => setUrl2(e.target.value)}
                      name="url2"
                      placeholder="Enter the URL of the second image to be processed"
                    />{" "}
                    {/* <input
                      type="file"
                      // onChange={(e) => setImage1(e.target.files[0])}
                      name="url"
                    /> */}
                  </form>
                  <br />
                  <br />
                  <button
                    // onClick={handleUpload}
                    className="px-16 py-4 text-white font-bold text-lg bg-[#4051A3] rounded-lg "
                    onClick={handleUrlUpload}
                  >
                    Upload Image
                  </button>
                </div>

                {/* 
                            <div className="flex">
                                <br />
                                <form>
                                    {" "}
                                    <input
                                        type="file"
                                        className="absolute"
                                        // onChange={(e) => setImage1(e.target.files[0])}
                                        name="url"
                                    />
                                </form>
                            </div>

                            <button
                                // onClick={handleUpload}
                                className="px-16 py-4 text-white font-bold text-lg bg-[#4051A3] rounded-lg "
                            >
                                Upload Image
                            </button> */}
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
    </div>
  );
}

export default Verify;
