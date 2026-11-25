import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const TMDB_IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE;

export default function Suggest() {
  const { supabase } = useOutletContext();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const term = query.trim();

    if (term.length < 2) {
      setMovies([]);
      setError("");
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const timeoutId = setTimeout(async () => {
      setError("");

      try {
        const params = new URLSearchParams({ query: term });

        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?${params}`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_TOKEN}`,
              accept: "application/json",
            },
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("seach could not be complete");
        }

        const data = await response.json();
        setMovies(data.results ?? []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "an error occured during search");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [query]);

  return (
    <>
      {/* <nav className="flex ver">
        <ul className="directory flex ver">
          <li>/hp</li>
          <li>
            <Link to="/prf">/prf</Link>
          </li>
          <li>
            <Link to="/mvs">/mvs</Link>
            <ul>
              <li>
                <Link to="/mvs/wd">/wd</Link>
              </li>
              <li>
                <Link to="/mvs/wl">/wl</Link>
                <ul>
                  <li>/sgt</li>
                  <li>
                    <Link to="/mvs/wl/vote">/vote</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>/res</li>
        </ul>
      </nav> */}

      <section className="suggest flex ver">
        <form role="search" onSubmit={(event) => event.preventDefault()}>
          {/* <div className="input-wrap flex hor">
          <input type="text" placeholder="type a movie name" />
          <button type="submit">search</button>
        </div> */}
          <input
            type="search"
            placeholder="type to search"
            value={query}
            onChange={(event) => {
              const value = event.target.value;
              setQuery(value);
              setLoading(value.trim().length >= 3);
              setError("");
            }}
          />
        </form>

        {loading && (
          <div className="loading">
            <div className="loading-circle"></div>
          </div>
        )}
        {error && <p>{error}</p>}

        {!loading &&
          query.trim().length >= 3 &&
          movies.length === 0 &&
          !error && <p className="error">no movies found by that name</p>}

        <div className="suggest-result flex ver">
          {movies.map((movie) => {
            const imagePath = movie.poster_path;
            const year = movie.release_date?.slice(0, 4);

            return (
              <div
                className="suggest-result__item search flex hor"
                key={movie.id}
              >
                {imagePath && (
                  <img
                    src={`${TMDB_IMAGE_BASE}/${imagePath}`}
                    alt="movie name cover"
                    className="suggest-result__item-cover flex"
                  />
                )}

                <div className="suggest-result__item-txt flex ver">
                  <div className="flex ver info">
                    <h3>
                      {movie.title} {year && `(${year})`}
                      <a
                        href={`https://www.themoviedb.org/movie/${movie.id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        TMDB
                      </a>
                    </h3>
                    <p>{movie.overview || "no description found"}</p>
                  </div>

                  <button
                    type="button"
                    className="suggest-result__item-footer"
                    onClick={() => {}}
                  >
                    suggest this one
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
