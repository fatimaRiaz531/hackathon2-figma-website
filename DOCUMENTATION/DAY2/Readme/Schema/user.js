{
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'Full name of the user',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        description: 'Email address of the user',
      },
      {
        name: 'address',
        type: 'text',
        title: 'Address',
        description: 'Shipping address for rentals',
      },
      {
        name: 'wishlist',
        type: 'array',
        title: 'Wishlist',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
        description: 'List of products saved for future rental',
      },
    ],
  }