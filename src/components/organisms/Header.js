import React, { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import SplitText from '../../utils/Split3.min.js';

import './Header.scss';

export const Header = () => {
  useEffect(() => {
    const split = new SplitText('#header-text, #header-content', {
      type: 'lines',
      linesClass: 'lineChildren',
    });

    const splitParent = new SplitText('#header-text, #header-content', {
      type: 'lines',
      linesClass: 'lineParent',
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });
  }, []);

  return (
    <section className="header-container" data-scroll-section>
      {/* <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul> */}
      <h1 id="header-text">Create Emotion</h1>
      <h3 id="header-content">感情を動かすデザインの創造</h3>
    </section>
  );
};
