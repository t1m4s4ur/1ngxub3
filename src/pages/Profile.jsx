export default function Profile() {
  return (
    <section className="profile flex ver">
      <div className="profile-info flex hor">
        <div className="profile-info__icon"></div>
        <div className="profile-info__txt flex ver">
          <p>
            <span className="secondary">usrName:</span> t1m4s4ur
          </p>
          <p>
            <span className="secondary">usrDate:</span> 19/11/2026
          </p>
        </div>
      </div>
      <div className="profile-rank flex ver">
        <h3 >> myRank: <span className="special">noob</span></h3>
        <p><span className="secondary">rankDesc:</span> never been to a movie night</p>
      </div>
      <div className="profile-stats flex ver">
        <h3>> myStats:</h3>
        <p>
          <span className="secondary">totalReviews:</span> 30
        </p>
        <p>
          <span className="secondary">totalWatched:</span> 30
        </p>
        <p>
          <span className="secondary">favGenres:</span> comedy, thriller, action
        </p>
      </div>
      <div className="profile-footer flex hor">
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
