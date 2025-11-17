// Import React
import React from 'react'

// Import CSS styling for ExploreMenu component
import "./exploreMenu.css";

// Import menu_list from assets (contains all menu categories and images)
import { menu_list } from '../../assets/assets';

// Define ExploreMenu component, receiving `category` and `setCategory` as props
const ExploreMenu = ({ category, setCategory }) => {
  return (
    // Main wrapper for the Explore Menu section
    <div className='explore-menu' id="explore-menu">

      {/* Section heading */}
      <h1>Explore our menu</h1>

      {/* Short description for the menu */}
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. 
        Our mission is to satisfy and elevate your dining experience, 
        one delicious meal at a time.
      </p>

      {/* Container for all menu category items */}
      <div className="explore-menu-list">

        {/* Loop through all items in menu_list */}
        {menu_list.map((item, index) => {
          return (
            // Single menu item container
            <div 
              onClick={() => 
                // When clicked, toggle category selection:
                // if already selected, set to "All"; otherwise select this menu
                setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)
              } 
              key={index} 
              className="explore-menu-list-item"
            >
              {/* Menu image */}
              <img 
                className={category === item.menu_name ? "active" : ""} // Highlight if selected
                src={item.menu_image} 
                alt={item.menu_name} 
              />
              
              {/* Menu name */}
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>

      {/* Horizontal line to separate sections */}
      <hr/>
    </div>
  )
}

// Export ExploreMenu so it can be used in other parts of the app
export default ExploreMenu
