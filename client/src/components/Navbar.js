import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-[#E4D9FF]">
        <div>
          <ul className="flex justify-start p-6 font-bold text-xl">
            <li className="mr-6">
              <a className="text-[#1E2749] hover:text-lightgreen" href="#">
                Upload Image
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
        <div className="flex justify-end">
          <ul className="flex justify-end p-6 font-bold text-xl">
            <li className="mr-6">
              <a className="text-[#1E2749] hover:text-lightgreen" href="/SignUp">
                Sign Up
              </a>
            </li>
            <li className="mr-6">
              <a className="text-[#1E2749] hover:text-lightgreen" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
