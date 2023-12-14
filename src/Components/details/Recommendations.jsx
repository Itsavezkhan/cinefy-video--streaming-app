import React from "react";
import MovieCard from "../moviecard/MovieCard";
import Shimmer from "../utils/Shimmer";
import Error from "../error/Error";

const Recommendations = ({ recdata, mType, isLoading }) => {
  const title =
    mType === "movie" ? "Recommended Movies" : "Recommended TV Shows";

  return (
    <>
      <div className="w-full px-4 md:px-10 mt-4 ">
        <div className="w-full flex justify-between ">
          <p className=" text-2xl font-medium truncate pb-3  lg:font-semibold tracking-wide text-slate-300">
            {title}
          </p>
        </div>

        <div className="w-full gap-5 flex overflow-y-hidden scrollbar-hide">
          {isLoading ? (
            <Shimmer className={"flex gap-4"}/>
          ) : recdata?.length > 0 ? (
            recdata?.map((movie) => <MovieCard movie={movie} mType={mType} key={movie.div}/>)
          ): (<Error items={'recommended items'}/> )}
        </div>
      </div>
    </>
  );
};

export default Recommendations;
