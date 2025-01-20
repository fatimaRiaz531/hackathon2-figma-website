import { defineQuery } from 'next-sanity';

// Query to fetch all products
export const allproducts = defineQuery(`
  *[_type == "product"] {
    _type,
    title,
    price,
    "imageUrl" : image.asset->url
    tags,
    discountPercentage, // Corrected typo: dicountPercentage -> discountPercentage
    description,
    isNew
  }
`);

// Query to fetch the first 7 products
export const forproducts = defineQuery(`
  *[_type == "product"][0..6] {
    _id,
    name,
    description,
    price,
    discountPercentage,
    priceWithoutDiscount,
    rating,
    ratingCount,
    tags,
    sizes,
    "imageUrl" : image.asset->url
  }
`);