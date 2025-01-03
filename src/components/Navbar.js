import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UseContextMbd from "./Utils/UseContextMbd";

const Navbar = () => {
  const[isLoggedIn, setIsLoggedIn]=useState(true);
  const{user}=useContext(UseContextMbd)
    return (
      
      <div className="flex  bg-pink-50 justify-between shadow-xl">
        <a href="/">
          <img
            className="w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Er_TJMy8fqh6NzqtBrZK1UJn4YwGuFEcXA&s"
            alt="No image found"
          />
        </a>
        <ul className="flex">
          <li className="p-2 m-2"><Link to={"/"}>Home</Link></li>
          <li className="p-2 m-2"><Link to={"/about"}>About us</Link></li>
          <li className="p-2 m-2"><Link to={"/contact"}>Contact</Link></li>
          <li className="p-2 m-2"><Link to={"/instamart"}>instamart</Link></li>

          <li className="p-2 m-2">cart</li>
        </ul>
        <p>{user.name}</p>
       {isLoggedIn?(<button onClick={()=>{
          setIsLoggedIn(false);
       }}>Login</button>):(<button onClick={()=>{
        setIsLoggedIn(true);
       }}>Logout</button>)}

      </div>
    );
  };
  export default Navbar;