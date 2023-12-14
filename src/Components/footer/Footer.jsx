import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 px-2 md:px-10 py-5 flex flex-col justify-center items-center mt-5">
      <h2 className="font-medium  text-lg text-slate-200 tracking-wide">
        Made by Avez 💟
      </h2>
      <div>
        <Link to="https://www.linkedin.com/in/avez-khan-code/" target="_blank">
          <span className="text-white">
            <LinkedInIcon />
          </span>
        </Link>
        <Link to="https://twitter.com/Aveziscoding" target="_blank">
          <span className="text-white ml-1">
            <TwitterIcon />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
