import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import useScreenSize from '../use-screen-size';


const TestComponent = () => {
  const { screenSize } = useScreenSize();
  
  if (screenSize.isHuge) {
    return <div>isHuge</div>;
  }
  else if (screenSize.isXl) {
    return <div>isXl</div>;
  }
  else if (screenSize.isL) {
    return <div>isL</div>;
  }
  else if (screenSize.isM) {
    return <div>isM</div>;
  }
  else if (screenSize.isS) {
    return <div>isS</div>;
  }
  else if (screenSize.isXs) {
    return <div>isXs</div>;
  }
};


describe('use-screen-size', () => {
  let container;
  let originalWidth;

  const SCREEN_XS = 320;
  const SCREEN_S = 375;
  const SCREEN_M = 425;
  const SCREEN_L = 768;
  const SCREEN_XL = 1024;
  const SCREEN_HUGE = 1200;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    originalWidth = window.innerWidth;
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    window.innerWidth = originalWidth;
  });

  it('detects if the screen is extra small', () => {
    window.innerWidth = SCREEN_XS;

    act(() => { ReactDOM.render(<TestComponent />, container) });

    const rootDiv = container.querySelector('div');
    expect(rootDiv.textContent).toBe('isXs');
  });

  it('detects if the screen is small', () => {
    window.innerWidth = SCREEN_S;

    act(() => { ReactDOM.render(<TestComponent />, container) });

    const rootDiv = container.querySelector('div');
    expect(rootDiv.textContent).toBe('isS');
  });

  it('detects if the screen is medium', () => {
    window.innerWidth = SCREEN_M;

    act(() => { ReactDOM.render(<TestComponent />, container) });

    const rootDiv = container.querySelector('div');
    expect(rootDiv.textContent).toBe('isM');
  });

  it('detects if the screen is large', () => {
    window.innerWidth = SCREEN_L;

    act(() => { ReactDOM.render(<TestComponent />, container) });

    const rootDiv = container.querySelector('div');
    expect(rootDiv.textContent).toBe('isL');
  });

  it('detects if the screen is extra large', () => {
    window.innerWidth = SCREEN_XL;

    act(() => { ReactDOM.render(<TestComponent />, container) });

    const rootDiv = container.querySelector('div');
    expect(rootDiv.textContent).toBe('isXl');
  });

  it('detects if the screen is huge', () => {
    window.innerWidth = SCREEN_HUGE;

    act(() => { ReactDOM.render(<TestComponent />, container) });

    const rootDiv = container.querySelector('div');
    expect(rootDiv.textContent).toBe('isHuge');
  });
});
