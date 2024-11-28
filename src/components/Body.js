import {restList} from "../config"
import RestCard from "./RestCard";


const Body = () => {
    return (
      <div className="restoCard">
        {restList.map((rest) => {
          return <RestCard {...rest} />;
        })}
      </div>
    );
  };

  export default Body;