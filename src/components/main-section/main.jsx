import Card from '../card/card.jsx';
import Style from './main.module.css';

function Main() {
  return (
    <main className={Style.main}>
      <div className="container">
        <div className="row">
          <h1 className={`${Style.title} col-12`}>
            Titolo pagina
          </h1>
          <Card />
        </div>
      </div>
    </main>

  );
}

export default Main;