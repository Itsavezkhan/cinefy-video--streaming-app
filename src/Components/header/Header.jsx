import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../header/Omega.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  const [showmenu, SetShowMenu] = useState();

  const searchQueryFunc = (event) => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
    setQuery("");
  };
  const ToggleMenu = () => {
    SetShowMenu(!showmenu);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between mx-auto my-0 w-full px-2 md:px-10 fixed z-10 h-12 bg-zinc-900 opacity-70 ">
        <Link to="/">
          <div className="w-10 flex text-slate-200 items-center font-regular tracking-wider uppercase hover:text-gray-400 cursor-pointer">
            <img src={Img} />
            <p className=" hidden sm:block">Cinefy</p>
          </div>
        </Link>

        <div className="flex gap-x-4 md:flex-row items-center justify-center">
          <div className="flex gap-3 ">
            <input
              type="text"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
              placeholder="Search for fav media..."
              className="px-5 w-24 hover:sm:w-60 hover:w-40 duration-300 outline-none md:py-1 rounded-md placeholder-gray-600 placeholder:text-sm"
            />
            <button
              className="text-slate-200 bg-gradient-to-r bg-blue-700 px-2 rounded-md hover:bg-blue-400"
              onClick={() => searchQueryFunc()}
            >
              <SearchIcon />
            </button>
          </div>

          <div className="hidden md:block">
            <Link to="/explore/movie">
              <span className="text-slate-200 tracking-wide font-semibold hover:text-zinc-400 cursor-pointer">
                Movies
              </span>
            </Link>

            <Link to="/explore/tv ">
              <span className="text-slate-200 tracking-wide font-semibold hover:text-zinc-400 cursor-pointer ml-4">
                TV Shows
              </span>
            </Link>
          </div>
        </div>

        <div className="md:hidden" onClick={ToggleMenu}>
          <MenuIcon className="text-slate-200" />
        </div>
        {showmenu && (
          <div className="bg-slate-300 px-4 md:px-3 py-3 md:py-2 flex flex-col absolute right-1 top-14 rounded-lg gap-2">
            <Link to="/explore/movie ">
              <span className="text-black tracking-wide font-semibold hover:text-zinc-400 cursor-pointer">
                Movies
              </span>
            </Link>
            <Link to="/explore/tv ">
              <span className="text-black tracking-wide font-semibold hover:text-zinc-400 cursor-pointer">
                Tv shows
              </span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
