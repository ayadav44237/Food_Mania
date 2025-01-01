import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { cardImgUrl } from "./confiig";
import Shimeer from "./Shimmer";


const RestaurantMenu = () => {
    const { id } = useParams();
   
    
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getRestaurantData();
  }, [])
  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7605545&lng=83.3731675&restaurantId="+id
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json);
  }

  const RestaurantInfo = restaurant?.data?.cards?.[2]?.card?.card?.info;

  const MenuInfo =
    restaurant?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards;
  console.log(MenuInfo);


  const MenuList = MenuInfo
    ? MenuInfo.map((item) => ({
        id: item.card?.info?.id, 
        name: item.card?.info?.name,
      })).filter((item) => item.name)
    : [];
  return (MenuList.length==0)?<Shimeer/>: (
    <> <div className="menu"> 
      <div className="res_name"> 
        <li>
          <img
            className="cardimg"
            src={cardImgUrl + RestaurantInfo?.cloudinaryImageId}
            alt="No image found"
          />
        </li>
        <li>{RestaurantInfo?.name}</li>
        <li>{RestaurantInfo?.costForTwoMessage}</li>
        <li>{RestaurantInfo?.cuisines.join(",")}</li>
        <li>{RestaurantInfo?.areaName}</li>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {MenuList.map((item) => (
            <li  key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
};
export default RestaurantMenu;