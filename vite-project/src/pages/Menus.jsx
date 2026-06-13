import React, { useState } from 'react';
import './Menus.css';

const menuData = {
  appetizers: [
    {
      name: 'Burgers',
      description: 'High quality beef medium to well with cheese and bacon on a multigrain bun',
      price: 'Shs. 10,000',
      img: '/burgers.png',
    },
    {
      name: 'Pizza',
      description: 'Delicious. Hot. Spicy. Scrumptious. Yummy. Diced tomatoes, crust, sauce, and toppings',
      price: 'Shs.35,000',
      img: '/pizza.png',
    },
    {
      name: 'Hot dogs',
      description: 'A dish consisting of a grilled, steamed, or boiled sausage served in the slit of a partially sliced bun',
      price: 'Shs.10,000',
      img: '/hot-dogs.png',
    },
    // Add more appetizers here
  ],
  salads: [
    {
      name: 'North African Carrot Salad',
      description: '',
      price: 'Shs.2000',
      img: '/carrotsalad.png',
    },
    {
      name: 'Kachumbari',
      description: 'East African Salad',
      price: 'Shs.1000',
      img: '/kachumbari.png',
    },{
      name: ' Egyptian Salata Baladi Salad',
      description: '',
      price: 'Shs. 2000',
      img: '/egypt.png',
    },
    // Add more salads here
  ],
  fruits: [
    {
      name: 'apples',
      description: 'A mix of fresh seasonal fruits.',
      price: 'Shs.1000 each',
      img: '/apples.png',
    },
    {
      name: 'mangoes',
      description: 'A mix of fresh seasonal fruits.',
      price: 'Shs.1000 each',
      img: '/mangoes.png',
    },
    {
      name: 'pineapples',
      description: 'A mix of fresh seasonal fruits.',
      price: 'Shs.2000 each',
      img: '/pineapples.png',
    },
    // Add more fruits here
  ],
  breakfast: [
    {
      name: 'samosas',
      description: 'Cruncy and delicious with minced meat.',
      price: 'Shs.1,000 each',
      img: '/samosa.png',
    },
    {
      name: 'Pancakes',
      description: 'Fluffy pancakes served with syrup and butter.',
      price: 'Shs.7,000',
      img: 'pancakes.png',
    },
    {
      name: 'Chapati',
      description: 'Soft and pliable',
      price: 'Shs.1,000',
      img: '/chapati.png',
    },
    // Add more breakfast items here
  ],
  lunch: [
    {
      name: 'Grilled Chicken',
      description: 'Grilled chicken sandwich with lettuce, tomato, and mayo.',
      price: 'Shs.30,000',
      img: '/chicken.png',
    },
    {
      name: 'Grilled Chicken Sandwich',
      description: 'Grilled chicken sandwich with lettuce, tomato, and mayo.',
      price: 'Shs.9,000',
      img: '/path/to/chicken-sandwich.jpg',
    },
    {
      name: 'Grilled Chicken Sandwich',
      description: 'Grilled chicken sandwich with lettuce, tomato, and mayo.',
      price: 'Shs.9,000',
      img: '/path/to/chicken-sandwich.jpg',
    },
    // Add more lunch items here
  ],
  snacks: [
    {
      name: 'Cheese Nachos',
      description: 'Crispy nachos with melted cheese and jalapenos.',
      price: 'Shs.6,000',
      img: '/path/to/nachos.jpg',
    },
    {
      name: 'Cheese Nachos',
      description: 'Crispy nachos with melted cheese and jalapenos.',
      price: 'Shs.6,000',
      img: '/path/to/nachos.jpg',
    },
    {
      name: 'Cheese Nachos',
      description: 'Crispy nachos with melted cheese and jalapenos.',
      price: 'Shs.6,000',
      img: '/path/to/nachos.jpg',
    },
    // Add more snacks here
  ],
};

const Menus = () => {
  const [cart, setCart] = useState([]);
  const [orderReceived, setOrderReceived] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('Shs.', '').replace(',', '')), 0);
  };

  const handleOrder = () => {
    setShowOrderForm(true);
  };

  const handleContinue = () => {
    setOrderReceived(true);
    setCart([]);
    setCustomerName('');
    setPhoneNumber('');
    setShowOrderForm(false);
    setTimeout(() => setOrderReceived(false), 3000); // Hide the message after 3 seconds
  };

  return (
    <div className="menus">
      <h1>Menus</h1>
      {Object.keys(menuData).map(category => (
        <div key={category} className="menu-category">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="menu-items">
            {menuData[category].map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.img} alt={item.name} />
                <div className="menu-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>{item.price}</span>
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="cart">
        <h2>Cart</h2>
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name} - {item.price}</span>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <h3>Total: Shs. {calculateTotal()}</h3>
        </div>
        <button className="order-button" onClick={handleOrder}>Order</button>
      </div>
      {showOrderForm && (
        <div className="order-form">
          <h2>Order Form</h2>
          <label>
            Name:
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
      {orderReceived && <p className="order-received-message">Your order has been received!</p>}
    </div>
  );
}

export default Menus;

// import React, { useState, useEffect } from 'react';
// import './Menus.css';

// const menuData = {
//   appetizers: [
//     { name: 'Burgers', description: 'High quality beef medium to well with cheese and bacon on a multigrain bun', price: 'Shs. 10,000', img: '/burgers.png' },
//     { name: 'Pizza', description: 'Delicious. Hot. Spicy. Scrumptious. Yummy. Diced tomatoes, crust, sauce, and toppings', price: 'Shs.35,000', img: '/pizza.png' },
//     { name: 'Hot dogs', description: 'A dish consisting of a grilled, steamed, or boiled sausage served in the slit of a partially sliced bun', price: 'Shs.10,000', img: '/hot-dogs.png' },
//     // Add more appetizers here
//   ],
//   salads: [
//     { name: 'North African Carrot Salad', description: '', price: 'Shs.2000', img: '/carrotsalad.png' },
//     { name: 'Kachumbari', description: 'East African Salad', price: 'Shs.1000', img: '/kachumbari.png' },
//     { name: 'Egyptian Salata Baladi Salad', description: '', price: 'Shs. 2000', img: '/egypt.png' },
//     // Add more salads here
//   ],
//   fruits: [
//     { name: 'apples', description: 'A mix of fresh seasonal fruits.', price: 'Shs.1000 each', img: '/apples.png' },
//     { name: 'mangoes', description: 'A mix of fresh seasonal fruits.', price: 'Shs.1000 each', img: '/mangoes.png' },
//     { name: 'pineapples', description: 'A mix of fresh seasonal fruits.', price: 'Shs.2000 each', img: '/pineapples.png' },
//     // Add more fruits here
//   ],
//   breakfast: [
//     { name: 'Pancakes', description: 'Fluffy pancakes served with syrup and butter.', price: 'Shs.7,000', img: '/path/to/pancakes.jpg' },
//     { name: 'Pancakes', description: 'Fluffy pancakes served with syrup and butter.', price: 'Shs.7,000', img: '/path/to/pancakes.jpg' },
//     { name: 'Pancakes', description: 'Fluffy pancakes served with syrup and butter.', price: 'Shs.7,000', img: '/path/to/pancakes.jpg' },
//     // Add more breakfast items here
//   ],
//   lunch: [
//     { name: 'Grilled Chicken Sandwich', description: 'Grilled chicken sandwich with lettuce, tomato, and mayo.', price: 'Shs.9,000', img: '/path/to/chicken-sandwich.jpg' },
//     { name: 'Grilled Chicken Sandwich', description: 'Grilled chicken sandwich with lettuce, tomato, and mayo.', price: 'Shs.9,000', img: '/path/to/chicken-sandwich.jpg' },
//     { name: 'Grilled Chicken Sandwich', description: 'Grilled chicken sandwich with lettuce, tomato, and mayo.', price: 'Shs.9,000', img: '/path/to/chicken-sandwich.jpg' },
//     // Add more lunch items here
//   ],
//   snacks: [
//     { name: 'Cheese Nachos', description: 'Crispy nachos with melted cheese and jalapenos.', price: 'Shs.6,000', img: '/path/to/nachos.jpg' },
//     { name: 'Cheese Nachos', description: 'Crispy nachos with melted cheese and jalapenos.', price: 'Shs.6,000', img: '/path/to/nachos.jpg' },
//     { name: 'Cheese Nachos', description: 'Crispy nachos with melted cheese and jalapenos.', price: 'Shs.6,000', img: '/path/to/nachos.jpg' },
//     // Add more snacks here
//   ],
// };

// const Menus = () => {
//   const [cart, setCart] = useState([]);
//   const [showOrderForm, setShowOrderForm] = useState(false);
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [orderMessage, setOrderMessage] = useState('');

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   const removeFromCart = (index) => {
//     const newCart = cart.filter((_, i) => i !== index);
//     setCart(newCart);
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + parseFloat(item.price.replace('Shs.', '').replace(',', '')), 0);
//   };

//   const handleOrder = () => {
//     setShowOrderForm(true);
//   };

//   const submitOrder = async () => {
//     const orderDetails = {
//       name,
//       phone,
//       cart
//     };

//     try {
//       const response = await fetch('http://localhost:5000/order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(orderDetails)
//       });

//       if (response.ok) {
//         setOrderMessage('Your order has been received!');
//         setCart([]);
//         setName('');
//         setPhone('');
//       } else {
//         setOrderMessage('Failed to place order. Please try again.');
//       }
//     } catch (error) {
//       setOrderMessage('Error: ' + error.message);
//     }
//   };

//   return (
//     <div className="menus">
//       <h1>Menus</h1>
//       {Object.keys(menuData).map(category => (
//         <div key={category} className="menu-category">
//           <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
//           <div className="menu-items">
//             {menuData[category].map((item, index) => (
//               <div key={index} className="menu-item">
//                 <img src={item.img} alt={item.name} />
//                 <div className="menu-item-details">
//                   <h3>{item.name}</h3>
//                   <p>{item.description}</p>
//                   <span>{item.price}</span>
//                   <button onClick={() => addToCart(item)}>Add to Cart</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//       <div className="cart">
//         <h2>Cart</h2>
//         {cart.map((item, index) => (
//           <div key={index} className="cart-item">
//             <span>{item.name} - {item.price}</span>
//             <button onClick={() => removeFromCart(index)}>Remove</button>
//           </div>
//         ))}
//         <div className="cart-total">
//           <h3>Total: Shs. {calculateTotal()}</h3>
//         </div>
//         <button className="order-button" onClick={handleOrder}>Order</button>
//       </div>

//       {showOrderForm && (
//         <div className="order-form">
//           <h2>Order Details</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <button onClick={submitOrder}>Continue</button>
//         </div>
//       )}

//       {orderMessage && <div className="order-message">{orderMessage}</div>}
//     </div>
//   );
// }

// export default Menus;





