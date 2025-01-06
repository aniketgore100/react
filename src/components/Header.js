import { useState } from "react";
import { Link } from "react-router-dom";
import Status from "../Utils/Status";
import "./header.css"
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
  
  const [islogged, setLoggedIn] = useState(false);
  const isOnline = Status();


  return (
    <div className="Header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/instamart"><li>Instamart</li></Link>
        </ul>
      </div>
      <div className="status">
      <h4>{isOnline? '✅' : '🔴'}</h4>
      {islogged ? (
        <button onClick={() => setLoggedIn(false)}>logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>login</button>
      )}
      </div>
    </div>
  );
};

export default Header;
