import { createStitches } from '@stitches/react';

export const { globalCss, getCssText } = createStitches();

export const globalStyles = globalCss({
  'html,body': {
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-tap-highlight-color': 'transparent',
  },
  'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video':
    {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  'article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section':
    {
      display: 'block',
    },
  button: {
    padding: 0,
    margin: 0,
    border: 'none',
    background: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:focus, &:active': {
      outline: 'none',
    },
  },
  body: {
    lineHeight: 1,
  },
  'ol,ul': {
    listStyle: 'none',
  },
  'blockquote,q': {
    quotes: 'none',
  },
  'blockquote:before,blockquote:after,q:before,q:after': {
    content: '',
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
});
