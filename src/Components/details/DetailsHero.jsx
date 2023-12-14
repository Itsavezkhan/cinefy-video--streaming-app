import React from "react";
import Genre from "./Genre";
import posterimage from "../utils/Assets/no-poster.png";

const DetailsHero = ({ infodata, isLoading }) => {
  return (
    <>
      {!isLoading ? (
        <div className="flex flex-col md:flex-row px-4 py-1 items-center pt-14 w-full">
          <div className="md:w-[60rem]">
            {infodata?.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${infodata?.poster_path}`}
                className="w-full rounded-[16px]"
              />
            ) : (
              <img src={posterimage} className="rounded-lg" />
            )}
          </div>
          <div className="flex flex-col gap-5 md:ml-4 justify-center md:w-[150rem]">
            <div className="w-full justify-start">
              {infodata?.title ? (
                 <h2 className="text-slate-200 mt-4 font-medium text-2xl sm:text-4xl md:text-3xl">
                 {infodata?.title}
               </h2>
              ) : (
                <p className="text-gray-300 text-md pt-2 italic font-semibold tracking-wide ">
                  No title
                </p>
              )}
             
              <p className="text-slate-400 mt-2 font-normal text-sm sm:text-md md:text-xl italic">
                {infodata?.tagline}
              </p>

              <div className="pt-2">
                <Genre genres={infodata?.genres} />
              </div>
            </div>

            <div className="pt-3">
              <p className="text-slate-200 text-2xl font-medium md:text-3xl">
                Overview
              </p>
              {infodata?.overview ? (
                <p className="text-slate-400 font-normal pt-1 md:text-lg">
                  {infodata?.overview}
                </p>
              ) : (
                <p className="text-slate-400 text-sm md:text-lg">
                  No overview for this media
                </p>
              )}
            </div>

            <div className="flex flex-row pt-3 w-full">
              <div className="flex flex-col w-1/3 ">
                <p className="text-slate-200 text-sm text font-medium md:text-xl">
                  Status
                </p>
                <p className="text-slate-400 text-sm md:text-lg">
                  {infodata?.status}
                </p>
              </div>

              <div className="flex flex-col w-1/3">
                <p className="text-slate-200 text-sm font-medium md:text-xl">
                 Runtime
                </p>
                {infodata?.runtime ? (<p className="text-slate-400 text-sm md:text-lg">
                  {infodata?.runtime}
                </p>) : (<p className="text-slate-400 text-sm md:text-lg">No available</p>)}
                
              </div>

              <div className="flex flex-col w-1/3">
                <p className="text-slate-200 text-sm font-medium md:text-xl">
                  Release date
                </p>
                {infodata?.release_date ? (<p className="text-slate-400 text-sm md:text-lg">
                  {infodata?.release_date}
                </p>) : (<p className="text-slate-400 text-sm md:text-lg">No available</p>)}
                
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row px-4 py-1 items-center pt-14 w-full md:h-[28rem]">
          <div className="w-full md:w-[40rem] bg-gray-400 rounded-[16px] h-[25rem]"></div>
          <div className="flex flex-col mt-4 gap-5 md:ml-4 justify-center md:w-[90rem] pb-3">
            <p className="w-60 bg-gray-400 h-3"></p>
            <p className="w-60 bg-gray-400 h-3"></p>
            <p className="w-60 bg-gray-400 h-3"></p>
            <p className="w-60 bg-gray-400 h-3"></p>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsHero;
