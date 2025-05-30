import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


function Course() {
  const [book, setBook] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const itemIndex = prev.findIndex((cartItem) => cartItem.item.id === item.id);
      if (itemIndex >= 0) {
        const updated = [...prev];
        updated[itemIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { item, quantity: 1 }];
      }
    });
    toast.success(`${item.title} added to cart`);
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((cartItem) =>
        cartItem.item.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((cartItem) =>
          cartItem.item.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  return (
    <>
      <div className="fixed top-24 left-4 z-50">
        <div onClick={() => setShowCart(!showCart)} className="cursor-pointer relative">
          <svg
            className="w-8 h-8 text-gray-800 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4Zm8 0a2 2 0 100 4 2 2 0 000-4Zm-8.5-3h9.25L19 7H7.312"
            />
          </svg>
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
            </span>
          )}
        </div>
      </div>

{showCart && (
  <div className="fixed top-20 right-0 w-[420px] h-[88vh] bg-[#2f2f2f] text-white shadow-lg z-40 flex flex-col justify-between rounded-l-xl">
    <div className="flex justify-between items-center p-4 border-b border-gray-700">
      <h2 className="text-lg font-bold">SHOPPING CART</h2>
      <div className="text-md font-semibold">
        Total : $
        {cartItems
          .reduce((total, { item, quantity }) => total + item.price * quantity, 0)
          .toFixed(2)}
      </div>
    </div>

    <div className="flex-grow overflow-y-auto p-4 space-y-4">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-300">Your cart is empty.</p>
      ) : (
        cartItems.map(({ item, quantity }) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-[#3b3b3b] p-3 rounded-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-20 object-cover rounded"
            />
            <div className="flex-1 mx-3">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">${item.price}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded text-lg"
                onClick={() => decreaseQuantity(item.id)}
              >
                –
              </button>
              <span className="text-sm">{quantity}</span>
              <button
                className="bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded text-lg"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
    </div>

    <div className="p-4 border-t border-gray-700 flex justify-between space-x-3">
      <button
        className="bg-yellow-400 text-black w-1/2 py-2 rounded font-bold hover:bg-yellow-500"
        onClick={() => setShowCart(false)}
      >
        CLOSE
      </button>
      <Link
  to="/checkout"
  state={{ cartItems }}
  className="w-1/2"
>
  <button className="bg-yellow-400 text-black w-full py-2 rounded font-bold hover:bg-yellow-500">
    CHECK OUT
  </button>
</Link>

    </div>
  </div>
)}

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 body">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you <span style={{ color: '#90d52f' }}>Here! :)</span>
          </h1>
          <p className="mt-12">
            There are different genres of books available for book readers. Every day,
            thousands of books are released in the market ranging from travel books to
            fictional books.
          </p>
          <Link to="/">
            <button className="mt-6 btn-custom px-4 py-2 rounded-md duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
