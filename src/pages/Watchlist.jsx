import Card from "../assets/components/card";
import { Link } from "react-router-dom";

export default function Watchlist() {
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
                /wl
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
      </nav> */}
      <section className="card-list flex">
        <Card />
      </section>
    </>
  );
}
