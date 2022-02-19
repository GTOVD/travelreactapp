import logo from './logo.svg';
import './App.css';
import Header from './Header';
import data from './data.json';
import Cards from './Cards';

function App() {
  const cards = data.data.map(items => {
    return (
      <Cards
        key={items.id}
        {...items}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <section className="card-main">
        {cards}
      </section>
    </div>
  )
}

export default App;
