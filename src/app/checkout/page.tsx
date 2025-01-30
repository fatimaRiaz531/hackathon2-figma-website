'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/products';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { CgMoveRight } from 'react-icons/cg';

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const items = query.get('items');
    if (items) {
      setCartItems(JSON.parse(items)); // Parse the cart items from the query parameter
    }
    const appliedDiscount = localStorage.getItem('appliedDicount');
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce((total, item) => total + item.price * item.inventory, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      // Handle order placement logic here
      localStorage.removeItem('appliedDiscount');
    }
  };

  return (
    <div className="min-h-screen bg-slate-200">
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link href="/cart" className="text-gray-500 hover:text-black transition text-sm">Cart</Link>
            <CgMoveRight />
            <span>Checkout</span>
          </nav>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-0 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                  <div className="w-16 h-16 rounded ">
                  {item.productImage && (
                                    <Image
                                      src={urlFor(item.productImage).url()}
                                      className="w-16 h-16 object-cover rounded-lg"
                                      alt={item.title}
                                      width={500}
                                      height={500}
                                    />
                                  )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
                    <p>${item.price * item.inventory}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs font-medium">No items in Cart</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">SubTotal: <span className="font-medium">${subTotal}</span></p>
              <p>Discount: <span className="font-medium">-${discount}</span></p>
              <p className="text-lg font-semibold">Total: <span className="font-medium">${(subTotal - discount).toFixed(2)}</span></p>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-6 space-y-4 mt-4">
            <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" id="firstName" placeholder="First Name" value={formValues.firstName} onChange={handleInputChange} className={`border p-2 rounded ${formErrors.firstName ? 'border-red-500' : ''}`} />
                <input type="text" id="lastName" placeholder="Last Name" value={formValues.lastName} onChange={handleInputChange} className={`border p-2 rounded ${formErrors.lastName ? 'border-red-500' : ''}`} />
                <input type="email" id="email" placeholder="Email" value={formValues.email} onChange={handleInputChange} className={`border p-2 rounded ${formErrors.email ? 'border-red-500' : ''}`} />
                <input type="text" id="phone" placeholder="Phone" value={formValues.phone} onChange={handleInputChange} className={`border p-2 rounded ${formErrors.phone ? 'border-red-500' : ''}`} />
                <input type="text" id="address" placeholder="Address" value={formValues.address} onChange={handleInputChange} className={`border p-2 rounded ${formErrors.address ? 'border-red-500' : ''}`} />
                <input type="text" id="zipCode" placeholder="Zip Code" value={formValues.zipCode} onChange={handleInputChange} className={`border p-2 rounded ${formErrors.zipCode ? 'border-red-500' : ''}`} />
                <input type="text" id="city" placeholder="City" value={formValues.city} onChange={handleInputChange} className={`border p-2 rounded ${formErrors.city ? 'border-red-500' : ''}`} />
              </div>
              <button type="button" onClick={handlePlaceOrder} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Place Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;