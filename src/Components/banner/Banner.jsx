import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector, useDispatch } from "react-redux";
import { StandardFetchData } from "../../Api";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import BannerCarousel from "./BannerCarousel";

const Banner = ({ data }) => {
  const [upcomurl, setUpcomurl] = useState();
  const [isLoading, setIsLoading] = useState();

  const FetchMediaDataUp = async (url) => {
    setIsLoading(true);
    const res = await axios
      .get(
        `https://api.themoviedb.org/3${url}?api_key=58b420b7b13b4268225a95935c83f8da`
      )
      .then((res) => {
        setUpcomurl(res.data.results);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    FetchMediaDataUp("/movie/popular");
  }, []);

  return !isLoading ? (
    <>
      <div className="h-[30rem] px-2 md:px-8">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={1}
          infiniteLoop={true}
          showStatus={false}
        >
          {upcomurl?.map((movie) => (
            <BannerCarousel movie={movie} key={movie.id} />
          ))}
        </Carousel>
      </div>
    </>
  ) : (
    <div className="h-[30rem]  md:h-screen bg-gray-300 w-full flex justify-center items-center">
      <CircularProgress className="w-30" />
    </div>
  );
};

export default Banner;

{
  /* <div className="h-[30rem] rounded-lg">
<div className="h-[28rem] md:h-full rounded-lg">
  <img
    // src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}
    // `}

    src={`https://image.tmdb.org/t/p/original/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg
  `}
    className="h-[800px] bg-center bg-opacity-50 opacity-60 rounded-xl object-fit "
  />
</div>

<div className="absolute top-1/3 w-full h-10 md:top-1/2 px-2">
  <h2 className=" text-4xl md:text-6xl font-medium mb-3 text-slate-200">
    Welcome to <span className="md:text-7xl text-[#0a2351] ">Cinefy</span>
  </h2>
  <p className=" text-xl text-slate-200 font-normal md:font-medium md:text-lg tracking-wide">
    Millions of Top-rated, trending and popular movies and sows
    to pick from.{" "}
    <span className="font-bold tracking-wider text-[#0a2351] text-2xl">
      Explore Now.
    </span>
  </p>
</div>
</div> */
}
