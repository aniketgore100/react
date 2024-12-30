import { useParams } from "react-router-dom";
import useRetaurant from "../Utils/useRestaurant";
import {imageUrl} from "../Utils/Constants"

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { restId } = useParams(); 
  const restaurantMenu = useRetaurant(restId);
  
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
