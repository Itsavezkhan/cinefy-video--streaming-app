export const MOVIE_PATH = "https://image.tmdb.org/t/p/original"

export const SORTING_DATA = [
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

  export const CUSTOM_STYLES = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "10px",
      height: '28px',
      color: state.isSelected ? "blue" : "black",
      backgroundColor: state.isSelected ? "yellow" : "gray",
      cursor: "pointer",
      background: state.isFocused
      ? 'lightblue': 'white',

    }),
    control: (provided, state) => ({
      ...provided,
      // width: "150px",
      "border-radius": "40px",
      fontSize: "10px",
      border: 0,
      "max-width": "500px",
      outline: 0,
      "min-height": "20px",
      backgroundColor: "#1F305E",
    
    }),
    singleValue: (base) => ({
      ...base,
      color: 'white',
      display: 'flex',
      width: 'fit-content',
      "align-items": 'center',
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: 'white',
      color: 'black',
      width:'50px',
      fontSize:'8px',
      "border-radius": '10px',
    }),
    multiValuelabel:(base) => ({
      ...base,
      color: 'white',
    }),
    menu:(base) => ({
      ...base,
      top: "20px",
     " margin-top": '10px',
      padding: 0,
    }),
    "input-container":(base) => ({
      ...base,
      margin: '10px',
    })
    
  };
