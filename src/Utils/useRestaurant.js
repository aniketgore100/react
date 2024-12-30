import { useEffect, useState } from "react";
import {FETCH_URL}  from "./Constants";

const useRetaurant = (restId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  useEffect(() => {
    getRestaunrants();
  }, []);

  async function getRestaunrants() {
    const RestaurantList = await fetch(FETCH_URL + restId);
    const ResData = await RestaurantList.json();
    setRestaurantMenu(ResData.data.cards[2].card.card.info);
  }
  return restaurantMenu;
};

export default useRetaurant;
