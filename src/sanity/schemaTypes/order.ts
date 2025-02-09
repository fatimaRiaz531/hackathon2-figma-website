// schemas/order.js
export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'customer',
      title: 'Customer Information',
      type: 'object',
      fields: [
        { name: 'firstName', title: 'First Name', type: 'string' },
        { name: 'lastName', title: 'Last Name', type: 'string' },
        { name: 'email', title: 'Email', type: 'email' },
        {
          name: 'address',
          title: 'Address',
          type: 'object',
          fields: [
            { name: 'street', title: 'Street', type: 'string' },
            { name: 'city', title: 'City', type: 'string' },
            { name: 'zipCode', title: 'Zip Code', type: 'string' },
          ],
        },
        { name: 'phoneNumber', title: 'Phone Number', type: 'string' }, // Changed to 'string' for consistency
      ],
    },
    {
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'object',
      fields: [
        { name: 'street', title: 'Street', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'zipCode', title: 'Zip Code', type: 'string' },
      ],
    },
    {
      name: 'cartItems',
      title: 'Cart Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }], // Ensure this matches the product schema name
        },
      ],
    },
    { name: 'total', title: 'Total', type: 'number' },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Success', value: 'success' },
          { title: 'Dispatch', value: 'dispatch' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
    },
  ],
};