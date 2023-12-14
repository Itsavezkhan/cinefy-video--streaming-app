import React, { useEffect, useState } from "react";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import Banner from "../Components/banner/Banner";
import Trending from "../Components/homefolder/Trending";
import { useSelector, useDispatch } from "react-redux";
import UseFetch from "../Components/usefetch/UseFetch";
import MovieCard from "../Components/moviecard/MovieCard";
import { StandardFetchData } from "../Api";
import Popular from "../Components/homefolder/Popular";
import TopRated from "../Components/homefolder/TopRated";

const Home = () => {
  const dispatch = useDispatch();
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    StandardFetchData("/movie/upcoming?").then((res) => {
      setDataa(res?.data?.results);
    });
  }, []);

  return (
    <>
      <div>
        <Banner data={dataa} />
        <Trending />
        <Popular />
        <TopRated />
        <Footer />
      </div>
    </>
  );
};

export default Home;
