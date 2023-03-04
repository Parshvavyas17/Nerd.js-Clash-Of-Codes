import { useState } from "react";

import React from "react";

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
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div>
        {/* <h1>Uploaded image will be displayed here</h1>
        <img src={url} /> */}
      </div>
    </div>
  );
};

export default Upload;
