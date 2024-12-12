import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;
  const { restId } = useParams();  // Correct usage of the hook inside the component
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  
  useEffect(() =>{
    getRestaunrants();
  }, []);

  async function getRestaunrants(){
    const RestaurantList = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.8687882&lng=75.351215&restaurantId=" + restId);
    const ResData = await RestaurantList.json();
    setRestaurantMenu(ResData.data.cards[2].card.card.info);
  }

 
  return (!restaurantMenu) ? <Shimmer/> : (
    <div>
      <div className="Card">
      <h1>Restaurant Menu for ID: {restId}</h1>
      <h2>{restaurantMenu.name}</h2>
      <img src={imageUrl + restaurantMenu.cloudinaryImageId} alt="" />
      <h4>{restaurantMenu.city}</h4>
      </div>
    </div>
  );
};

export default RestaurantMenu; 
