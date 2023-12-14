import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="bg-gray-800 px-2 md:px-10 py-5 flex flex-col justify-center items-center mt-5">
      <h2 className="font-medium  text-lg text-slate-200 tracking-wide">
        Made by Avez 💟
      </h2>
      <div>
        <span className="text-white">
          <LinkedInIcon />
        </span>
        <span className="text-white ml-1">
          <TwitterIcon />
        </span>
      </div>
    </div>
  );
};

export default Footer;
