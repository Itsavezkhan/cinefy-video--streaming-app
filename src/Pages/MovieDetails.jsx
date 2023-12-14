import React from "react";
import { StandardFetchData } from "../Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsHero from "../Components/details/DetailsHero";
import Officialvideos from "../Components/details/Officialvideos";
import Similar from "../Components/details/Similar";
import Recommendations from "../Components/details/Recommendations";
import Footer from "../Components/footer/Footer";

const MovieDetails = () => {
  const { mType, id } = useParams();
  const [infodata, setInfoData] = useState();
  const [offivideo, SetOffiVideo] = useState();
  const [recdata, setRecData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    StandardFetchData(`/${mType}/${id}?`).then((res) => {
      setInfoData(res?.data);
    }),
      StandardFetchData(`/${mType}/${id}/videos?`).then((res) => {
        SetOffiVideo(res?.data?.results);
      }),
      StandardFetchData(`/${mType}/${id}/recommendations?`).then((res) => {
        setRecData(res?.data?.results);
        setIsLoading(false);
      });
    window.scrollTo({top:0, left: 0, behavior: "smooth"})
  }, [id]);

  return (
    <>
      <div className="lg:px-40">
        <DetailsHero infodata={infodata} isLoading={isLoading}/>
        <Officialvideos offivideo={offivideo} isLoading={isLoading} />
        <Similar mType={mType} id={id} isLoading={isLoading}/>
        <Recommendations
          isLoading={isLoading}
          recdata={recdata}
          mType={mType}
        />
        <Footer />
      </div>
    </>
  );
};
export default MovieDetails;
