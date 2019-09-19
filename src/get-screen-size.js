import sv from '@drawbotics/drylus-style-vars';


function _parseMaxWidth(mediaQuery) {
  const [ , maxWidth ] = mediaQuery.match(/max-width: (\d+)/);
  return parseInt(maxWidth);
}


function _parseMinWidth(mediaQuery) {
  const [ , minWidth ] = mediaQuery.match(/min-width: (\d+)/);
  return parseInt(minWidth);
}


function _isHuge() {
  return window.innerWidth > _parseMaxWidth(sv.screenXl);
}


function _isOnlyHuge() {
  return window.innerWidth > _parseMinWidth(sv.screenHuge);
}


function _isXl() {
  return window.innerWidth > _parseMaxWidth(sv.screenL);
}


function _isOnlyXl() {
  return _isXl() && ! _isHuge();
}


function _isL() {
  return window.innerWidth > _parseMaxWidth(sv.screenM);
}


function _isOnlyL() {
  return _isL() && ! _isXl();
}


function _isM() {
  return window.innerWidth > _parseMaxWidth(sv.screenS);
}


function _isOnlyM() {
  return _isM() && ! _isL();
}


function _isS() {
  return window.innerWidth > _parseMaxWidth(sv.screenXs);
}


function _isOnlyS() {
  return _isS() && ! _isM();
}


function _isXs() {
  return true;
}


function _isOnlyXs() {
  return window.innerWidth <= _parseMaxWidth(sv.screenXs);
}


export default function getScreenSize() {
  return {
    isXs: _isXs(),
    isOnlyXs: _isOnlyXs(),
    isS: _isS(),
    isOnlyS: _isOnlyS(),
    isM: _isM(),
    isOnlyM: _isOnlyM(),
    isL: _isL(),
    isOnlyL: _isOnlyL(),
    isXl: _isXl(),
    isOnlyXl: _isOnlyXl(),
    isHuge: _isHuge(),
    isOnlyHuge: _isOnlyHuge(),
  };
}
