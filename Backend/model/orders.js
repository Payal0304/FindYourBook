import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  title:  { type: String, required: true },
  price:  { type: Number, required: true },
  quantity: { type: Number, required: true }
});

const OrderSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName:  { type: String, required: true, trim: true },
  phone:     { type: String, required: true, trim: true },
  email:     { type: String, required: true, trim: true },
  address:   { type: String, required: true, trim: true },
  city:      { type: String, required: true, trim: true },
  state:     { type: String, required: true, trim: true },
  zipcode:   { type: String, required: true, trim: true },

  cart:      { type: [CartItemSchema], required: true } 
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);
export default Order;
