import { restaurantsList } from "./confiig";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimeer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "./useOnline";


function filterData(searchInput,resList) {
    const Fdata=resList.filter((res)=>res?.info?.name?.toLowerCase()?.includes(searchInput?.toLowerCase()));
    return Fdata;
}


const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allResList,setallResList]=useState([]); 
  const [filterResList,setFilterResList]=useState([]);
  



  async function fetchDetails(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.728433&lng=83.440494&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    // console.log(json);
    setFilterResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setallResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}


  useEffect(()=>{
    // console.log("UseEffect is being Called")
    fetchDetails();
  },[])
  console.log("render") 

  const isOnline=useOnline();
  if(!isOnline){
    return<><h1>You are onfline kindly connect with the network</h1></>
  }

  return (allResList.length==0)?<Shimeer/> :(
    <>
      <div className="my-5 p-5 bg-pink-50">
        <input
        className="bg-green-200 rounded-sm p-1"
          type="search"
          placeholder="search here"
        
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button className="bg-cyan-600 rounded-md p-1" onClick={() => {
           const data=filterData(searchInput,allResList);
           setFilterResList(data);

        }}>Search</button>
      </div>

      

      <div className="flex flex-wrap">
          
         
          { filterResList.length===0?(<h1>No Restaurant Found, Search Again</h1>):filterResList.map((restaurant) => {
          return (
            <Link className="link" to={"/restaurant/"+restaurant.info.id}
            key={restaurant.info.id}>
            <RestaurantCard {...restaurant.info}   />
            </Link>
          );
            })}
        
      </div>
    </>
  );
};

export default Body;
