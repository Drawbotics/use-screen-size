import sv from '@drawbotics/drylus-style-vars';


function _parseMaxWidth(mediaQuery) {
  const [ , maxWidth ] = mediaQuery.match(/max-width: (\d+)/);
  return parseInt(maxWidth);
}


const breakpoints = [
  _parseMaxWidth(sv.screenXs),
  _parseMaxWidth(sv.screenS),
  _parseMaxWidth(sv.screenM),
  _parseMaxWidth(sv.screenL),
  _parseMaxWidth(sv.screenXl),
];


export default function getScreenSize() {
  const width = window.innerWidth;

  for (let i = 0; i < breakpoints.length; i++) {
    if (width <= breakpoints[i]) {
      return i + 1;
    }
  }

  return width;
}
