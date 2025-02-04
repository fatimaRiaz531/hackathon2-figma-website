'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '../../../types/products';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { CgMoveRight } from 'react-icons/cg';
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    zipCode: string;
    city: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
  });

  const [formErrors, setFormErrors] = useState<{
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    phone: boolean;
    address: boolean;
    zipCode: boolean;
    city: boolean;
  }>({
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
    const appliedDiscount = localStorage.getItem('appliedDiscount');
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName.trim(),
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode:
        !formValues.zipCode.trim() || !/^\d{5}$/.test(formValues.zipCode),
      city: !formValues.city.trim(),
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields correctly.',
        icon: 'error',
      });
      return;
    }

    Swal.fire({
      title: 'Processing your Order...',
      text: 'Please wait a moment.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Proceed',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const orderData = {
            _type: 'order',
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            address: formValues.address,
            city: formValues.city,
            zipCode: formValues.zipCode,
            phoneNumber: formValues.phone,
            email: formValues.email,
            cartItems: cartItems.map((item) => ({
              _key: item._id,
              _type: 'reference',
              _ref: item._id,
            })),
            total: subTotal - discount,
            discount: discount,
            orderDate: new Date().toISOString(),
          };

          await client.create(orderData);
          localStorage.removeItem('appliedDiscount');

          // Reset form values and cart items
          setFormValues({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            zipCode: '',
            city: '',
          });
          setCartItems([]); // Clear the cart items

          Swal.fire({
            title: 'Success!',
            text: 'Your Order has been successfully processed!',
            icon: 'success',
          });
        } catch (error) {
          console.error('Error creating order', error);
          Swal.fire({
            title: 'Error!',
            text: 'An error occurred while processing your order.',
            icon: 'error',
          });
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-200">
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-gray-500 hover:text-black transition text-sm"
            >
              Cart
            </Link>
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
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded">
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
                    <p className="text-xs text-gray-500">
                      Quantity: {item.inventory}
                    </p>
                    <p>${(item.price * item.inventory).toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs font-medium">No items in Cart</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                SubTotal:{' '}
                <span className="font-medium">${subTotal.toFixed(2)}</span>
              </p>
              <p>
                Discount:{' '}
                <span className="font-medium">-${discount.toFixed(2)}</span>
              </p>
              <p className="text-lg font-semibold">
                Total:{' '}
                <span className="font-medium">
                  ${(subTotal - discount).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-6 space-y-4 mt-4">
            <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.keys(formValues).map((key) => (
                  <input
                    key={key}
                    type={key === 'email' ? 'email' : 'text'}
                    id={key}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={formValues[key as keyof typeof formValues]}
                    onChange={handleInputChange}
                    className={`border p-2 rounded ${formErrors[key as keyof typeof formErrors] ? 'border-red-500' : ''}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
