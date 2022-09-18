import type { ReactTestInstance } from 'react-test-renderer';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

declare global {
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<R, T> {
      toBeDisabled(): R;
      toContainElement(element: ReactTestInstance | null | undefined): R;
      toBeEmptyElement(): R;
      toHaveProp(attr: string, value?: unknown): R;
      toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R;
      toBeEnabled(): R;
      toHaveStyle(style: StyleProp<ViewStyle | TextStyle | ImageStyle>): R;

      /** @deprecated This function has been renamed to `toBeEmptyElement`. */
      toBeEmpty(): R;
    }
  }
}
