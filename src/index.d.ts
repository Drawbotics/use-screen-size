export interface ScreenSizes {
  XS: 1;
  S: 2;
  M: 3;
  L: 4;
  XL: 5;
}

export interface UseScreenSizeResult {
  screenSize: number;
  ScreenSizes: ScreenSizes;
}

export function useScreenSize(): UseScreenSizeResult;
export function getScreenSize(): number;
