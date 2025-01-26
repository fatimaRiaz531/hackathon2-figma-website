import { Product } from "../../../types/products";

// Add a product to the cart
export const addToCart = (product: Product) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if (existingProductIndex > -1) {
        // If product already exists, increase its quantity
        cart[existingProductIndex].inventory += 1;
    } else {
        // If product is new, add it to the cart with quantity 1
        cart.push({
            ...product,
            inventory: 1,
        });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Remove a product from the cart
export const removeFromCart = (productId: string) => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item._id !== productId); // Filter out the product
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
};

// Update the quantity of a product in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex(item => item._id === productId);

    if (productIndex > -1) {
        cart[productIndex].inventory = quantity; // Update quantity
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
    }
};

// Get all items in the cart
export const getCartItems = (): Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
};

// Clear the entire cart
export const clearCart = () => {
    localStorage.removeItem('cart'); // Remove cart from localStorage
};

