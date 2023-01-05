import { colors, sizes } from 'src/styles';
import { styled } from 'stitches.config';

export const InputLabel = styled('label', {
  fontSize: '13.5px',
  marginTop: sizes.space.x8,
  paddingBottom: sizes.space.x2,
});

export const ErrorMessage = styled('span', {
  fontSize: sizes.fontSizes.x3,
  color: colors.red[100],
});

export const InputElements = styled('input', {
  width: '100%',
  variants: {
    width: {
      x80: { width: sizes.space.x80 },
    },
    marginTop: {
      x2: { marginTop: sizes.space.x2 },
    },
  },
  height: sizes.space.x10,
  padding: sizes.space.x2,
  borderRadius: sizes.space.x2,
  outline: 'none',
  border: `1px solid ${colors.gray[100]}`,
  '&:focus': {
    borderColor: colors.mint[100],
  },
  '&:hover': {
    borderColor: colors.mint[100],
    transition: 'all 0.3s ease-in-out',
  },
  '&::placeholder': {
    color: colors.gray[100],
  },
});
