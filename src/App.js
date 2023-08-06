import { useState } from "react";
import birdData from "./data/birds";
import BirdCards from "./Components/BirdCards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App() {
  const [birds, setBirds] = useState(birdData);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function handleAddToCart(bird) {
    setCart([...cart, bird]);
  }

  function handleRemoveFromCart(birdId){
    const birdToRemoveIndex = cart.findIndex(bird => bird.id === birdId)
    const dupedCart = cart.slice()
    dupedCart.splice(birdToRemoveIndex, 1)
    setCart(dupedCart)
  }

  function handleCheckout() {
    setCart([]);
    setTotal(0);
  }

  return (
    <div>
      <h1>Bird Sanctuary</h1>
      <div>
        <Cart setTotal={setTotal} total={total} cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
        <Checkout handleCheckout={handleCheckout} />
        <BirdCards handleAddToCart={handleAddToCart} birds={birdData} />
      </div>
    </div>
  );
}

export default App;
