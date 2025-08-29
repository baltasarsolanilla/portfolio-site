import '@testing-library/jest-dom'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveClass(...classNames: string[]): R
      toBeVisible(): R
      toHaveAttribute(attr: string, value?: string): R
      toHaveTextContent(text: string | RegExp): R
      toHaveValue(value: string | string[] | number): R
      toBeChecked(): R
      toBeDisabled(): R
      toBeEmpty(): R
      toBeEmptyDOMElement(): R
      toBePartiallyChecked(): R
      toBeRequired(): R
      toBeValid(): R
      toBeInvalid(): R
      toHaveAccessibleDescription(description?: string | RegExp): R
      toHaveAccessibleName(name?: string | RegExp): R
      toHaveDisplayValue(value: string | RegExp | (string | RegExp)[]): R
      toHaveFormValues(expectedValues: Record<string, any>): R
      toHaveStyle(css: string | Record<string, any>): R
      toHaveFocus(): R
      toBeInTheDocument(): R
      toBeEmpty(): R
      toBeEmptyDOMElement(): R
      toBePartiallyChecked(): R
      toBeRequired(): R
      toBeValid(): R
      toBeInvalid(): R
      toHaveAccessibleDescription(description?: string | RegExp): R
      toHaveAccessibleName(name?: string | RegExp): R
      toHaveDisplayValue(value: string | RegExp | (string | RegExp)[]): R
      toHaveFormValues(expectedValues: Record<string, any>): R
      toHaveStyle(css: string | Record<string, any>): R
      toHaveFocus(): R
    }
  }
}

export {}
