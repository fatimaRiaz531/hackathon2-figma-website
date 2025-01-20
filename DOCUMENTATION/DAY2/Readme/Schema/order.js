{
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'orderId',
        type: 'string',
        title: 'Order ID',
        description: 'Unique identifier for the order',
      },
      {
        name: 'user',
        type: 'reference',
        title: 'User',
        to: [{ type: 'user' }],
        description: 'User who placed the order',
      },
      {
        name: 'products',
        type: 'array',
        title: 'Products',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                type: 'reference',
                to: [{ type: 'product' }],
                description: 'Rented product',
              },
              {
                name: 'quantity',
                type: 'number',
                description: 'Quantity of the product rented',
              },
            ],
          },
        ],
      },
      {
        name: 'totalPrice',
        type: 'number',
        title: 'Total Price',
        description: 'Total rental price for the order',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Order Status',
        description: 'Status of the order (e.g., Processing, Shipped, Delivered)',
      },
    ],
  }