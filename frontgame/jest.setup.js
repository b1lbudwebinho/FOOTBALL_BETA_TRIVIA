import '@testing-library/jest-dom/extend-expect';
import matchMediaPolyfill from 'match-media-mock';
import 'jest-fetch-mock';

matchMediaPolyfill(window);

fetchMock.enableMocks();    // Fix for mocking errors.

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated, but required for compatibility
    removeListener: jest.fn(), // Deprecated, but required for compatibility
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
  