export type BreakpointsType = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

// Create the breakpoints object
export const BREAKPOINTS: BreakpointsType = {
  xs: 0, // extra small devices (phones)
  sm: 480, // small devices (tablets)
  md: 768, // medium devices (desktops)
  lg: 1024, // large devices (large desktops)
  xl: 1280, // extra large devices
};

// Create the media query strings
export const mq = Object.keys(BREAKPOINTS).reduce((acc, key) => {
  acc[key as keyof BreakpointsType] = `@media (min-width: ${
    BREAKPOINTS[key as keyof BreakpointsType]
  }px)`;
  return acc;
}, {} as Record<keyof BreakpointsType, string>);
