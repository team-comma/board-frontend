export const reset = {
  [`*, *::before, *::after`]: {
    boxSizing: 'border-box',

    '*': {
      margin: 0,
    },

    [`html, body`]: {
      height: '100%',
    },

    body: {
      lineHeight: 1.5,
      '-webkit-font-smoothing': 'antialiased',
    },

    [`img, picture, video, canvas, svg`]: {
      display: 'block',
      maxWidth: '100%',
    },

    [`input, button, textarea, select`]: {
      font: 'inherit',
    },

    [`p, h1, h2, h3, h4, h5, h6`]: {
      overflowWrap: 'break-word',
    },

    ul: {
      listStyleType: 'none',
    },

    [`#root, #__next`]: {
      isolation: 'isolate',
    },

    a: { textDecoration: 'none' },
    'a, button': {
      cursor: 'pointer',
    },
  },
};
