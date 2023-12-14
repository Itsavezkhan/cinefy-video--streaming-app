import React from "react";
import SwitchTabs from "../switchtabs/SwitchTabs";
import { useState, useEffect } from "react";
import { StandardFetchData } from "../../Api";
import MovieCard from "../moviecard/MovieCard";
import { useParams } from "react-router-dom";
import Shimmer from "../utils/Shimmer";

const TopRated = () => {
  const { mediatype } = useParams();
  const [endpoint, setEndPoint] = useState("movie");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const onTabChange = (tab, index) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  useEffect(() => {
    setIsLoading(true);
    StandardFetchData(`/${endpoint}/top_rated?`).then((res) => {
      setData(res?.data?.results);
      setIsLoading(false);
    });
  }, [endpoint]);
  return (
    <>
      <div className="w-full px-2 md:px-10 mt-4 ">
        <div className="w-full flex justify-between px-2 mb-3">
          <p className="text-lg md:text-xl  truncate   lg:font-semibold tracking-wide text-slate-300">
            Top Rated
          </p>
          <SwitchTabs data={["Movies", "TV shows"]} onTabChange={onTabChange} />
        </div>
        {/* {isLoading ? (<div className="flex"><Shimmer className={"w-full gap-5 flex overflow-y-hidden scrollbar-hide"}/></div>) : ( <div className="w-full gap-5 flex overflow-y-hidden scrollbar-hide">
          {data?.map((movie) => (
            <MovieCard movie={movie} endpoint={endpoint}  key={movie.id} />
          ))}
        </div>)} */}
        <div className="w-full gap-5 flex overflow-y-hidden scrollbar-hide">
          {isLoading ? (
            <Shimmer className={"flex gap-4"} />
          ) : (
            data?.map((movie) => (
              <MovieCard
                movie={movie}
                endpoint={endpoint}
                isLoading={isLoading}
                key={movie.id}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default TopRated;
