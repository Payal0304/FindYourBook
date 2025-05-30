import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CheckOut() {
  const { state } = useLocation();
  const cartItems = state?.cartItems || [];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePass = async () => {
    const requiredFields = [
      { name: 'firstName', label: 'First Name' },
      { name: 'lastName', label: 'Last Name' },
      { name: 'phone', label: 'Phone Number' },
      { name: 'email', label: 'Email Address' },
      { name: 'address', label: 'Full Address' },
      { name: 'city', label: 'City' },
      { name: 'state', label: 'State' },
      { name: 'zipcode', label: 'Zip Code' }
    ];

    for (const field of requiredFields) {
      if (!formData[field.name].trim()) {
        toast.error(`${field.label} is required`);
        return;
      }
    }

    try {
      const orderData = {
        ...formData,
        cart: cartItems.map(({ item, quantity }) => ({
          itemId: item.id || null,
          title: item.title,
          price: item.price,
          quantity,
        })),
      };

      await axios.post('http://localhost:4001/order', orderData);
      toast.success("Order Placed Successfully");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      console.error("Order Error:", error.response?.data || error.message);
      toast.error("Failed to place order");
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
      <Navbar />
      <div className="mt-28">
        <div className="py-3 bg-yellow-200 font-semibold text-sm text-center">
          HOME / CHECKOUT
          <div className="mt-4">
            <Link to="/course">
              <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-500 transition duration-300">
                Back
              </button>
            </Link>
          </div>
        </div>

        {/* Basic Info Form */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Basic Information</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div>
              <label className="block mb-2 font-medium">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block mb-2 font-medium">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Full Address</label>
              <textarea name="address" value={formData.address} onChange={handleChange} rows="3" className="w-full border rounded-md px-3 py-2"></textarea>
            </div>
            <div>
              <label className="block mb-2 font-medium">City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block mb-2 font-medium">State</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block mb-2 font-medium">Zip Code</label>
              <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
            </div>
           
          </form>
        </div>

        {/* Cart Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Selected Books:</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">No items selected.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {cartItems.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border p-4 rounded bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-20 object-cover rounded" />
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p>Quantity: {quantity}</p>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <div className="font-semibold text-gray-700">
                    ${(item.price * quantity).toFixed(2)}
                  </div>
                </div>
              ))}
              <div className="text-right font-bold text-lg mt-2">
                Total: $
                {cartItems
                  .reduce((total, { item, quantity }) => total + item.price * quantity, 0)
                  .toFixed(2)}
              </div>
            </div>
          )}
        </div>
         <div className="md:col-span-2 text-right">
              <button type="button" onClick={handlePass} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 transition duration-300">
                Place Order
              </button>
            </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;
