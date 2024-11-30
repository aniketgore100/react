import { useState } from "react";
import { restList } from "../config";
import RestCard from "./RestCard";

function filterData(searchTxt, List) {
  const filterdata = List.filter( (item)=>item.name.toLowerCase().includes(searchTxt.toLowerCase()));
  return filterdata;
}

const Body = () => {
  const [searchTxt, SetSearchTxt] = useState("");
  const [TotalRes, setTotalRes] = useState(restList);

  
  return (
    <>
      <div>
        <input
          type="text"
          className="search"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            SetSearchTxt(e.target.value);
          }}
        />
        <button
          className="button"
          onClick={() => {
            const data = filterData(searchTxt, restList);
            setTotalRes(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restoCard">
        {TotalRes.map((rest) => {
          return <RestCard {...rest} />;
        })}
      </div>
    </>
  );
};

export default Body;
