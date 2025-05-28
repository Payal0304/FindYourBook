import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName:  { type: String, required: true, trim: true },
  phone:     { type: String, required: true, trim: true },
  email:     { type: String, required: true, trim: true },
  address:   { type: String, required: true, trim: true },
  city:      { type: String, required: true, trim: true },
  state:     { type: String, required: true, trim: true },
  zipcode:   { type: String, required: true, trim: true },
});

const Order = mongoose.model('Order', OrderSchema);
export default Order;
