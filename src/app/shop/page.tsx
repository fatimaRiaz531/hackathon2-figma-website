'use client';

import CompaniesSection from '@/components/companiesSection';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { allproducts } from '@/sanity/lib/querries';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../../types/products';
import { addToCart } from '../actions/actions';
import Swal from 'sweetalert2';

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const fetchedProducts: Product[] = await client.fetch(allproducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const cloths = [
    { id: 1, image: '/images/shop/1.png', title: 'CLOTHS' },
    { id: 2, image: '/images/shop/2.png', title: 'CLOTHS' },
    { id: 3, image: '/images/shop/3.png', title: 'CLOTHS' },
    { id: 4, image: '/images/shop/4.png', title: 'CLOTHS' },
    { id: 5, image: '/images/shop/5.jpg', title: 'CLOTHS' },
  ];

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000,
      toast: true, // Display as a toast
      background: '#f0f0f0', // Change background color
      iconColor: '#4caf50', // Change icon color
    });
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="text-center py-6">
        <p>Loading products...</p>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto mt-4"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-6">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between ml-6 mb-8">
        <h1 className="text-3xl font-bold text-left">Shop</h1>
        <div className="flex items-center gap-2">
          <Link href="/Hero" className="hover:underline text-black">
            Home
          </Link>
          <span>&gt;</span>
          <Link href="/shop" className="text-gray-400 font-medium">
            Shop
          </Link>
        </div>
      </div>

      {/* Cloths Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cloths.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden group cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-lg">5 Items</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Products Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Our Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              {/* Highlighted Line: Check if slug exists before rendering the Link */}
              {product.slug?.current ? (
                <Link href={`/product/${product.slug.current}`}>
                  {product.productImage && (
                    <Image
                      src={urlFor(product.productImage).url()}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                  <h3 className="text-lg font-semibold mt-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">${product.price}</p>
                </Link>
              ) : (
                <div>
                  {product.productImage && (
                    <Image
                      src={urlFor(product.productImage).url()}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                  <h3 className="text-lg font-semibold mt-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              )}
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="bg-gradient-to-r from-blue-500 to-purple-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-110 transition-transform duration-200 ease-in-out w-full mt-2"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Filter and View Options Section */}
      <div className="mt-8 flex flex-wrap items-center justify-between px-4">
        <div>
          <h6 className="text-[#737373] font-bold">
            Showing all {products.length} results
          </h6>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 p-4">
          {/* Views Section */}
          <div className="flex items-center gap-4">
            <p className="text-[#737373] font-bold">Views:</p>
            <button className="w-8 h-8">
              <Image
                src="/images/shop/btn1.png"
                alt="Grid View"
                width={24}
                height={24}
                className="w-full h-auto"
              />
            </button>
            <button className="w-8 h-8">
              <Image
                src="/images/shop/btn2.png"
                alt="List View"
                width={24}
                height={24}
                className="w-full h-auto"
              />
            </button>
          </div>

          {/* Dropdown and Filter Button */}
          <div className="flex items-center gap-4">
            <select className="border rounded px-4 py-2 text-[#737373]">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button className="bg-[#0088FF] text-white px-4 py-2 rounded hover:bg-[#0077E6]">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <CompaniesSection />
    </div>
  );
};

export default Shop;
