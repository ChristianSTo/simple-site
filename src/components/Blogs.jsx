import "../blocks/blogs.css";

function Blogs() {
  return (
    <section className="blogs">
      <h1 className="blogs__h1">Stacks & Strats</h1>
      <p className="blogs__paragraph">
        Financial insights and investing guidance for everyone, from beginners
        to advanced investors.
      </p>
      <div className="blogs__grid">
        <div className="blogs__item"></div>
        <div className="blogs__item"></div>
        <div className="blogs__item"></div>
        <div className="blogs__item"></div>
      </div>
    </section>
  );
}

export default Blogs;
