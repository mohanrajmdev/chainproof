import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo/logo.png";
import { Link , useNavigate ,useLocation } from "react-router-dom";

const NavBarItem = ({ title, classprops }) =>{
  const navigate = useNavigate();
  const location = useLocation();
  let path = location.pathname.split("/");
  const color = path[1]===title?'text-yellow-300':'text-white';

  return (
    <Link className={`mx-4 cursor-pointer text-lg ${classprops} ${color}` } onClick={(e) => {e.preventDefault();navigate(`/${title}`);}} >{title}</Link>
  );
} 

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="md:w-[80%] w-full md:mx-[10%] flex justify-between p-4">
      <div className=" flex flex-row  items-center md:ml-4 w-full" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="w-28 h-20 cursor-pointer" /> <span className="text-white cursor-pointer text-lg">ChainProof</span>
      </div>
      <ul className=" md:flex hidden list-none flex-row justify-end items-center md:mr-6 ">
        {["Create","Upload", "View", "Verify" , "Tutorial", "Profile"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full text-lg cursor-pointer text-white hover:bg-[#2546bd]">
          Login
        </li>
      </ul>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}

        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 right-2 p-3 w-[50vw] h-fit shadow-2xl md:hidden list-none
            flex flex-col justify-center items-center text-center rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl text-center w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Create","Upload", "View ","Verify", "Tutorial", "Profile"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;