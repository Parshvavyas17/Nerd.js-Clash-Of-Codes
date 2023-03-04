import React from "react";
import bg from "../../assets/bg.png";
import "./Login.css";
import login from "../../assets/login.jpeg"
import google from "../../assets/google.jpg"

const Login = () => {
  return (
    <>
      <div className="w-full h-fit bg-cover bg-[#090E40] min-h-screen min-w-screen">
        <h1 className="text-6xl font-bold text-white px-16 pt-10">Name</h1>
        <br />
        <h6 className="text-xl font-semibold text-white px-16">A platform for collaboration and progress</h6>
        <div className="px-16 py-16 bg-white mx-40 mt-6 mb-6 h-[100%] rounded-3xl flex justify-center" >
          <div className="w-1/2 h-4/5">
            <div className="font-bold text-4xl text-center pb-6">Login <br/>
            </div>
            <div className="flex justify-center align-middle">
              <button className="flex justify-evenly items-center mr-6 text-center w-96 bg-[#D9D9D9] border-2 border-[#090E40] rounded-full py-1 font-semibold text-lg cursor-pointer">
                <img src={google} className="h-3/4 rounded-full" />Login with Google
              </button>
            </div>
            <div className="justify font-semibold text-[#090E40] text-xl px-16 pt-2">
              Email
            </div>
          </div>
          <div className="w-1/2 h-4/5">
            <img src={login} className="h-6/7 w-4/5"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
