import { colors } from 'src/styles';
import { styled } from 'stitches.config';

export const PostContainer = styled('div', {
  width: '100%',
  height: '100%',
  margin: 'auto',
  padding: '20px 0',
  maxWidth: '425px',
  marginTop: '25px',
});

export const PostTable = styled('table', {
  width: '100%',
});

export const Private = styled('p', {
  fontWeight: '500',
  marginTop: '40px',
  fontSize: '12.5px',
});

export const PostFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const ToggleButton = styled('button', {
  width: '70px',
  height: '30px',
  borderRadius: '30px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  marginBottom: '25px',

  variants: {
    toggle: {
      true: {
        backgroundColor: colors.skyblue[100],
      },
      false: {
        backgroundColor: 'none',
      },
    },
  },
});

export const ButtonCircle = styled('div', {
  backgroundColor: 'white',
  width: '18px',
  height: '18px',
  borderRadius: '50px',
  transition: 'all 0.3s ease-in-out',

  variants: {
    toggle: {
      true: {
        transform: 'translateX(40px)',
      },
      false: {
        transform: 'translateX(0px)',
      },
    },
  },
});
