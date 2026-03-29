import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious}>Previous</button>
      <img src={images[currentIndex]} alt="carousel" />
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

const App = () => {
  const images = [
    'https://cdn.element.how/wp-content/uploads/2023/07/image_carousel_links_loop.png',
    'https://cdn.element.how/wp-content/uploads/2020/05/elementor_add_html_element_2.png',
    'https://via.placeholder.com/600x400?text=Image+3',
  ];

  return <Carousel images={images} />;
};

export default App;