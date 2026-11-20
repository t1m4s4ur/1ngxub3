export default function Card() {
  return (
    <>
      <a href="" className="card card-list__item flex ver">
        <div className="status unwatched">unwatched</div>
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
          {/* <p className="secondary">mvTags:</p> */}
          <p className="tag comedy">comedy</p>
          <p className="tag romance">romance</p>
        </div>
      </a>
    </>
  );
}
