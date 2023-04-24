import React from "react";

const FavoriteButton = ({ favorited, favoritesCount }) => {
  return (
    <>
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart"></i>
        &nbsp; {`${favorited ? "Unfavorite" : "Favorite"} article `} <span className="counter">({favoritesCount})</span>
      </button>
    </>
  );
};

export default FavoriteButton;
