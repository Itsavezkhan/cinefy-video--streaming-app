import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const OfficialVideoCard = ({ video }) => {
  return (
    <>
      {/* <div className="w-32 bg-red-400">
        <img
          src={`https://img.youtube.com/vi/${vid.key}/mqdefault.jpg`}
          className="rounded-xl w-20"
        />
      </div> */}
      <div
        className="bg-red-700 w-80 flex flex-col"
      >
        <div className="relative w-32 sm:w-40 md:w-52">
          <img
            src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
            className="rounded-[12px] "
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PlayCircleIcon className="hover:text-red-500" />
          </div>
        </div>
        <p className="text-xs md:text-sm mt-2 flex wrap lg:font-semibold tracking-wide text-slate-400">
          {video?.name}
        </p>
      </div>
    </>
  );
};

export default OfficialVideoCard;
