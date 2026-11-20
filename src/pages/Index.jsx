import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <section className="idx flex ver">
        <ul className="directory">
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
                  <li>
                    <Link to="/mvs/wl/sgt">/sgt</Link>
                  </li>
                  <li>
                    <Link to="/mvs/wl/vote">/vote</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>/res</li>
        </ul>
        <p className="secondary">
          P.S. this website is neither a movie database nor a place to watch
          movies. it's made purely for the purpose of planning watching movies
          together with the selected group of friends.
          <br />
          <br />
          P.P.S. советую использовать впн, т.к. на сайте интегрировано api tmdb
          и подключена бд supabase
        </p>
      </section>
    </>
  );
}
