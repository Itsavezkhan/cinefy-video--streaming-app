import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import SearchResult from "./Pages/SearchResult";
import Explore from "./Pages/Explore";
import RootElement from "./Components/rootelement/RootElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <MovieDetails />,
      },
      {
        path: "/:mType/:id",
        element: <MovieDetails />,
      },
      {
        path: "/search/:query",
        element: <SearchResult />,
      },
      {
        path: "/explore/:mType",
        element: <Explore />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
