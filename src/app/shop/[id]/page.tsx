import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Product } from './types/products'; // Import the Product type

// Define the props interface for the ProductDetail component
interface ProductDetailProps {
  product: Product | null;
}

// ProductDetail component
const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const router = useRouter();

  // Show a loading spinner if the page is still being generated or if the product is not found
  if (router.isFallback || !product) {
    return (
      <div className="text-center py-6">
        <p>Loading...</p>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto mt-4"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Product Details Container */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Product Title */}
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

        {/* Product Image */}
        <div className="relative w-full h-96 mb-6">
          <Image
            src={urlFor(product.productImage).url()}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Product Description */}
        <p className="text-gray-700 text-lg mb-4">{product.description}</p>

        {/* Product Price */}
        <p className="text-2xl font-semibold text-blue-600 mb-6">
          ${product.rentalPrice}
        </p>

        {/* Add to Cart Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Fetch product data using getServerSideProps
export const getServerSideProps = async (context: {
  params: { id: string };
}) => {
  const { id } = context.params;

  // Sanity query to fetch the product by ID
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    title,
    productImage,
    rentalPrice,
    description
  }`;

  // Fetch the product from Sanity
  const product: Product | null = await client.fetch(query, { id });

  // If the product is not found, return a 404 page
  if (!product) {
    return {
      notFound: true,
    };
  }

  // Return the product as props
  return {
    props: {
      product,
    },
  };
};

export default ProductDetail;
