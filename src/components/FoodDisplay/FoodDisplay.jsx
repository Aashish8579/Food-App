import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Filter food items by category (or show all)
  const filteredItems = food_list.filter(
    item => category === 'All' || category === item.category
  );

  return (
    <div className='food-display' id='food-display'>
      {/* Section Heading */}
      <h2>Top Dishes Near You</h2>

      {/* Grid of food cards */}
      <div className='food-display-list'>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <FoodItem
              key={item._id || index} // Prefer unique ID
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p className="no-items">No items available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
