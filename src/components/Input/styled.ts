import { colors, sizes } from 'src/styles';
import { styled } from 'stitches.config';

export const InputLabel = styled('label', {
  fontSize: sizes.fontSizes.x4,
  marginTop: sizes.space.x8,
  paddingBottom: sizes.space.x2,
});

export const InputElements = styled('input', {
  variants: {
    width: {
      x80: { width: sizes.space.x80 },
    },
    marginTop: {
      x2: { marginTop: sizes.space.x2 },
    },
  },
  height: sizes.space.x11,
  padding: sizes.space.x2,
  borderRadius: sizes.space.x2,
  outline: 'none',
  border: `1px solid ${colors.gray100}`,
  '&:focus': {
    borderColor: colors.mint100,
  },
  '&:hover': {
    borderColor: colors.mint100,
    transition: 'all 0.3s ease-in-out',
  },
  '&::placeholder': {
    color: colors.gray100,
  },
});
