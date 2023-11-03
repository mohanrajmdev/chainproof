import React from 'react'
import logo from '../assets/logo/logo.png';
import {  useNavigate  } from "react-router-dom";

 
const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer pt-5">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center flex-col items-center" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="w-32" /> <div className='text-2xl sm:text-3xl text-white text-gradient py-4 cursor-pointer'>ChainProof</div>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
      <p className="text-white text-base text-center mx-2 cursor-pointer" onClick={() => navigate("/Create")} >Create</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer" onClick={() => navigate("/Upload")} >Upload</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer" onClick={() => navigate("/View")}>View</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer" onClick={() => navigate("/Verify")}>Verify</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer" onClick={() => navigate("/Tutorial")}>Tutorial</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">contactus@chainproof.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-base">@ChainProof 2023</p>
        <p className="text-white text-right text-base">All rights reserved</p>
      </div>
  </div>

  )
}

export default Footer