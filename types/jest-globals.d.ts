// Extend jest globals for TypeScript
declare global {
  interface Window {
    open: jest.Mock;
  }
  interface Element {
    scrollIntoView: jest.Mock;
  }
}
export {};