import { useState } from "react";

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
        {
          islogged ? (
          <button onClick={()=>setLoggedIn(false)}>logout</button>
        ) : (
          <button onClick={()=>setLoggedIn(true)}>login</button>)
        }
        
      </div>
    );
  };

  export default Header;