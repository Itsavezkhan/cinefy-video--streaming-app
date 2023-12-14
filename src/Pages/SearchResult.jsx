import React from "react";
import { StandardFetchData } from "../Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/moviecard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Shimmer from "../Components/utils/Shimmer";
import Select from "react-select";
import Error from "../Components/error/Error";

let filters = {};

const sortingData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

const SearchResult = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [pagenum, setPagenum] = useState(1);
  const { query } = useParams();

  const Onchange = (selitems, action) => {
    setSortby(selitems);
    if (action.action !== "clear") {
      filters.sort_by = selitems.value;
    }
    setPagenum(1);
    FirstFetchData();
  };

  const FirstFetchData = (filters) => {
    StandardFetchData(
      `/search/multi?query=${query}&page=${pagenum}&`,
      filters
    ).then((res) => {
      setData(res?.data);
      setPagenum((prev) => prev + 1);
      setLoading(false);
    });
  };
  const NextFetchData = () => {
    StandardFetchData(`/search/multi?query=${query}&page=${pagenum}&`).then(
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

  useEffect(() => {
    setLoading(true);
    setPagenum(1);
    FirstFetchData();
  }, [query]);

  return (
    <>
      <div className="pt-14">
        {data?.results.length > 0 ? (
          <>
            <div className="pt-2 text-lg font-medium flex flex-col md:px-52 text-black items-start">
              <p className="text-slate-300">{`Search ${
                data.total_results > 0 ? "results" : "result"
              } for ${query}`}</p>
            </div>
            <div>
              {loading ? (
                <Shimmer
                  className={
                    "flex flex-wrap gap-x-4 lg:gap-x-20 gap-y-2 lg:px-40 justify-center pt-10 w-full"
                  }
                />
              ) : (
                <InfiniteScroll
                  dataLength={data?.results?.length || []}
                  next={NextFetchData}
                  hasMore={pagenum <= data?.total_pages}
                  className="flex flex-wrap gap-x-4 lg:gap-x-20 gap-y-2 lg:px-20  justify-center pt-10 w-full"
                >
                  {data?.results.map((movie, index) => (
                    <MovieCard movie={movie} />
                  ))}
                </InfiniteScroll>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="h-screen flex justify-center items-center p-40">
              <Error items={"results"}  />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchResult;
