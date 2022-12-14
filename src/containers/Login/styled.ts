import { styled } from 'stitches.config';
import { sizes } from 'src/styles';

export const HeaderDiv = styled('div', {
  variants: {
    display: {
      flex: { display: 'flex' },
    },
    flexDirection: {
      column: { flexDirection: 'column' },
    },
  },
});

export const LoginTitle = styled('p', {
  variants: {
    title: {
      x6: { fontSize: sizes.fontSizes.x6 },
    },
    fontWeight: {
      bold: { fontWeight: 'bold' },
    },
  },
});
export const LoginDescription = styled('p', {
  variants: {
    description: {
      x4: { fontSize: sizes.fontSizes.x4 },
    },
    margin: {
      x0: { margin: sizes.space.x0 },
    },
  },
});
export const LoginForm = styled('form', {
  variants: {
    paddingTop: {
      x6: { paddingTop: sizes.space.x6 },
    },
    display: {
      flex: { display: 'flex' },
    },
    flexDirection: {
      column: { flexDirection: 'column' },
    },
  },
});
