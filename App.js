import React from "react";
import ReactDom from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51Fg8ECaMCb6T2yAd4CgUjy_hu7Zk1OKEZw&s"
    />
  </a>
);

const Header = () => {
  return (
    <div className="Header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const restList = [
  {
    name: "Burger King",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_569928.JPG",
    cuisine: ["Burgers", "Fast Food"],
    ratings: "4.2",
  },
  {
    name: "Pizza Hut",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/04b4575b-7c4e-4268-9137-ed05f01ac24c_388863.jpg",
    cuisine: ["Pizza", "Italian"],
    ratings: "4.5",
  },
  {
    name: "Subway",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/CPTi1",
    cuisine: ["Sandwiches", "Healthy"],
    ratings: "4.3",
  },
  {
    name: "KFC",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/8d21ae1e-6cec-4642-a8f6-becd79bbab37_700286.JPG",
    cuisine: ["Chicken", "American"],
    ratings: "4.4",
  },
  {
    name: "Domino's Pizza",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/2c56d564-222a-4893-bbba-25c59109bd04_217026.JPG",
    cuisine: ["Pizza", "Fast Food"],
    ratings: "4.6",
  },
];


const RestCard = ({image, name, cuisine, ratings}) =>{
 
    return (
        <div className="card">
            <img src= {image}/ >
            <h2>{name}</h2>
            <h3>{cuisine.join(" , ")}</h3>
            <h4>{ratings}</h4>
        </div>
    );
}

const Body = () => {
  return (
    <div className="restoCard">
      {restList.map((rest, index) => {
        return <RestCard {...rest} />;
      })}
    </div>
  );
};


const Footer = () =>{
    return (
        <h3>footer</h3>
    )
}


const AppLayOut = () =>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
 