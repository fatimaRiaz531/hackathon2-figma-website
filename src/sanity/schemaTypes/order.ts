export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    { name: 'firstName', title: 'First Name', type: 'string' },
    { name: 'lastName', title: 'Last Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'email' },
    { name: 'phoneNumber', title: 'Phone Number', type: 'string' }, // Ensure this matches your document
    {
      name: 'address', // If you want to keep it as a string, ensure it's used correctly in your documents
      title: 'Address',
      type: 'string', // If you want to store it as a single string, this is fine
    },
    { name: 'zipCode', title: 'Zip Code', type: 'string' }, // Ensure this matches your document
    { name: 'city', title: 'City', type: 'string' }, // Ensure this matches your document
    {
      name: 'cartItems',
      type: 'array',
      title: 'Cart Items',
      of: [
        {
          type: 'reference',
          to: { type: 'product' },
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