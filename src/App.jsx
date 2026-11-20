import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCursorFollow } from "react-use-cursor-follow";

import Footer from "./assets/components/footer";
import Header from "./assets/components/header";

import { supabase } from "./utils/supabase";
import { sup } from "motion/react-client";

const pageContent = {
  "/": {
    directory: "idx",
    description: "welcome! pls choose your directory",
  },
  "/mvs": {
    directory: "mvs",
    description: "list of all movies",
  },
  "/mvs/wd": {
    directory: "mvs/wd",
    description: "list of all watched movies",
  },
  "/mvs/wl": {
    directory: "mvs/wl",
    description: "list of all unwatched movies",
  },
  "/mvs/wl/sgt": {
    directory: "mvs/wl/sgt",
    description: "suggest a new movie",
  },
  "/mvs/wl/vote": {
    directory: "mvs/wl/vote",
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
  "/prf": {
    directory: "prf",
    description: "settings and customization",
  },
  "*": {
    directory: "404",
    description: "page not found",
  },
};

export default function App() {
  useCursorFollow({
    color: "#e0dede24",
    easingFactor: "0.25",
    size: "50",
    hideCursor: false,
  });

  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  const isMoviePage = /^\/mvs\/mv\d+$/.test(pathname);
  const knownPage = pageContent[pathname];
  const page = isMoviePage
    ? {
        directory: pathname.slice(1),
        description: "movie details",
      }
    : (knownPage ?? {
        directory: "404",
        description: "page not found pls go back to idx",
      });

  useEffect(() => {
    document.title = `./${page.directory}`;
  }, [page.directory]);

  return (
    <>
      <div className="wrap flex ver">
        {pathname !== "/" && <Link to="/">back to idx</Link>}
        {loading && (
          <div className="loading">
            <div className="loading-circle"></div>
          </div>
        )}
        <Header directory={page.directory} description={page.description} />
        <main>
          <Outlet context={{ supabase }} />
          {/* <img src="https://i.pinimg.com/originals/63/17/31/63173162a98b20f741f434b2ee1b5de4.gif" alt="dino" className="gif" /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
