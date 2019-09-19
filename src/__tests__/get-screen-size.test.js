import getScreenSize from '../get-screen-size';


describe('get-screen-size', () => {
  let originalWidth;

  const SCREEN_MINISCULE = 100;
  const SCREEN_XS = 320;
  const SCREEN_S = 375;
  const SCREEN_M = 425;
  const SCREEN_L = 768;
  const SCREEN_XL = 1024;
  const SCREEN_HUGE = 1200;
  const SCREEN_MASSIVE = 3000;

  beforeAll(() => {
    originalWidth = window.innerWidth;
  });

  afterEach(() => {
    window.innerWidth = originalWidth;
  });

  it('correctly matches an extra small screen', () => {
    window.innerWidth = SCREEN_XS;

    const screenSize = getScreenSize();
    expect(screenSize).toEqual(1);
  });

  it('correctly matches a small screen', () => {
    window.innerWidth = SCREEN_S;

    const screenSize = getScreenSize();
    expect(screenSize).toEqual(2);
  });

  it('correctly matches an medium screen', () => {
    window.innerWidth = SCREEN_M;

    const screenSize = getScreenSize();
    expect(screenSize).toEqual(3);
  });

  it('correctly matches a large screen', () => {
    window.innerWidth = SCREEN_L;

    const screenSize = getScreenSize();
    expect(screenSize).toEqual(4);
  });

  it('correctly matches an extra large screen', () => {
    window.innerWidth = SCREEN_XL;

    const screenSize = getScreenSize();
    expect(screenSize).toEqual(5);
  });
  
  it('correctly matches a huge screen', () => {
    window.innerWidth = SCREEN_HUGE;

    const screenSize = getScreenSize();
    expect(screenSize).toBeGreaterThan(5);
  });

  it('it correctly matches a miniscule screen', () => {
    window.innerWidth = SCREEN_MINISCULE;

    const screenSize = getScreenSize();
    expect(screenSize).toEqual(1);
  });

  it('it matches a massive screen', () => {
    window.innerWidth = SCREEN_MASSIVE;

    const screenSize = getScreenSize();
    expect(screenSize).toBeGreaterThan(5);
  });
});
