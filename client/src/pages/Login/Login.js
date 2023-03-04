import React from "react";
import bg from "../../assets/bg.png";
import "./Login.css";
import login from "../../assets/login.jpeg"
import verify from "../../assets/verify.svg"
import google from "../../assets/google.jpg"
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const url = 'http://localhost:5000/api/user';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/login`, { email, password });
      // console.log(localStorage.getItem("userType"));
      console.log(localStorage.getItem("token"));
      setEmail("");
      setPassword("");
      // alert("Successfully Logged in.");
      if (response.data){
        navigate("/");
      }
      
    } catch(error) {
      console.log(error)
      setEmail("");
      setPassword("");
      alert('Error occured while logging in');
    }
  }


  return (
    <>
      <div className="w-full h-fit bg-cover bg-[#090E40] min-h-screen min-w-screen">
        <h1 className="text-6xl font-bold text-white px-16 pt-10">FaceTrustAI</h1>
        <br />
        <h6 className="text-xl font-semibold text-white px-16">A platform to Verify your documents and safeguard them</h6>
        <div className="px-16 py-16 bg-white mx-40 mt-6 mb-6 h-[100%] rounded-3xl flex justify-center" >
          <div className=" w-1/2 h-4/5">
            <div className="font-bold  ml-4 text-4xl text-center pb-6">Login 
            </div> 
            <div className="flex justify-center mt-8">
              <button className="flex justify-evenly items-center text-center w-2/3 h-12 ml-8 bg-gray-200 border-4 border-[#4051A3] rounded-full py-1 font-bold text-lg cursor-pointer">
                <img src={google} className="h-3/4 rounded-full" /> Log In With Your Google Account
              </button>
            </div>
            <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4" >
              Email
            </div>
            <div className="w-2/3 h-12 bg-gray-200 rounded-full ml-32 mt-4 border-4 border-[#4051A3]">
              <input type=" text" className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold" onChange={handleEmailChange}></input>
            </div>
            <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4">
              Password
            </div>
            <div className="w-2/3 h-12 bg-gray-200 rounded-full ml-32 mt-4 border-4 border-[#4051A3]">
              <input type="password" className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold" onChange={handlePasswordChange}></input>
            </div>
            <div className=" ml-52 mt-10 w-32 h-12 ">
            <button className="bg-[#4051A3] w-64 h-12 rounded-full text-lg  text-white font-extrabold" onClick={handleSubmit}>Submit</button>
          </div>
          <div className="font-bold ml-56 mt-4 text-lg flex">
                New User?<a className=" text-[#4051A3] hover:text-lightgreen" href="/signup">
                Sign Up
              </a> &nbsp;Here
          </div>
          </div>
          
          <div className="w-1/2 h-4/5">
            <img src={verify} className="h-full w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
