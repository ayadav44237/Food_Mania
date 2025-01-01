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
      <ul className="res_name">
        <li className="Restaurant_picture">
          <img
            className="cardimg"
            src={cardImgUrl + cloudinaryImageId}
            alt="No image found"
          />
        </li>
        <div>
          <li><h4>{name}</h4></li>
          <li><h5>{avgRating + " star"}</h5></li>
          <li><h5>{locality}</h5></li>
        </div>
       
      </ul>
    </>
  );
};

export default RestaurantCard;
