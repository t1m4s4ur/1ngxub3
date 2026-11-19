export default function Comment() {
  return (
    <div className="movie-comments flex ver">
      <p className="secondary">no reviews yet</p>
      <div className="movie-comments__item flex hor">
        <div className="movie-comments__item-icon"></div>
        <div className="movie-comments__item-txt flex ver">
          <p className="usr">username1023</p>
          <p className="rating">5/5 rating</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            velit voluptatibus officia tenetur veniam optio delectus possimus
            sed cumque laudantium qui, rem sequi inventore laborum harum amet
            necessitatibus beatae aperiam. Molestiae esse voluptatem veniam id,
            autem natus, exercitationem deserunt ipsa nihil ipsum, quasi sit
            provident explicabo qui commodi? Dolorum inventore id voluptatum
            libero, repudiandae optio ab aliquam labore veniam maxime. Libero
            delectus quibusdam eum dignissimos mollitia quas vero deserunt
            soluta! Sit nostrum eveniet repellendus, exercitationem natus,
            aliquid reprehenderit, incidunt omnis explicabo nihil animi rem non
            commodi! Omnis cum itaque temporibus.
          </p>
          <p className="date secondary">11/11/2011 @ 11:11 PM (MSK)</p>
        </div>
      </div>
    </div>
  );
}
