import React, { useContext, useState } from 'react';
import "./FoodItem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Dynamic rating state (default 0)
  const [rating, setRating] = useState(0);

  // Optional: store hover rating for hover effect
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className='FoodItem'>
      {/* IMAGE + ADD TO CART */}
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />

        {!cartItems[id] ? (
          <img
            className='add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
          </div>
        )}
      </div>

      {/* INFO + RATING */}
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>

          <div className="star-rating">
            {[1,2,3,4,5].map((star) => (
              <span
                key={star}
                className={`star ${star <= (hoverRating || rating) ? 'filled' : ''}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem;
