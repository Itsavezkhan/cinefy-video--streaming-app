import React from "react";

const BannerCarousel = ({movie}) => {
  return (
    <>
      <div className="h-[30rem] rounded-lg">
        <div className="h-[28rem] md:h-full rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}
            `}
            className="h-[800px] bg-center bg-opacity-50 opacity-60 rounded-xl object-fit "
          />
        </div>

        <div className="absolute top-1/3 w-full h-10 md:top-1/2 px-2">
          <h2 className=" text-4xl md:text-6xl font-medium mb-3 text-slate-200">
            Welcome to{" "}
            <span className="md:text-7xl text-[#0a2351] ">Cinefy</span>
          </h2>
          <p className=" text-xl text-slate-200 font-normal md:font-medium md:text-lg tracking-wide">
            Millions of Top-rated, trending and popular movies and shows to pick
            from.{" "}
            <span className="font-bold tracking-wider text-[#0a2351] text-2xl">
              Explore Now.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default BannerCarousel;
