import React, { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import { SectionHeader } from '../atoms/SectionHeader';
import gsap from 'gsap';
import SplitText from '../../utils/Split3.min';
import cn from 'classnames';
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from 'react-icons/fa';

import './Footer.scss';

const social = [
  {
    path: 'https://www.facebook.com/profile.php?id=100010857344034',
    icon: <FaFacebookF />,
  },
  {
    path: 'https://twitter.com/imkm1018',
    icon: <FaTwitter />,
  },
  {
    path: 'https://github.com/Imkn1018',
    icon: <FaGithubAlt />,
  },
];

export const Footer = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  // text animation
  useEffect(() => {
    if (reveal) {
      const split = new SplitText('#location-text', {
        type: 'lines',
        linesClass: 'lineChildren',
      });
      const splitParent = new SplitText('#location-text', {
        type: 'lines',
        linesClass: 'lineParent',
      });
      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          // opacity: 1,
          stagger: 0.1,
          ease: 'power2',
        }
      );
    }
  }, [reveal]);

  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Made in" />

      <h1
        className={cn('location', { 'is-reveal': reveal })}
        id="location-text"
        ref={ref}
      >
        Kentaro Imai
      </h1>

      <div className="social-wrapper">
        {social.map((socialItem, i) => (
          <div as="span" key={i} className="social-item">
            <a href={socialItem.path} target="_blank">
              {socialItem.icon}
            </a>
          </div>
        ))}
      </div>

      <h3 className="copyright">Copyright by {new Date().getFullYear()}</h3>
    </section>
  );
};
