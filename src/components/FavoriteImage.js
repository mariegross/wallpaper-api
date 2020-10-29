import React from "react";

export default function FavoriteImage({ photoId }) {
  return (
    <div>
      <img src={`https://source.unsplash.com/${photoId}`} alt="" />
    </div>
  );
}
