import { useSyncExternalStore } from 'react';

import getScreenSize from './get-screen-size.js';


const ScreenSizes = {
  XS: 1,
  S: 2,
  M: 3,
  L: 4,
  XL: 5,
};


function subscribe(callback) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}


export default function useScreenSize() {
  const size = useSyncExternalStore(subscribe, getScreenSize);

  return { screenSize: size, ScreenSizes };
}
