export default function Profile() {
  return (
    <section className="flex ver">
      <div className="flex ver">
        <p>username: 123123</p>
        date created: 10/12/12
      </div>
      <div className="bttn-group flex hor">
        <a href="" className="bttn">
          sign out
        </a>

        <a href="" className="bttn error">
          delete
        </a>
      </div>
    </section>
  );
}
