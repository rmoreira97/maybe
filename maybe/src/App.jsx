import React from 'react';
import SVGIcon from './SVGIcon';
import ImageComponent from './ImageComponent';
import ArtSketch from './ArtSketch';

const App = () => {
  return (
    <div className="app">
      <SVGIcon src="path_to_your_svg.svg" alt="SVG Icon" />
      <ImageComponent src="path_to_your_image.jpg" alt="Art Image" />
      <ArtSketch />
    </div>
  );
};

export default App;
