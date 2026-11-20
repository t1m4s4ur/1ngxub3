import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Index from "./pages/Index";
import Movies from "./pages/Movies";
import MovieItem from "./pages/MovieItem";
import Watchlist from "./pages/Watchlist";
import Watched from "./pages/Watched";
import Suggest from "./pages/Suggest";
import Vote from "./pages/Vote";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "mvs", element: <Movies /> },
      { path: "mvs/wl", element: <Watchlist /> },
      { path: "mvs/wd", element: <Watched /> },
      { path: "mvs/wl/sgt", element: <Suggest /> },
      { path: "mvs/wl/vote", element: <Vote /> },
      { path: "mvs/:moviePath", element: <MovieItem /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "prf", element: <Profile /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
