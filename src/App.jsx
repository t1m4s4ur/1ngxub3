import { useState } from "react";
import Typewriter from "typewriter-effect";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <a href="">to index</a>
        <section className="flex ver">
          <h1>
            <Typewriter
              options={{
                strings: ["./profile"],
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

          <p>settings and customization</p>
        </section>
        <section className="flex ver">
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
        </div>

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

        {/* <div className="card-list flex">
            <div className="card-list__item flex ver">
              <img
                src="https://images.unsplash.com/photo-1793279054626-dadc776db13b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="img"
                className="card-list__item-img"
              />
              <div className="card-list__item-txt flex ver">
                <h3>header</h3>
                <p>text</p>
              </div>
            </div>
          </div> */}
      </div>
      <footer>coded by sh4vk4</footer>
    </>
  );
}

export default App;
