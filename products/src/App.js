
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>Products</h4>

      <section>
        <Product name="iPhone" price="34.89" />
        <Product name="Vivo" price="12" />
        <Product name="Oppo" price="56" />
      </section>
    </div>
  );
}

function Product({ name, price }) {
  return <div className="product">
    <h2>{name}</h2>
    <p>{price}</p>
  </div>
}

export default App;
