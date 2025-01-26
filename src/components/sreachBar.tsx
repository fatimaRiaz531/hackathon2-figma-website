'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { createClient } from 'next-sanity';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: 'gowa4lf0',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

interface SanityImageSource {
  asset: {
    _ref: string;
  };
}

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

interface Product {
  title: string;
  productImage: SanityImageSource;
  availability: boolean;
}

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [filteredResult, setFilteredResult] = useState<Product | null>(null);

  useEffect(() => {
    // Fetch products from Sanity
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {title, productImage, availability}`;
      const products: Product[] = await sanityClient.fetch(query);
      setSearchResults(products);
    };
    fetchProducts();
  }, []);

  const handleSearch = () => {
    const result = searchResults.find(
      (item) => item.title?.toLowerCase() === searchTerm.toLowerCase()
    );
    if (result) {
      setFilteredResult(result);
    } else {
      alert('Product not found.');
      setFilteredResult(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-x-4 items-center">
      <div className="flex w-full bg-gray-200 rounded-md items-center">
        <FontAwesomeIcon icon={faSearch} className="text-xl ml-2" />
        <input
          type="text"
          className="bg-transparent py-2 pl-10 pr-4 w-full rounded-md focus:outline-none"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {filteredResult ? (
        <div className="mt-4">
          <h2>{filteredResult.title}</h2>
          {filteredResult.productImage?.asset?._ref && (
            <Image
              src={urlFor(filteredResult.productImage).url() || ''}
              alt={filteredResult.title}
              width={500}
              height={500}
            />
          )}
          {filteredResult.availability ? (
            <p>Available</p>
          ) : (
            <p>Currently unavailable</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
