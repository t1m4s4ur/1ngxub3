import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "./assets/components/footer";
import Header from "./assets/components/header";

import { supabase } from "./utils/supabase";

import "./App.css";

const pageContent = {
  "/": {
    directory: "index",
    description: "welcome! pls choose your directory",
  },
  "/movies": {
    directory: "movies",
    description: "list of all movies",
  },
  "/movies/watched": {
    directory: "movies/watched",
    description: "list of all watched movies",
  },
  "/movies/watchlist": {
    directory: "movies/watchlist",
    description: "list of all unwatched movies",
  },
  "/movies/watchlist/suggest": {
    directory: "movies/watchlist/suggest",
    description: "suggest a new movie",
  },
  "/movies/watchlist/vote": {
    directory: "movies/watchlist/vote",
    description: "vote for a movie",
  },
  "/signup": {
    directory: "signup",
    description: "create a new acc to browse",
  },
  "/signin": {
    directory: "signin",
    description: "sign in to your acc to browse",
  },
  "/profile": {
    directory: "profile",
    description: "settings and customization",
  },
  "*": {
    directory: "404",
    description: "page not found",
  },
};

export default function App() {
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  const isMoviePage = /^\/movies\/mv\d+$/.test(pathname);
  const knownPage = pageContent[pathname];

  const page = isMoviePage
    ? {
        directory: pathname.slice(1),
        description: "movie details",
      }
    : (knownPage ?? {
        directory: "404",
        description: "page not found pls go back to index",
      });

  return (
    <>
      <div className="wrap flex ver">
        {pathname !== "/" && <Link to="/">back to index</Link>}
        {loading && (
          <div className="loading">
            <div className="loading-circle"></div>
          </div>
        )}
        <Header directory={page.directory} description={page.description} />
        <main>
          <Outlet />
          {/* <img src="https://i.pinimg.com/originals/63/17/31/63173162a98b20f741f434b2ee1b5de4.gif" alt="dino" className="gif" /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
