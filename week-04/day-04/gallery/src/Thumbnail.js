import React from 'react';

function Thumbnail({imageSrc,thumbnailClick }) {

  return (
      <img className="thumbnail-img" src={imageSrc} onClick={thumbnailClick} alt="WhereIsTheImage"/>
  );
}
export default Thumbnail;