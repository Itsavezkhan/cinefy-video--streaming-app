import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import noposter from "../utils/Assets/no-poster.png";
import { MOVIE_PATH } from "../utils/Config";

const MovieCard = ({ movie, endpoint, mType, tyype, isLoading }) => {
  const { id, media_type } = movie;

  const navigate = useNavigate();

  const jija = false;

  return (
    <>
      <Link to={`/${media_type || mType || endpoint || tyype}/${id}`}>
        <div id={movie.id} className="w-32 md:w-40 shrink-0" key={movie.id}>
          {movie.poster_path ? (
            <img
              src={MOVIE_PATH + movie.poster_path}
              className="md:h-60 rounded-md"
            />
          ) : (
            <img src={noposter} className="rounded-lg" />
          )}

          <div className="">
            <h4 className="text-sm md:text:lg truncate   lg:font-semibold tracking-wide text-slate-400">
              {movie.original_title || movie.name}
            </h4>

            <span className="text-sm text-gray-500">
              {movie.release_date ? dayjs(movie.release_date).format("MMM D, YYYY"): 'Not available'}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
