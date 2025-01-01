import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const[isLoggedIn, setIsLoggedIn]=useState(true);
    return (
      
      <div className="navbar">
        <a href="/">
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Er_TJMy8fqh6NzqtBrZK1UJn4YwGuFEcXA&s"
            alt="No image found"
          />
        </a>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About us</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/instamart"}>instamart</Link></li>

          <li>cart</li>
        </ul>
        
       {isLoggedIn?(<button onClick={()=>{
          setIsLoggedIn(false);
       }}>Login</button>):(<button onClick={()=>{
        setIsLoggedIn(true);
       }}>Logout</button>)}

      </div>
    );
  };
  export default Navbar;