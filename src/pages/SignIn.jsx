import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <form className="signin flex ver" action="#" method="POST">
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

      <button type="submit">sign in</button>
      <p>
        don't have an acc? <Link to="/signup">sign up</Link>
      </p>
    </form>
  );
}
