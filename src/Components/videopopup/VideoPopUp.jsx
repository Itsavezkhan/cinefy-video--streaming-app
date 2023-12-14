import React from "react";
import ReactPlayer from "react-player";

const VideoPopUp = ({ show, setShow, videoid, setVideoid }) => {
  return (
    <>
      <div
        className={
          show
            ? " w-full md:w-[600px] flex justify-center top-0 left-1/2 items-center h-full p-6"
            : "hidden"
        }
      >
        <div className=" aspect-video w-full ">
          <span
            onClick={() => {
              setShow(false), setVideoid(null);
            }}
            className="text-2xl font-medium mt-2 wrap lg:font-semibold tracking-wide text-white  mb-1 flex justify-end"
          >
            Close
          </span>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoid}`}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
};

export default VideoPopUp;
