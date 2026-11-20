import Comment from "../assets/components/comment";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieItem() {
  const { moviePath } = useParams();
  const match = moviePath?.match(/^mv(\d+)$/);
  const id = match ? match[1] : null;

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("Некорректный адрес фильма");
      return;
    }

    fetch(`/api/movies/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Фильм не найден");
        return response.json();
      })
      .then(setMovie)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Загрузка фильма…</p>;

  return (
    <>
      <article className="movie flex ver">
        <img
          src="https://images.unsplash.com/photo-1793279054626-dadc776db13b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="img"
        />
        <div className="movie-txt flex ver">
          <div className="status watched">watched on 11/11/2011</div>
          <h2>{movie.title}</h2>
          <div className="tags flex">
            <p className="tag comedy">comedy</p>
            <p className="tag romance">romance</p>
          </div>
          <hr />
          <p>{movie.description}</p>
          <p>
            <a href={movie.imdbUrl} target="_blank" rel="noopener noreferrer">
              TMDB
            </a>
          </p>
        </div>
        <hr />
        <div className="movie-footer flex">
          scheduled for: saturday 10/10/10 @ 03:00PM (MSK)
        </div>
        <h3>1 review(s) - 5/5 rating</h3>
        <Comment />
      </article>
    </>
  );
}
