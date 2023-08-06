export default function Bird({ bird, handleAddToCart }) {
  return (
    <li className="birds">
      <h1>{bird.name}</h1>
      <span>Price ${bird.amount}</span>
      <img src={bird.img} />
      <button onClick={() => handleAddToCart(bird)}>Adopt</button>
    </li>
  );
}
