import React from "react";
import verify3 from "../../assets/verify3.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://localhost:5000/api/user";

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  console.log(name);
  console.log(email);
  console.log(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/signup`, {
        email,
        name,
        password,
      });
      console.log(response.data);
      // console.log(localStorage.getItem("userType"));
      console.log(localStorage.getItem("token"));
      setEmail("");
      setPassword("");
      setName("");
      // alert("Successfully Logged in.");
      if (response.data) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.response);
      setEmail("");
      setPassword("");
      setName("");
      alert("Error occured while logging in");
    }
  };

  return (
    <div className="w-full h-full bg-cover bg-[#090E40] min-h-[100%] min-w-screen">
      <h1 className="text-6xl font-bold text-white px-16 pt-10">FaceTrustAI</h1>
      <br />
      <h6 className="text-xl font-semibold text-white px-16">
        SignUp with us and secure your documents by verifying
      </h6>
      <div className="px-16 py-16 bg-white mx-40 mt-6 mb-6 h-[100%] rounded-3xl flex justify-center">
        <div className="w-1/2 h-4/5 mt-10">
          <img src={verify3} className="h-full w-4/5 ml-14" alt="" />
        </div>
        <div className=" w-1/2 h-4/5">
          <div className="font-bold  ml-4 text-4xl text-center pb-6">
            SignUp
          </div>
          <div className="justify-center mt-8">
            <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4">
              Name
            </div>
            <div className="w-2/3 h-12 bg-gray-200 rounded-full ml-32 mt-4 border-4 border-[#4051A3]">
              <input
                type=" text"
                className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold"
                onChange={handleNameChange}
                value={name}
              ></input>
            </div>
          </div>
          <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4">
            Email
          </div>
          <div className="w-2/3 h-12 bg-gray-200 rounded-full ml-32 mt-4 border-4 border-[#4051A3]">
            <input
              type=" text"
              className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold"
              onChange={handleEmailChange}
              value={email}
            ></input>
          </div>
          <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4">
            Password
          </div>
          <div className="w-2/3 h-12 bg-gray-200 rounded-full ml-32 mt-4 border-4 border-[#4051A3]">
            <input
              type="password"
              className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold"
              onChange={handlePasswordChange}
              value={password}
            ></input>
          </div>
          <div className=" ml-52 mt-10 w-32 h-12 ">
            <button
              className="bg-[#4051A3] w-64 h-12 rounded-full text-lg  text-white font-extrabold"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="font-bold ml-56 mt-4 text-lg flex">
            Already a User?&nbsp;
            <a className=" text-[#4051A3] hover:text-lightgreen" href="/login">
              Login
            </a>{" "}
            &nbsp;Here
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
