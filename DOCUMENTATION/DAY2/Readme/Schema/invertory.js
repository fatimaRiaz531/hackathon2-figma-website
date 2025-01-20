{
    name: 'inventory',
    type: 'document',
    title: 'Inventory',
    fields: [
      {
        name: 'product',
        type: 'reference',
        to: [{ type: 'product' }],
        description: 'Reference to the product',
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock',
        description: 'Current stock level of the product',
      },
      {
        name: 'lastUpdated',
        type: 'datetime',
        title: 'Last Updated',
        description: 'Timestamp of the last inventory update',
      },
    ],
  }