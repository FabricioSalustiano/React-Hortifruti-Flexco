import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductInfoPage from './components/pags/ProductInfoPage';
import CartPage from './components/pags/CartPage';
import ShopPage from './components/pags/ShopPage';
import Footer from './components/layout/Footer';

  
const url = "http://localhost:8080/api/fruityvice/all"; 

function App() {

  const [allFruits, setAllFruits] = useState([]);
  const [cartItens, setCartItens] = useState([]);

  const getAllFruits = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setAllFruits(data);
    }
    useEffect(() => {
        getAllFruits(url);
    }, []);


  const addFruitsCart = (fruit) => {
    const fruitExist = cartItens.find((item) => item.id === fruit.id);
    if (fruitExist) {
      setCartItens(cartItens.map((item) => item.id === fruit.id ? 
      {...fruitExist, quantity: fruitExist.quantity + 1}: item));
    }
    else
      setCartItens([...cartItens, {...fruit, quantity: 1}]); 
}

const removeFruitsCart = (fruit) => {
  const fruitExist = cartItens.find((item) => item.id === fruit.id);
  if (fruitExist.quantity === 1) 
    setCartItens(cartItens.filter((item) => item.id !== fruit.id));
  else {
    setCartItens(cartItens.map((item) => item.id === fruit.id ? 
    {...fruitExist, quantity: fruitExist.quantity - 1} :item))
  }
}

const clearFruitsCart = () => setCartItens([]);

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<ShopPage 
              allFruits={allFruits} 
              addFruitsCart={addFruitsCart} 
              cartItens={cartItens} />}>
            </Route>
            <Route path="/produto/:name" element={<ProductInfoPage cartItens={cartItens}/>}></Route>
            <Route path="/carrinho" element={
              <CartPage 
                cartItens={cartItens} 
                removeFruitsCart={removeFruitsCart} 
                addFruitsCart={addFruitsCart} 
                clearFruitsCart={clearFruitsCart}
              />}>
            </Route>
          </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;