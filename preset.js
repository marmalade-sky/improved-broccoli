import tokens from './transformed-tokens.json';

const createTailwindPreset = (tokens) => {
  return {
    theme: {
      extend: {
        colors: {
          ...tokens.colors,
        }
      }
    }
  }
}

export const preset = createTailwindPreset(tokens);