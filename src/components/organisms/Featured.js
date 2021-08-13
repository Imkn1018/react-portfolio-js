import React from 'react';
import photos from '../../data/Featured';
import './Featured.scss';

export const Featured = () => {
  const [firstImage, secondImage, thirdImage] = photos;
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>Kentaro</h6>
        <img src={firstImage} data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>Imai</h6>
        <img src={secondImage} data-scroll />
      </div>
    </section>
  );
};
