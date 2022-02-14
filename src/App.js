import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import productData from './local-Json/productData.json'
import Products from './Components/Products';
import Home from './Components/Home';
import useApi from './hooks/useApi'
function App() {
  const [products,err]=useApi("products");
  return (

    <div className="App">
      <Home />
      {products && products.map((object,index)=>( <Products key={index}  product={object} />))}
      
    </div>
  );
}

export default App;
