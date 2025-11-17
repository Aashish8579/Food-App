// Importing createContext (to create a global context) and useState (to manage state) from React
import { createContext, useState } from "react";

// Importing food_list (array of products) from assets
import { food_list } from "../assets/assets";

// Creating a new Context object called StoreContext (to share data across components)
export const StoreContext = createContext(null); 
// will hold the cart data and functions, and any component in the app can use them.

// Defining the StoreContextProvider component
const StoreContextProvider = (props) => {
  // State to store items in the cart
  // cartItems is an object: { itemId: quantity }
  const [cartItems, setCartItems] = useState({});



  // Function to add an item to the cart
  const addToCart = (itemId) => {
    // If item is not already in cart, set its quantity to 1
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    }

    // If item already exists, increase its quantity by 1
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Function to remove an item from the cart (decrease its quantity by 1)
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };



  // Function to calculate the total amount of items in the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0; // Start with total = 0
    
    // Loop through each item in the cartItems object
    for (const item in cartItems) {
      // Only count if the quantity is greater than 0
      if (cartItems[item] > 0) {
        // Find the product info from food_list using itemId
        let itemInfo = food_list.find((product) => product._id === item);
        // Add price * quantity to totalAmount
        totalAmount += itemInfo.price * cartItems[item];
      }

    }
    return totalAmount; // Return the final total
  };

  // Bundle all values and functions we want to share across components
  const contextValue = {
    food_list, // List of all available food items
    cartItems, // Cart state object
    setCartItems, // Function to update cart directly (if needed)
    addToCart, // Function to add item
    removeFromCart, // Function to remove item
    getTotalCartAmount, // Function to calculate total amount
  };

  // Provide contextValue to all child components wrapped inside StoreContextProvider
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
      {/* props.children means whatever components are wrapped inside StoreContextProvider */}
    </StoreContext.Provider>
  );
};

// Exporting the provider so it can be used to wrap the app
export default StoreContextProvider;
