import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const TMDB_IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE;

import Card from "../assets/components/card";

export default function Suggest() {
  const { supabase } = useOutletContext();

  return (
    <section className="suggest flex ver">
      <form action="" role="search">
        {/* <div className="input-wrap flex hor">
          <input type="text" placeholder="type a movie name" />
          <button type="submit">search</button>
        </div> */}
        <input type="text" placeholder="type to search" />
      </form>
      <div className="suggest-result flex ver">
        <div className="suggest-result__item search flex hor">
          <img
            src="https://image.tmdb.org/t/p/original/9xkR94BWtQpbELW9vIk8Rx696qi.jpg"
            alt="movie name cover"
            className="suggest-result__item-cover flex"
          />
          <div className="suggest-result__item-txt flex ver">
            <div className="flex ver info">
              <h3>
                {/* <span className="secondary">mvName: </span> */}
                movie name (2026)
                <a href="">TMDB</a>
              </h3>
              <div className="tags flex hor">
                {/* <span className="secondary">mvTags: </span> */}
                <p className="tag comedy">comedy</p>
                <p className="tag romance">romance</p>
              </div>
              <p>
                {/* <span className="secondary">mvDesc: </span> */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat minima reiciendis fuga facere qui necessitatibus,
                delectus, iure ipsa dicta pariatur minus explicabo! Velit quasi,
                dignissimos nulla nemo et rerum veritatis?
              </p>
            </div>

            <a href="" className="bttn suggest-result__item-footer">
              suggest
            </a>
          </div>
        </div>
        <div className="suggest-result__item search flex hor">
          <img
            src="https://image.tmdb.org/t/p/original/9xkR94BWtQpbELW9vIk8Rx696qi.jpg"
            alt="movie name cover"
            className="suggest-result__item-cover flex"
          />
          <div className="suggest-result__item-txt flex ver">
            <div className="flex ver info">
              <h3>
                {/* <span className="secondary">mvName: </span> */}
                movie name (2026)
                <a href="">TMDB</a>
              </h3>
              <div className="tags flex hor">
                {/* <span className="secondary">mvTags: </span> */}
                <p className="tag comedy">comedy</p>
                <p className="tag romance">romance</p>
              </div>
              <p>
                {/* <span className="secondary">mvDesc: </span> */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat minima reiciendis fuga facere qui necessitatibus,
                delectus, iure ipsa dicta pariatur minus explicabo! Velit quasi,
                dignissimos nulla nemo et rerum veritatis?
              </p>
            </div>

            <a href="" className="bttn suggest-result__item-footer">
              suggest
            </a>
          </div>
        </div>
        <div className="suggest-result__item search flex hor">
          <img
            src="https://image.tmdb.org/t/p/original/9xkR94BWtQpbELW9vIk8Rx696qi.jpg"
            alt="movie name cover"
            className="suggest-result__item-cover flex"
          />
          <div className="suggest-result__item-txt flex ver">
            <div className="flex ver info">
              <h3>
                {/* <span className="secondary">mvName: </span> */}
                movie name (2026)
                <a href="">TMDB</a>
              </h3>
              <div className="tags flex hor">
                {/* <span className="secondary">mvTags: </span> */}
                <p className="tag comedy">comedy</p>
                <p className="tag romance">romance</p>
              </div>
              <p>
                {/* <span className="secondary">mvDesc: </span> */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat minima reiciendis fuga facere qui necessitatibus,
                delectus, iure ipsa dicta pariatur minus explicabo! Velit quasi,
                dignissimos nulla nemo et rerum veritatis?
              </p>
            </div>

            <a href="" className="bttn suggest-result__item-footer">
              suggest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
