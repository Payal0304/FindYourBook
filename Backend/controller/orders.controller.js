import Order from '../model/orders.js';

export const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send({ message: 'Order saved successfully' });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).send({ message: 'Error saving order', error });
  }
};