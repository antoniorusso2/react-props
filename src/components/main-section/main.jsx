import Card from '../card/card.jsx';
import Style from './main.module.css';
import { posts } from "../../data/posts.js";

function Main() {
  return (
    <main className={Style.main}>
      <div className="container">
        <div className="row">
          <h1 className={`${Style.title} col-12`}>
            Titolo pagina
          </h1>
          {posts.map((posts) => {
            return <Card key={posts.id} title={posts.title} image={posts.image} />;
          })}
        </div>
      </div>
    </main>

  );
}

export default Main;