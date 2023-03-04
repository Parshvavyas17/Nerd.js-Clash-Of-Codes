import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({isLoggedIn}) => {
  return (
    <>
      <div className="flex justify-between bg-[#090E40]">
        <div>
          <ul className="flex justify-start p-6 font-bold text-xl">
            <li className="mr-6">
              <a className="text-white text-4xl cursor-pointer" href="#">
                FaceTrustAI
              </a>
            </li>
            {/* <li className="mr-6">
              <a className="text-[#1E2749] hover:text-lightgreen" href="#">
                Hotels
              </a>
            </li>
            <li className="mr-6">
              <a className="text-[#1E2749] hover:text-lightgreen" href="#">
                Emergency Contact Details
              </a>
            </li>
            <li className="mr-6">
              <a className="text-[#1E2749] hover:text-lightgreen" href="#">
                Discussion Forum
              </a>
            </li> */}
          </ul>
        </div>
        {isLoggedIn && <div className="flex justify-end">
          <ul className="flex justify-end p-6 font-bold text-2xl space-x-10">
            <li className="mr-6">
              <Link to="/face" className="text-white hover:text-lightgreen">
                Face
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/gender" className="text-white hover:text-lightgreen">
                Gender
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/verify" className="text-white hover:text-lightgreen">
                Verify
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/age" className="text-white hover:text-lightgreen">
                Age
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/docs" className="text-white hover:text-lightgreen">
                Docs
              </Link>
            </li>
          </ul>
        </div>}
        {!isLoggedIn && <div className="flex justify-end">
          <ul className="flex justify-end p-6 font-bold text-2xl space-x-10">
            <li className="mr-6">
              <a className="text-white hover:text-lightgreen" href="/signUp">
                Sign Up
              </a>
            </li>
            <li className="mr-6">
              <a className="text-white hover:text-lightgreen" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>}
      </div>
    </>
  );
};

export default Navbar;
