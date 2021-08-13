import React from 'react';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <div className="navbar" data-scroll-section>
      <div>menu</div>

      <div className="hide-xs">Flirty Flowers</div>

      <div>cart</div>
    </div>
  );
};
