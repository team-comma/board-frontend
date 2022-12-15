import { colors, sizes } from 'src/styles';
import { styled } from 'stitches.config';

export const ButtonElement = styled('button', {
  cursor: 'pointer',
  variants: {
    bgColor: {
      mint: { backgroundColor: colors.mint100 },
      gray: { backgroundColor: colors.gray100 },
    },
    color: {
      white: { color: 'White' },
    },
    width: {
      x20: { width: sizes.space.x20 },
      x26: { width: sizes.space.x26 },
      x80: { width: sizes.space.x80 },
    },
    height: {
      x12: { height: sizes.space.x12 },
    },
    borderRadius: {
      x1: { borderRadius: sizes.space.x1 },
      x2: { borderRadius: sizes.space.x2 },
      x14: { borderRadius: sizes.space.x14 },
    },
    border: {
      none: { border: 'none' },
    },
    fontWeight: {
      bold: { fontWeight: 'bold' },
    },
    hover: {
      mintHover: {
        '&:hover': {
          backgroundColor: colors.mint200,
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
  },
});
