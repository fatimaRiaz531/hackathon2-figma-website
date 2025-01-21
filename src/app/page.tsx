// 'use client';

// import { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
import Hero from './Hero/page';
// import imageUrlBuilder from '@sanity/image-url'; // Import the image URL builder

// // Define the Product interface
// interface Product {
//   _id: string;
//   productName: string;
//   Image: { asset: { _ref: string } }; // Updated to match Sanity's asset structure
//   description: string;
//   price: number;
//   category: string[];
// }

// // Create a URL builder function
// const builder = imageUrlBuilder(client);

// function urlFor(source: { asset: { _ref: string } }) {
//   return builder.image(source);
// }

// export default function PforP() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 3; // Number of products to display per page

// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const query = `*[_type == "product"]{
//         _id,
//         productName,
//       "imageUrl" : image.asset->url,
//         description,
//         price,
//         category
//       }`;
//       const result = await client.fetch<Product[]>(query);
//       setProducts(result);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       setError('Failed to fetch products. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchProducts();
// }, []);

// // Pagination logic
// const indexOfLastProduct = currentPage * productsPerPage;
// const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
// const currentProducts = products.slice(
//   indexOfFirstProduct,
//   indexOfLastProduct
// );

// const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

// if (loading) {
//   return (
//     <div className="text-center py-6">
//       <p>Loading products...</p>
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto mt-4"></div>
//     </div>
//   );
// }

// if (error) {
//   return (
//     <div className="text-center py-6">
//       <p className="text-red-500">{error}</p>
//     </div>
//   );
// }

//   return (
//     <div>
//       <Hero />
//       <div className="container mx-auto px-4 py-6">
//         <h1 className="text-2xl font-bold mb-6">Product List</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {currentProducts.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
//             >
//               {/* Render Image if the URL is valid */}
//               {product.Image?.asset?._ref ? (
//                 <Image
//                   src={urlFor(product.Image).url()} // Use urlFor to generate the image URL
//                   alt={product.productName}
//                   width={300}
//                   height={300}
//                   className="object-cover rounded-md"
//                   priority // Optional: Prioritize loading for above-the-fold images
//                 />
//               ) : (
//                 <div className="w-[300px] h-[300px] flex items-center justify-center bg-gray-200 text-gray-500 rounded-md">
//                   No Image Available
//                 </div>
//               )}
//               <h2 className="mt-2 font-semibold text-lg text-center">
//                 {product.productName}
//               </h2>
//               <p className="mt-1 text-sm text-center text-gray-600">
//                 {product.description}
//               </p>
//               <span className="mt-2 font-bold text-lg text-center">
//                 ${product.price.toFixed(2)}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center mt-8">
//           {Array.from(
//             { length: Math.ceil(products.length / productsPerPage) },
//             (_, i) => (
//               <button
//                 key={i + 1}
//                 onClick={() => paginate(i + 1)}
//                 className={`mx-1 px-4 py-2 rounded ${
//                   currentPage === i + 1
//                     ? 'bg-blue-500 text-white'
//                     : 'bg-gray-200 text-gray-700'
//                 }`}
//               >
//                 {i + 1}
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';

const page = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default page;
