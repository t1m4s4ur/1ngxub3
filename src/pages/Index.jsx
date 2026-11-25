import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <section className="next2watch flex ver">
        <div className="card flex ver">
          <img
            className="framed"
            src="https://i.pinimg.com/1200x/d5/10/a4/d510a4f5a946e602586abc73da20ea2c.jpg"
            alt=""
          />
          <h3>movie name (2026)</h3>
          <p className="secondary">11/11/2011 @ 3:00 PM (MSK)</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic est
            ratione laudantium veritatis ullam, provident vero laboriosam
            placeat consectetur illum molestiae. Modi ut recusandae rerum
            dolorem perferendis qui. Fugiat, veritatis.
          </p>
        </div>
      </section>
      <hr />
      <h2>sitemap</h2>
      <nav className="idx flex ver">
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
                  <li>
                    <Link to="/mvs/wl/sgt">/sgt</Link>
                  </li>
                  {/* <li>
                    <Link to="/mvs/wl/vote">/vote</Link>
                  </li> */}
                </ul>
              </li>
            </ul>
          </li>
          <li>/res</li>
        </ul>
      </nav>
      <section className="ps flex ver">
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
