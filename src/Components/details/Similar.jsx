import React, { useEffect } from "react";
import MovieCard from "../moviecard/MovieCard";
import { StandardFetchData } from "../../Api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import Error from "../error/Error";

const Similar = ({ mType, id, isLoading }) => {
  const [simdata, setSimData] = useState();

  const title = mType === "movie" ? "Similar Movies" : "Similar TV Shows";

  useEffect(() => {
    StandardFetchData(`/${mType}/${id}/similar?`).then((res) => {
      setSimData(res?.data?.results);
    });
  }, [id]);

  return (
    <>
      <div className="w-full px-4 md:px-10 mt-4">
        <div className="w-full flex justify-between">
          <p className=" text-2xl font-medium truncate pb-3  lg:font-semibold tracking-wide text-slate-300">
            {title}
          </p>
        </div>

        <div className="w-full gap-5 flex overflow-y-hidden scrollbar-hide">
          {isLoading ? (
            <Shimmer
            className={"flex gap-4"} 
            />
          ) : simdata?.length > 0 ? (
            simdata?.map((movie) => (
              <MovieCard
                movie={movie}
                mType={mType}
                id={id}
                key={id}
                isLoading={isLoading}
              />
            ))
          ) : (
            <Error items={"popular items"} />
          )}
        </div>
      </div>
    </>
  );
};

export default Similar;
