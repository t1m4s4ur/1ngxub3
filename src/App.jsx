import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "./assets/components/footer";
import Header from "./assets/components/header";

import { supabase } from './utils/supabase'

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
          // <p className="loading">
          //   <Typewriter
          //     key={pathname}
          //     options={{
          //       strings: ["..."],
          //       autoStart: true,
          //       cursor: "",
          //       cursorBlink: false,
          //       loop: true,
          //       delay: 50,
          //       pauseFor: 50,
          //       deleteSpeed: 50,
          //     }}
          //   />
          // </p>
          <div className="loading">
            <div className="loading-circle"></div>
          </div>
        )}
        <Header directory={page.directory} description={page.description} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>

      {/* <a href="">to index</a> */}

      {/* <p>create an acc to browse</p> */}

      {/* <p>sign in your acc to browse</p> */}

      {/* <p>settings and customization</p> */}

      {/* <p>list of all selected unwatched movies</p> */}

      {/* PROFILE */}
      {/* <section className="flex ver">
          <p>username: 123123</p>
          date created: 10/12/12
        </section>
        <div className="bttn-group flex hor">
          <a href="" className="bttn">
            sign out
          </a>

          <a href="" className="bttn error">
            delete
          </a>
        </div> */}

      {/* DIRECTORY CHOICE */}
      {/* <section className="flex ver"> */}
      {/* <img
            className="full"
            src="https://images.unsplash.com/photo-1793279054626-dadc776db13b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="img"
          />
          <h3>movie name (2026)</h3>
          <p>planned for 11/11/2011 @ 03:00 PM (MSK)</p>
          <a href="">check out for full page</a>
          <hr /> */}
      {/* <ul className="directory">
            <li>
              <a href="/movies">/movies</a> (all movies)
              <ul>
                <li>
                  <a href="/movies/watchlist">/watchlist</a> (unwatched movies)
                  <ul>
                    <li>
                      <a href="/movies/watchlist/suggest">/suggest</a> (a new
                      movie)
                    </li>
                    <li>
                      <a href="/movies/watchlist/vote">/vote</a> (for a movie)
                    </li>
                  </ul>
                </li>
              </ul>
              <li>
                  <a href="">/vote</a> for a movie
                </li> 
              <li>
                  <a href="">/takeseat</a> to watch
                </li> 
            </li>
          </ul>
        </section> */}
    </>
  );
}
