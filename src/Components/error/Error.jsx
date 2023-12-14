import React from "react";
import errimage from "../error/Err-image.png";

const Error = ({ items }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center h-40 bg-white rounded-lg opacity-60">
        <div className="w-40 md:w-52">
          <img src={errimage} />
        </div>
        <h2 className="text-bold tracking-wide text-sm md:text-md italic ">
          No {items} found for this media
        </h2>
      </div>
    </>
  );
};

export default Error;
