import React from "react";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <footer className=" lg:bg-[url('/src/assets/images/footertopbg.jpg')] bg-[url('/src/assets/images/footertopbgm.png')] bg-no-repeat bg-center bg-cover py-[150px] text-white font-Montserrat ">
      <div className=" text-center font-semibold lg:text-[38px] text-[20px] ">
        Thanks for Checking us out
      </div>
    </footer>
  );
}

export default Footer;
