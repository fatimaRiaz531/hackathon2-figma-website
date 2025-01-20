{
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
        description: 'Name of the clothing item (e.g., Women\'s Party Dress)',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Unique identifier for the product URL',
        options: {
          source: 'name',
          maxLength: 200,
        },
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        description: 'Category of the clothing (e.g., Women, Men, Kids)',
        options: {
          list: [
            { title: 'Women', value: 'women' },
            { title: 'Men', value: 'men' },
            { title: 'Kids', value: 'kids' },
          ],
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Detailed description of the clothing item',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Rental Price',
        description: 'Rental price for the item',
      },
      {
        name: 'discountPrice',
        type: 'number',
        title: 'Discounted Price',
        description: 'Discounted rental price (if applicable)',
      },
      {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        of: [{ type: 'image' }],
        description: 'Main and additional images of the product',
      },
      {
        name: 'sizes',
        type: 'array',
        title: 'Available Sizes',
        of: [{ type: 'string' }],
        description: 'Available sizes (e.g., S, M, L)',
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock',
        description: 'Number of units available for rent',
      },
      {
        name: 'occasion',
        type: 'string',
        title: 'Occasion',
        description: 'Suitable occasion (e.g., Party, Casual, Formal)',
      },
      {
        name: 'rentalDuration',
        type: 'array',
        title: 'Rental Duration',
        of: [{ type: 'string' }],
        description: 'Rental duration options (e.g., 1 Day, 3 Days, 7 Days)',
      },
    ],
  }