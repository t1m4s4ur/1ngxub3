import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <section className="index flex ver">
        <ul className="directory">
          <li>
            <Link to="/movies">/movies</Link> (all movies)
            <ul>
              <li>
                <Link to="/movies/watchlist">/watchlist</Link> (unwatched
                movies)
                <ul>
                  <li>
                    <Link to="/movies/watchlist/suggest">/suggest</Link> (a new
                    movie)
                  </li>
                  <li>
                    <Link to="/movies/watchlist/vote">/vote</Link> (for a movie)
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}
