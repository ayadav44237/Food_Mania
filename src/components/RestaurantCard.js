import { cardImgUrl } from "./confiig";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  locality,
  cuisines,
}) => {
  // const {cloudinaryImageId,name,avgRating,locality}=restaurant.info

  // console.log(restaurant);

  return (
    <>
       
      <ul className="w-40 h-72 border-2 m-4  border-grey-500 flex">
        <div className="w-full">
        <li className="Restaurant_picture">
          <img
            className="h-40 w-full"
            src={cardImgUrl + cloudinaryImageId}
            alt="No image found"
          />
        </li>
        <div>
          <li><h4>{name}</h4></li>
          <li><h5>{avgRating + " star"}</h5></li>
          <li><h5>{locality}</h5></li>
        </div>
        </div>
      </ul>
     
    </>
  );
};

export default RestaurantCard;
