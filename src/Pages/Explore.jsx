import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StandardFetchData } from "../Api";
import Shimmer from "../Components/utils/Shimmer";
import MovieCard from "../Components/moviecard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import { SORTING_DATA } from "../Components/utils/Config";
import { CUSTOM_STYLES } from "../Components/utils/Config";

let filters = {};

const Explore = () => {
  const [data, setData] = useState([]);
  const [sortby, setSortby] = useState();
  const [genresData, setGenresData] = useState();
  const [genre, setGenre] = useState();
  const [pagenum, setPagenum] = useState(3);
  const [isLoading, setIsLoading] = useState();
  const { mType } = useParams();

  const Onchange = (selitems, action) => {
    if (action.name === "sortby") {
      setSortby(selitems);
      if (action.action !== "clear") {
        filters.sort_by = selitems.value;
      }
    }
    if (action.name === "genres") {
      setGenre(selitems);
      if (action.action !== "clear") {
        let GenreId = selitems.map((g) => g.id);
        GenreId = JSON.stringify(GenreId).slice(1, -1);
        filters.with_genres = GenreId;
      }
      else if(action.action === 'clear'){
        filters.with_genres = ''
      }
    }
    FirstFetchData();
  };
  const FirstFetchData = () => {
    setIsLoading(true);
    StandardFetchData(`/discover/${mType}?`, filters).then((res) => {
      setData(res?.data);
      setPagenum((prev) => prev + 1);
      setIsLoading(false);
    });

    StandardFetchData(`/genre/${mType}/list?`).then((res) => {
      setGenresData(res?.data);
    });
  };

  const NextFetchDataExplore = () => {
    StandardFetchData(`/discover/${mType}?page=${pagenum}&`, filters).then(
      (res) => {
        console.log(res);
        setData({
          ...data,
          results: [...data?.results, ...res?.data?.results],
        });
        setPagenum((prev) => prev + 1);
      }
    );
  };

  const Setsortoptions = (e) => {
    setIsOption(e.target.value);
    filters.sort_by = isoption;
    console.log(isoption);
  };

  useEffect(() => {
    filters = {};
    setSortby("");
    setGenre('');
    setPagenum(1);
    FirstFetchData();
  }, [mType]);

  return (
    <>
      <div className="pt-14">
        <div className="lg:px-48 text-slate-500 text-2xl font-medium w-full flex flex-col md:flex-row justify-between pt-6 px-2">
          {mType === "tv" ? <h2>Explore TV Shows</h2> : <h2>Explore Movies</h2>}
          <div className="flex flex-col md:flex-row gap-2">
            <Select
              className="md:w-72 text-red-300 text-sm mt-2 md:mt-0 "
              classNamePrefix="bg-red-300"
              options={SORTING_DATA}
              value={sortby}
              name="sortby"
              styles={CUSTOM_STYLES}
              onChange={Onchange}
            />
            <Select
              isMulti
              name="genres"
              className="text-red-500 text-sm md:w-72"
              classNamePrefix="text-white"
              value={genre}
              getOptionLabel={(options) => options["name"]}
              getOptionValue={(options) => options["id"]}
              options={genresData?.genres}
              onChange={Onchange}
              styles={CUSTOM_STYLES}
            />
          </div>
        </div>
        {isLoading ? (
          <div>
            <Shimmer
              className={
                "flex flex-wrap gap-x-4 lg:gap-x-20 gap-y-4 lg:px-48  justify-center pt-8 w-full"
              }
            />
          </div>
        ) : (
          <InfiniteScroll
            dataLength={[data?.results?.length]}
            next={NextFetchDataExplore}
            hasMore={pagenum <= data?.total_pages}
            className="flex flex-wrap gap-x-4 lg:gap-x-20 gap-y-2 lg:px-20  justify-center pt-10 h-40 w-full"
          >
            {data?.results?.map((movie) => (
              <MovieCard movie={movie} key={movie.id} mType={mType} />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default Explore;
