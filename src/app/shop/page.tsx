import CompaniesSection from "@/components/companiesSection";
import React from 'react';
import Image from "next/image";
const Shop = () => {
  const cloths = [
    { id: 1, image: "/images/shop/1.png", title: "CLOTHS" },
    { id: 2, image: "/images/shop/2.png", title: "CLOTHS" },
    { id: 3, image: "/images/shop/3.png", title: "CLOTHS" },
    { id: 4, image: "/images/shop/4.png", title: "CLOTHS" },
    { id: 5, image: "/images/shop/5.jpg", title: "CLOTHS" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="flex items-center justify-between ml-6 mb-8">
  <h1 className="text-3xl font-bold text-left">Shop</h1>
  <div className="flex items-center gap-2">
    <a href="/Hero" className="hover:underline text-black">
      Home
    </a>
    <span>&gt;</span>
    <a href="/shop" className="text-gray-400 font-medium">
      Shop
    </a>
  </div>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cloths.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden group cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
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

      <div className="mt-18 flex flex-wrap items-center justify-between">
        {/* Left Section - Results Text */}
        <div>
          <h6 className="text-[#737373] text-left font-bold mr-8">
            Showing all 12 results
          </h6>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between px-4 mr-0">
          {/* Left Section - Showing Results */}
          <div>
            <h6 className="text-[#737373] font-bold">
              Showing all 12 results
            </h6>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 p-4">
  {/* Center Section - Views */}
  <div className="flex items-center gap-4 ml-6">
    <p className="text-[#737373] font-bold">Views:</p>

    {/* Grid View Button */}
    <button className="w-8 h-8">
      <Image
        src="/images/shop/btn1.png"
        alt="Grid View"
        width={24}
        height={24}
        className="w-full h-auto"
      />
    </button>

    {/* List View Button */}
    <button className="w-8 h-8 ">
      <Image
        src="/images/shop/btn2.png"
        alt="List View"
        width={24}
        height={24}
        className="w-full h-auto"
      />
    </button>
  </div>

  {/* Right Section - Dropdown and Filter Button */}
  <div className="flex items-center gap-4 mr-8">
    {/* Popularity Dropdown */}
    <select className="border rounded px-4 py-2 text-[#737373]">
      <option>Popularity</option>
      <option>Newest</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
    </select>

    {/* Filter Button */}
    <button className="bg-[#0088FF] text-white px-4 py-2 rounded hover:bg-[#0077E6]">
      Filter
    </button>
  </div>
</div>


        </div>
        <CompaniesSection />
      </div>

    </div>
      );
}

      export default Shop;