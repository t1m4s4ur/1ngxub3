import Card from "../assets/components/card";
import { Link } from "react-router-dom";

export default function Movies() {
  return (
    <>
      <div className="section flex ver">
        <p>browse subdirectories</p>
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
      </div>

      <section className="card-list flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}
