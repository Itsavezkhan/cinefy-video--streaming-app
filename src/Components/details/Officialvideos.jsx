import React, { useState } from "react";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import VideoPopUp from "../videopopup/VideoPopUp";
import Error from "../error/Error";
import Shimmer from "../utils/Shimmer";

const Officialvideos = ({ offivideo, isLoading }) => {
  const [show, setShow] = useState(false);
  const [videoid, setVideoid] = useState(null);

  console.log(offivideo);
  return (
    <>
      <div className=" px-4 md:px-10 flex flex-col">
        <p className="text-slate-200 text-2xl font-medium mt-4 w-">
          Official Videos
        </p>
        <div className="mt-3 gap-2 overflow-y-hidden w-full flex flex-row  scrollbar-hide">
          {isLoading ? (
            <Shimmer className={"flex gap-4"} />
          ) : offivideo?.length > 0 ? (
            offivideo?.map((vid) => {
              return (
                <>
                  <div
                    className="w-52"
                    onClick={() => {
                      setShow(true), setVideoid(vid.key);
                    }}
                    key={vid.id}
                  >
                    <div className="w-32 sm:w-40 md:w-52 relative">
                      <img
                        src={`https://img.youtube.com/vi/${vid.key}/mqdefault.jpg`}
                        className="rounded-[12px] "
                      />
                      <PlayCircleFilledWhiteIcon className="text-gray-600 hover:text-red-800 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 " />
                    </div>

                    <p className="text-xs md:text-sm mt-2 flex wrap lg:font-semibold tracking-wide text-slate-400">
                      {vid?.name}
                    </p>
                  </div>
                </>
              );
            })
          ) : (
            <Error items={"official videos"} />
          )}
        </div>
        <div className={show ? "fixed left-0 top-0  w-full h-full flex justify-center z-20" : ''}>
          <VideoPopUp
            show={show}
            setShow={setShow}
            videoid={videoid}
            setVideoid={setVideoid}
          />
        </div>
      </div>
    </>
  );
};

export default Officialvideos;
