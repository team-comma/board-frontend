import { colors, sizes } from 'src/styles';
import { styled } from 'stitches.config';

export const ButtonElement = styled('button', {
  cursor: 'pointer',
  variants: {
    bgColor: {
      white: { backgroundColor: 'White' },
      mint: { backgroundColor: colors.mint100 },
      gray: { backgroundColor: colors.gray100 },
    },
    color: {
      white: { color: 'White' },
      mint: { color: colors.mint100 },
    },
    width: {
      x16: { width: sizes.space.x16 },
      x20: { width: sizes.space.x20 },
      x28: { width: sizes.space.x28 },
      x80: { width: sizes.space.x80 },
    },
    height: {
      x10: { height: sizes.space.x10 },
      x11: { height: sizes.space.x11 },
    },
    borderRadius: {
      x1: { borderRadius: sizes.space.x1 },
      x2: { borderRadius: sizes.space.x2 },
      x14: { borderRadius: sizes.space.x14 },
    },
    border: {
      none: { border: 'none' },
      mint: { border: `2px solid ${colors.mint100}` },
    },
    fontWeight: {
      bold: { fontWeight: 'bold' },
    },
    marginLeft: {
      x3: { marginLeft: sizes.space.x3 },
      x37: { marginLeft: sizes.space.x37 },
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
