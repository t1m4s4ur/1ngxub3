import { useState } from "react";
import Typewriter from "typewriter-effect";
import { Heart, Star } from "@boxicons/react";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        {/* <a href="">to index</a> */}
        <section className="flex ver">
          <h1>
            <span>../</span>
            <Typewriter
              options={{
                strings: ["watchlist"],
                autoStart: true,
                keepLastString: true,
                cursor: "_",
                cursorBlink: false,
                loop: true,
                pauseFor: 4500,
              }}
            />
          </h1>

          {/* <p>choose your directory:</p> */}

          {/* <p>create an acc to browse</p> */}

          {/* <p>sign in your acc to browse</p> */}

          {/* <p>settings and customization</p> */}

          <p>list of all selected unwatched movies</p>
        </section>

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

        {/* SIGN IN AND SIGN UP FORMS */}
        {/* <form className="flex ver" action="#" method="POST">
          <div className="input-wrap flex">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="usr"
              autoComplete="false"
            />
            <div className="input-wrap__gen">genr8</div>
          </div>
          <input
            type="password"
            name="pwd1"
            id="pwd1"
            placeholder="pwd"
            autoComplete="false"
          />
          <input
            type="password"
            name="pwd2"
            id="pwd2"
            placeholder="confirm pwd"
            autoComplete="false"
          />
          <input type="button" value="sign up" />
          <p>
            already have an acc? <a href="">sign in</a>
          </p>
        </form> */}

        {/* <form className="flex ver" action="#" method="POST">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="usr"
            autoComplete="false"
          />
          <input
            type="password"
            name="pwd1"
            id="pwd1"
            placeholder="pwd"
            autoComplete="false"
          />

          <input type="button" value="sign in" />
          <p>
            don't have an acc? <a href="">sign up</a>
          </p>
        </form> */}

        {/* CARD LIST OF THINGS */}
        <section className="card-list flex">
          <a href="" className="card card-list__item flex ver">
            <img
              src="https://images.unsplash.com/photo-1793279054626-dadc776db13b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="img"
              className="card-list__item-img"
            />
            <div className="card-list__item-txt flex ver">
              <h3>movie name (2026)</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                cupiditate quas ratione perferendis nulla explicabo beatae nemo
                provident soluta accusamus quos laboriosam quaerat, ullam itaque
                repellat ducimus delectus neque nisi?
              </p>
            </div>
            <div className="card-list__item-footer tags flex hor">
              <p className="tag comedy">comedy</p>
              <p className="tag romance">romance</p>
            </div>
          </a>
        </section>

        {/* PAGE FOR A MOVIE */}
        {/* <section className="movie flex ver">
          <img
            src="https://images.unsplash.com/photo-1793279054626-dadc776db13b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="img"
          />
          <div className="movie-txt flex ver">
            <div className="status watched">watched on 11/11/2011</div>
            <h2>movie name (2026)</h2>
            <div className="tags flex">
              <p className="tag comedy">comedy</p>
              <p className="tag romance">romance</p>
            </div>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              vero laudantium veniam! Laborum eos fugit esse delectus deserunt
              nisi ea a maxime optio repellat, voluptas unde nostrum, accusamus
              debitis consequatur. Soluta omnis molestiae odit quo modi
              mollitia, inventore, accusamus, incidunt reiciendis ratione
              doloremque magnam vitae voluptatem beatae doloribus praesentium!
              Esse distinctio laudantium numquam. A minus distinctio quos magni,
              neque cupiditate? Numquam expedita sunt amet architecto
              consequatur magnam debitis nesciunt aliquam illum unde aspernatur
              voluptatibus odit quia dolor ad ex facilis officiis non, veritatis
              sapiente! Eius harum laborum tempore tenetur quibusdam.
            </p>
            <p>
              <a href="">IMDB link</a>, <a href="">Wikipedia</a>
            </p>
          </div>
          <hr />
          {/* <div className="movie-footer flex">
            scheduled for: saturday 10/10/10 @ 03:00PM (MSK)
          </div> 
          <h3>1 review(s) - 5/5 rating</h3>
          <div className="movie-comments flex ver">
            {/* <p className="secondary">no reviews yet</p> 
            <div className="movie-comments__item flex hor">
              <div className="movie-comments__item-icon"></div>
              <div className="movie-comments__item-txt flex ver">
                <p className="usr">username1023</p>
                <p className="rating">5/5 rating</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem velit voluptatibus officia tenetur veniam optio
                  delectus possimus sed cumque laudantium qui, rem sequi
                  inventore laborum harum amet necessitatibus beatae aperiam.
                  Molestiae esse voluptatem veniam id, autem natus,
                  exercitationem deserunt ipsa nihil ipsum, quasi sit provident
                  explicabo qui commodi? Dolorum inventore id voluptatum libero,
                  repudiandae optio ab aliquam labore veniam maxime. Libero
                  delectus quibusdam eum dignissimos mollitia quas vero deserunt
                  soluta! Sit nostrum eveniet repellendus, exercitationem natus,
                  aliquid reprehenderit, incidunt omnis explicabo nihil animi
                  rem non commodi! Omnis cum itaque temporibus.
                </p>
                <p className="date secondary">11/11/2011 @ 11:11 PM (MSK)</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* DIRECTORY CHOICE */}
        {/* <section className="flex ver">
          <ul className="directory">
            <li>
              <a href="">/watchlist</a> - list of all added movies
            </li>
            <li>
              <ul>
                <li>
                  <a href="">/suggest</a> a movie
                </li>
                <li>
                  <a href="">/vote</a> for a movie
                </li>
                <li>
                  <a href="">/takeseat</a> to watch
                </li>
              </ul>
            </li>
          </ul>
        </section> */}
      </div>
      <footer className="secondary">coded by sh4vk4</footer>
    </>
  );
}

export default App;
