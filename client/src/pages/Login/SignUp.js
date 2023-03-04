import React from 'react'
import verify3 from "../../assets/verify3.svg"

const SignUp = () => {
    return (

        <div className="w-full h-full bg-cover bg-[#090E40] min-h-[100%] min-w-screen">
            <h1 className="text-6xl font-bold text-white px-16 pt-10">FaceTrustAI</h1>
            <br />
            <h6 className="text-xl font-semibold text-white px-16">SignUp with us and secure your documents by verifying</h6>
            <div className="px-16 py-16 bg-white mx-40 mt-6 mb-6 h-[100%] rounded-3xl flex justify-center" >
            <div className="w-1/2 h-4/5 mt-10">
                    <img src={verify3} className="h-full w-4/5 ml-14" />
                </div>
                <div className=" w-1/2 h-4/5">
                    <div className="font-bold  ml-4 text-4xl text-center pb-6">SignUp
                    </div>
                    <div className="justify-center mt-8">
                        <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4">
                            Name
                        </div>
                        <div className="w-2/3 h-12 bg-gray-200 rounded-full ml-32 mt-4 border-4 border-[#4051A3]">
                            <input type=" text" className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold"></input>
                        </div>
                    </div>
                    <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4">
                        Email
                    </div>
                    <div className="w-2/3 h-12 bg-gray-200 rounded-full ml-32 mt-4 border-4 border-[#4051A3]">
                        <input type=" text" className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold"></input>
                    </div>
                    <div className="font-bold text-[#090E40] text-2xl ml-32 mt-4">
                        Password
                    </div>
                    <div className="w-2/3 h-12 bg-gray-200 rounded-full ml-32 mt-4 border-4 border-[#4051A3]">
                        <input type=" text" className="flex-grow w-3/4 outline-none ml-2 mt-1  bg-transparent h-8 text-lg font-semibold"></input>
                    </div>
                    <div className=" ml-52 mt-10 w-32 h-12 ">
                        <button className="bg-[#4051A3] w-64 h-12 rounded-full text-lg  text-white font-extrabold">Submit</button>
                    </div>
                    <div className="font-bold ml-56 mt-4 text-lg flex">
                        Already a User?&nbsp;<a className=" text-[#4051A3] hover:text-lightgreen" href="/login">
                            Login
                        </a> &nbsp;Here
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp