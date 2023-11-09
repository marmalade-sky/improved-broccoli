import tokens from './transformed-tokens.json';

const createTailwindPreset = (tokens) => {
  return {
    theme: {
      extend: {
        colors: {
          //...tokens.colors,
          "wild": {
            "500": {
              "value": "#06b6d4",
              "type": "color"
            }
          },
          "wet": {
            "500": {
              "value": "#ec4899",
              "type": "color"
            }
          }
        }
      }
    }
  }
}

export const preset = createTailwindPreset(tokens);

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         ...tokens.colors,
//         wild: {
//           500: '#85d7ff',
//           DEFAULT: '#1fb6ff',
//           dark: '#009eeb',
//         },
//         wet: {
//           500: '#ff7ce5',
//           DEFAULT: '#ff49db',
//           dark: '#ff16d1',
//         },
//         gray: {
//           darkest: '#1f2d3d',
//           dark: '#3c4858',
//           DEFAULT: '#c0ccda',
//           light: '#e0e6ed',
//           lightest: '#f9fafc',
//         }
//       },
//     } 
//   }
// }