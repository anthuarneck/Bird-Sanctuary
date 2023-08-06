import bonusItems from "../data/bonusItems";

export default function Cart({ cart, total, handleRemoveFromCart }) {


  function calculateTotal(cart) {
    for (let bird of cart) {
      total += bird.amount;
    }
    return total;
  }

  const discount = cart.length >= 3 ? 10 : 0;
  const multiplier = cart.length >= 3 ? 0.9 : 1;

  // let discount = 0;
  // if (cart.length >= 3) {
  //   discount = 10;
  // }

  const qualifyingBonusItems =
    total >= 100 && total < 300
      ? bonusItems.slice(0, 1)
      : (total >= 300) & (total < 500)
      ? bonusItems.slice(0, 2)
      : (total >= 500) & (total < 1000)
      ? bonusItems.slice(0, 3)
      : total >= 1000
      ? bonusItems
      : [];

  console.log(qualifyingBonusItems, total);

  return (
    <>
      <h2>Cart</h2>
      <h4>Discount: {discount}%</h4>
      <ol>
        {cart.map((bird) => (
          <>
            <li key={bird.id}>{`${bird.name} $${bird.amount}`}</li>
            <button onClick={() => handleRemoveFromCart(bird.id)}>
              Remove
            </button>
          </>
        ))}
      </ol>
      <p>
        {cart.length >= 1 ? (
          <>
            <p>Your donations have qualified you for the following items:</p>
            <ul>
              {qualifyingBonusItems.map((bonusItem) => (
                <li>{bonusItem}</li>
              ))}
            </ul>
          </>
        ) : null}
      </p>
      <h4>Total: ${calculateTotal(cart) * multiplier}</h4>
    </>
  );
}
