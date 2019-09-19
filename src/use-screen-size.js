import { useState, useEffect } from 'react';

import getScreenSize from './get-screen-size';


export default function useScreenSize() {
  const [ size, setSize ] = useState({ screenSize: getScreenSize() });

  useEffect(() => {
    const handleResize = () => {
      setSize({ screenSize: getScreenSize() });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}
