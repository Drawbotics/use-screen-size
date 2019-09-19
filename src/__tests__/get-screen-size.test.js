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

  it('correctly recognises an extra small screen', () => {
    window.innerWidth = SCREEN_XS;

    const screenSize = getScreenSize();
    expect(screenSize).toMatchObject({
      isXs: true,
      isOnlyXs: true,
      isS: false,
      isOnlyS: false,
      isM: false,
      isOnlyM: false,
      isL: false,
      isOnlyL: false,
      isXl: false,
      isOnlyXl: false,
      isHuge: false,
      isOnlyHuge: false,
    });
  });

  it('correctly recognises a small screen', () => {
    window.innerWidth = SCREEN_S;

    const screenSize = getScreenSize();
    expect(screenSize).toMatchObject({
      isXs: true,
      isOnlyXs: false,
      isS: true,
      isOnlyS: true,
      isM: false,
      isOnlyM: false,
      isL: false,
      isOnlyL: false,
      isXl: false,
      isOnlyXl: false,
      isHuge: false,
      isOnlyHuge: false,
    });
  });

  it('correctly recognises an medium screen', () => {
    window.innerWidth = SCREEN_M;

    const screenSize = getScreenSize();
    expect(screenSize).toMatchObject({
      isXs: true,
      isOnlyXs: false,
      isS: true,
      isOnlyS: false,
      isM: true,
      isOnlyM: true,
      isL: false,
      isOnlyL: false,
      isXl: false,
      isOnlyXl: false,
      isHuge: false,
      isOnlyHuge: false,
    });
  });

  it('correctly recognises a large screen', () => {
    window.innerWidth = SCREEN_L;

    const screenSize = getScreenSize();
    expect(screenSize).toMatchObject({
      isXs: true,
      isOnlyXs: false,
      isS: true,
      isOnlyS: false,
      isM: true,
      isOnlyM: false,
      isL: true,
      isOnlyL: true,
      isXl: false,
      isOnlyXl: false,
      isHuge: false,
      isOnlyHuge: false,
    });
  });

  it('correctly recognises an extra large screen', () => {
    window.innerWidth = SCREEN_XL;

    const screenSize = getScreenSize();
    expect(screenSize).toMatchObject({
      isXs: true,
      isOnlyXs: false,
      isS: true,
      isOnlyS: false,
      isM: true,
      isOnlyM: false,
      isL: true,
      isOnlyL: false,
      isXl: true,
      isOnlyXl: true,
      isHuge: false,
      isOnlyHuge: false,
    });
  });
  
  it('correctly recognises a huge screen', () => {
    window.innerWidth = SCREEN_HUGE;

    const screenSize = getScreenSize();
    expect(screenSize).toMatchObject({
      isXs: true,
      isOnlyXs: false,
      isS: true,
      isOnlyS: false,
      isM: true,
      isOnlyM: false,
      isL: true,
      isOnlyL: false,
      isXl: true,
      isOnlyXl: false,
      isHuge: true,
      isOnlyHuge: true,
    });
  });

  it('it recognises a miniscule screen as only XS', () => {
    window.innerWidth = SCREEN_MINISCULE;

    const screenSize = getScreenSize();
    expect(screenSize).toMatchObject({
      isXs: true,
      isOnlyXs: true,
      isS: false,
      isOnlyS: false,
      isM: false,
      isOnlyM: false,
      isL: false,
      isOnlyL: false,
      isXl: false,
      isOnlyXl: false,
      isHuge: false,
      isOnlyHuge: false,
    });
  });

  it('it recognises a massive screen as only Huge', () => {
    window.innerWidth = SCREEN_MASSIVE;

    const screenSize = getScreenSize();
    expect(screenSize).toMatchObject({
      isXs: true,
      isOnlyXs: false,
      isS: true,
      isOnlyS: false,
      isM: true,
      isOnlyM: false,
      isL: true,
      isOnlyL: false,
      isXl: true,
      isOnlyXl: false,
      isHuge: true,
      isOnlyHuge: true,
    });
  });
});
