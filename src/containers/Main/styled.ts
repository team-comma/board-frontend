import { styled } from 'stitches.config';

export const MainLayout = styled('div', {
  width: '100%',
  height: '100%',
  margin: 'auto',
  padding: '10px 7px',
  maxWidth: '450px',
});

export const MainHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  maxHeight: '100px',
  marginTop: '10px',
});

export const MainTitle = styled('h1', {
  fontSize: '$x6',
});

export const LinkLogin = styled('a', {
  fontSize: '12px',
  cursor: 'pointer',
});

export const CategoryLayout = styled('div', {
  display: 'flex',
});

export const Category = styled('div', {
  marginRight: '0.35rem',
  fontSize: '$x4',
  fontWeight: '300',
  letterSpacing: '-0.3px',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
    opacity: '1.2',
  },
  '&:active': {
    transform: 'scale(0.99)',
    opacity: '0.95',
  },
});

export const InputContainer = styled('div', {
  marginTop: '20px',
  paddingTop: '20px',
  borderTop: '1px solid #d8d8d8',
});

export const MainContentLayout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  marginTop: '45px',
  padding: '2px 10px',
  backgroundColor: 'yellow',
});

export const ContentGenerateLayout = styled('div', {
  position: 'fixed',
  width: '100%',
  bottom: '0',
  marginBottom: '2rem',
});
