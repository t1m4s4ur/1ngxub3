import Card from "../assets/components/card";
import { Link } from "react-router-dom";

export default function Watchlist() {
  return (
    <>
      <section className="flex ver">
        <p>browse subdirectories</p>
        <ul>
          <li>
            <Link to="/mvs/wl/sgt">/sgt</Link>
          </li>
          <li>
            <Link to="/mvs/wl/vote">/vote</Link>
          </li>
        </ul>
      </section>
      <section className="card-list flex">
        <Card />
      </section>
    </>
  );
}
