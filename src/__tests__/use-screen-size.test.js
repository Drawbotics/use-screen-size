import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import useScreenSize from '../use-screen-size';


const TestComponent = () => {
  const { screenSize, ScreenSizes } = useScreenSize();
  
  if (screenSize === ScreenSizes.M) {
    return <div>mediumOnlyContent</div>;
  }
  else if (screenSize >= ScreenSizes.M && screenSize <= ScreenSizes.XL) {
    return <div>betweenMediumAndXLContent</div>;
  }
  else if (screenSize <= ScreenSizes.S) {
    return <div>smallContent</div>;
  }
  else if (screenSize > ScreenSizes.XL) {
    return <div>largerThanHugeContent</div>;
  }
  else {
    return <div>defaultContent</div>
  }
};


describe('use-screen-size', () => {
  let container;
  let originalWidth;

  const SCREEN_XS = 320;
  const SCREEN_S = 375;
  const SCREEN_M = 425;
  const SCREEN_L = 768;
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

  it('renders content for screens smaller and equal to S', () => {
    window.innerWidth = SCREEN_XS;

    act(() => { ReactDOM.render(<TestComponent />, container) });

    const rootDiv = container.querySelector('div');
    expect(rootDiv.textContent).toBe('smallContent');
  });

  it('renders content for screens equal to M size (between S (excl) and M (incl) when size is M', () => {
    window.innerWidth = SCREEN_M;

    act(() => { ReactDOM.render(<TestComponent />, container) });

    const rootDiv = container.querySelector('div');
    expect(rootDiv.textContent).toBe('mediumOnlyContent');
  });

  it('does not render content for screens equal to M size (between S (excl) and M (incl) when size is S', () => {
    window.innerWidth = SCREEN_S;

    act(() => { ReactDOM.render(<TestComponent />, container) });

    const rootDiv = container.querySelector('div');
    expect(rootDiv.textContent).not.toBe('mediumOnlyContent');
  });

  it('renders content between two sizes', () => {
    window.innerWidth = SCREEN_L;

    act(() => { ReactDOM.render(<TestComponent />, container) });

    const rootDiv = container.querySelector('div');
    expect(rootDiv.textContent).toBe('betweenMediumAndXLContent');
  });

  it('renders content for huge screens', () => {
    window.innerWidth = SCREEN_HUGE;

    act(() => { ReactDOM.render(<TestComponent />, container) });

    const rootDiv = container.querySelector('div');
    expect(rootDiv.textContent).toBe('largerThanHugeContent');
  });
});
