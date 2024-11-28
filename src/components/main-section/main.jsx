import Card from '../card/card.jsx';
import Style from './main.module.css';
import { posts } from "../../data/posts.js";

function Main() {

  return (
    <main className={Style.main}>
      <div className="container">
        <div className="row">
          <div className="title col-12">
            <h1 className={`${Style.title} col-12`}>
              Titolo pagina
            </h1>
          </div>
          {posts.map((posts) => {
            return <Card key={posts.id} title={posts.title} image={posts.image} tags={posts.tags} />;
          })}
        </div>
      </div>
    </main>

  );
}

export default Main;