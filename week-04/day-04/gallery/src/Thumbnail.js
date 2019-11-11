import React from 'react';

const style = {
  width: `${100/4}%`
}
function Thumbnail({imageSrc,thumbnailClick }) {
  
  return (
      <img style = {style} className="thumbnail-img" src={imageSrc} onClick={thumbnailClick} alt="WhereIsTheImage"/>
  );
}
export default Thumbnail;