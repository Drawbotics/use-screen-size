import sv from '@drawbotics/drylus-style-vars';


function _parseMaxWidth(mediaQuery) {
  const [ , maxWidth ] = mediaQuery.match(/max-width: (\d+)/);
  return parseInt(maxWidth);
}


function _parseMinWidth(mediaQuery) {
  const [ , minWidth ] = mediaQuery.match(/min-width: (\d+)/);
  return parseInt(minWidth);
}


export default function getScreenSize() {
  if (window.innerWidth <= _parseMaxWidth(sv.screenXs)) {
    return 1;
  }
  else if (window.innerWidth <= _parseMaxWidth(sv.screenS)) {
    return 2;
  }
  else if (window.innerWidth <= _parseMaxWidth(sv.screenM)) {
    return 3;
  }
  else if (window.innerWidth <= _parseMaxWidth(sv.screenL)) {
    return 4;
  }
  else if (window.innerWidth <= _parseMaxWidth(sv.screenXl)) {
    return 5;
  }
  else if (window.innerWidth > _parseMinWidth(sv.screenHuge)) {
    return window.innerWidth;
  }
}
