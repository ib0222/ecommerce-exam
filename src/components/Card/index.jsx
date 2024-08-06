import React, { useContext } from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { CardContext } from "../../context/CardContext";

const Card = (({id,image,title,price}) => {
  const { favorites, setFavorites,wishlist,setWishlist } = useContext(CardContext);

  const handleFavorite = () => {
    const foundIndex = favorites.findIndex((item) => item.id === id);
    if (foundIndex === -1) {
      setFavorites([...favorites, { id, image, title, price }]);
    } else {
      setFavorites(favorites.filter((item) => item.id !== id));
    }
  };
  const handleWishlist = () => {
    const foundIndex = wishlist.findIndex((item) => item.id === id);
    if (foundIndex === -1) {
      setWishlist([...wishlist, { id, image, title, price }]);
    } else {
      setWishlist(wishlist.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="w-full border group relative">
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
        />
      </div>
      <div className="text-center text-balance">
        <Link to="productpage">
        {title}
        </Link>
      </div>
      <div className="text-center mt-2 text-red-500">
        ${price} <span className="line-through ml-2 text-gray-400">$590</span>
      </div>
      <button className="bg-red-500 text-white w-full py-2 mt-4 opacity-0 hover:bg-red-300 ease-in-out group-hover:opacity-100 transition-opacity duration-300" onClick={handleWishlist}>
        Add To Cart
      </button>
      <button
        className="bg-white p-1 rounded-full absolute right-3 top-3 bg-transparent"
        onClick={handleFavorite}
      >
        {favorites.findIndex((item) => item.id === id) !== -1 ? (
          <IoMdHeart className="text-red-700" size={"30px"}/>
        ) : (
          <IoIosHeartEmpty className="text-red-700 " size={"30px"}/>
        )}
      </button>
    </div>
  );
});

export default Card;
