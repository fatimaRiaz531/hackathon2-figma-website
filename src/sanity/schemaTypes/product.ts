import { defineType } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      description:
        "The name of the product item (e.g., 'party,decoration,formal').",
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required(),
      description: 'A detailed description of the product item.',
    },
    {
      name: 'productImage',
      type: 'image',
      title: 'Product Image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true, // Enable image cropping
      },
      description: 'Upload an image of the product item.',
    },
    {
      name: 'originalPrice',
      type: 'number',
      title: 'Original Price',
      validation: (rule) => rule.required(),
      description: 'The original price of the item.',
    },
    {
      name: 'inventory',
      title: ' Inventory',
      type: 'number',
    },
    {
      name: 'rentalPrice',
      type: 'number',
      title: 'Rental Price',
      validation: (rule) => rule.required(),
      description: 'The price to rent this item per day.',
    },
    {
      name: 'size',
      type: 'string',
      title: 'Size',
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: 'Small', value: 'S' },
          { title: 'Medium', value: 'M' },
          { title: 'Large', value: 'L' },
          { title: 'Extra Large', value: 'XL' },
        ],
      },
      description: 'The size of the clothing item.',
    },
    {
      name: 'availability',
      type: 'string',
      title: 'Availability',
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Rented Out', value: 'rented' },
        ],
      },
      description: 'The current availability status of the item.',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      // validation: (rule) => rule.required(),
      options: {
        list: [
          { title: 'Casual', value: 'casual' },
          { title: 'Formal', value: 'formal' },
          { title: 'Party Wear', value: 'party-wear' },
          { title: 'Traditional', value: 'traditional' },
        ],
      },
      description: 'The category of the product item.',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      description:
        "Add tags to make this item easier to find (e.g., 'summer', 'wedding').",
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      description: 'The discount percentage for this item (if applicable).',
    },
    {
      name: 'isNew',
      type: 'boolean',
      title: 'New Badge',
      description: "Enable this to show a 'New' badge on the item.",
    },
  ],
});
