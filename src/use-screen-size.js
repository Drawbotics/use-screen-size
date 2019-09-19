import { useState, useEffect } from 'react';

import getScreenSize from './get-screen-size';


const ScreenSizes = {
  XS: 1,
  S: 2,
  M: 3,
  L: 4,
  XL: 5,
};


export default function useScreenSize() {
  const [ size, setSize ] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { screenSize: size, ScreenSizes };
}
