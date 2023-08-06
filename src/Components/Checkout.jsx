import { useState } from "react";

export default function Checkout({ handleCheckout }) {
  const [checkout, setCheckout] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: null,
  });

  function handleSubmit(e) {
    // e.preventDefault();
    // alert("You have adopted birds. Thank you!");
    // handleCheckout();
    const validCheckout = Object.values(checkout).every(
      (value) => Boolean(value) === true
    );

    if (validCheckout) {
      setCheckout({
        firstName: "",
        lastName: "",
        email: "",
        zipCode: null,
      });
      handleCheckout();
      alert("You have adopted birds! Thank you!");
    } else {
      alert("Form must be completed in order to checkout.");
    }
  }

  function handleChange(e) {
    setCheckout({ ...checkout, [e.target.id]: e.target.value });
  }

  return (
    <>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={checkout.firstName}
          onChange={handleChange}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={checkout.lastName}
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={checkout.email}
          onChange={handleChange}
        ></input>
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="number"
          id="zipCode"
          value={checkout.zipCode}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
