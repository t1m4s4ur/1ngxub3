import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <form className="signup flex ver" action="#" method="POST">
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
        already have an acc? <Link to="/signin">sign in</Link>
      </p>
    </form>
  );
}
