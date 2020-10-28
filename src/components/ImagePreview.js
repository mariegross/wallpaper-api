import React from "react";
import "./ImagePreview.css";
import { addFavorites } from "./favorites";

export default function ImagePreview({ src, alt, author, id }) {
  return (
    <div className="imageContainer">
      <button className="icon-button" onClick={() => addFavorites(id)}>
        ❤️
      </button>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
