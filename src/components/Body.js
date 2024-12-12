import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> master

function filterData(searchTxt, List) {
  const filterdata = List.filter( (item)=>item.name.toLowerCase().includes(searchTxt.toLowerCase()));
  return filterdata;
}


const Body = () => {

  const [searchTxt, SetSearchTxt] = useState("");
  const [Restaurants, setRestaurants] = useState([]);
  const [filterRestaurant, setFilterRest] = useState([]);

  useEffect(() =>{
    getRestaurant();
  }, []);


  async function getRestaurant(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8758&lng=75.3393&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    const RestaurantObject = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const AllRest = RestaurantObject.map((rest) => rest.info
    )
    setRestaurants(AllRest);
    setFilterRest(AllRest);
  }

  // filterRestaurant.length === 0 ? (<Shimmer />) :  shimmer
  return (
    <>
      <div>
        <input
          type="text"
          className="search"
          placeholder="search"
          value={searchTxt}
          onChange={ (e) => {
            SetSearchTxt(e.target.value);
          }}
        />
        <button
          className="button"
          onClick={() => {
            const data = filterData(searchTxt, Restaurants);
            console.log(data);
            
            setFilterRest(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restoCard">
        {filterRestaurant.map((rest) => {
          console.log(rest.id);
          
          return  <Link to = {"/restaurant/" + rest.id}> 
              <RestCard {...rest} />;
          </Link>
          
        })}
      </div>
    </>
  );
};

export default Body;
