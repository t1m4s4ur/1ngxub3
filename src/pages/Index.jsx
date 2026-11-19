import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <section className="index flex ver">
        <ul className="directory">
          <li>
            <Link to="/profile">/profile</Link>
          </li>
          <li>
            <Link to="/movies">/movies</Link>
            <ul>
              <li>
                <Link to="/movies/watched">/watched</Link>
              </li>
              <li>
                <Link to="/movies/watchlist">/watchlist</Link>
                <ul>
                  <li>
                    <Link to="/movies/watchlist/suggest">/suggest</Link>
                  </li>
                  <li>
                    <Link to="/movies/watchlist/vote">/vote</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>/resources</li>
        </ul>
        <p className="secondary">
          disclaimer: this website is neither a movie database nor a place to
          watch movies. it's made purely for the purpose of planning watching
          movies together with the selected group of friends.
        </p>
      </section>
    </>
  );
}
