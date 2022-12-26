import { styled } from 'stitches.config';
import { colors, sizes } from 'src/styles';

export const AuthLayout = styled('div', {
  width: '100%',
  height: '100vh',
  margin: 'auto',
  padding: '80px 720px',
});

export const AuthHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const AuthTitle = styled('p', {
  fontSize: sizes.fontSizes.x6,
  fontWeight: 'bold',
  marginBottom: sizes.space.x2,
});

export const AuthDescription = styled('p', {
  fontSize: sizes.fontSizes.x4,
  margin: sizes.space.x0,
});

export const AuthForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: sizes.space.x2,
});

export const AuthBottom = styled('div', {
  marginTop: sizes.space.x9,
  variants: {
    display: {
      flex: { display: 'flex' },
    },
    flexDirection: {
      row: { flexDirection: 'row' },
    },
    justifyContent: {
      spaceBetween: { justifyContent: 'space-between' },
    },
    alignItem: {
      center: { alignContent: 'center' },
    },
  },
});

export const AuthLink = styled('a', {
  fontSize: sizes.fontSizes.x3,
  fontWeight: 'bold',
  textDecorationLine: 'none',
  color: 'inherit',
  variants: {
    marginTop: {
      x3: { marginTop: sizes.fontSizes.x3 },
    },
    marginLeft: {
      x1: { marginLeft: sizes.space.x1 },
    },
  },
});

export const AuthErrorMessage = styled('span', {
  fontSize: sizes.fontSizes.x3,
  color: colors.red[100],
});
