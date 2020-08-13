import { createMuiTheme } from '@material-ui/core/styles';

// import theme from '../theme';

// eslint-disable-next-line no-underscore-dangle
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

export default createMuiTheme({
  overrides: {
    MuiListItem: {
      root: {
        borderRadius: '3px',

        '&$selected': {
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
        },

        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },

        '&:focus': {
          outline: 'none',
        },
      },
      gutters: {
        paddingLeft: '2px',
        paddingRight: '2px',
      },
    },
    MuiList: {
      root: {
        width: '250px',
      },
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#026aa7',
      light: 'rgb(71, 145, 219)',
      dark: 'rgb(17, 82, 147)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(220, 0, 78)',
      light: 'rgb(227, 51, 113)',
      dark: 'rgb(154, 0, 54)',
      contrastText: '#fff',
    },
  },
  typography: {
    htmlFontSize: 15,
    // fontFamily: theme.font.family.main,
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      // fontFamily: theme.font.family.main,
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: '18px',
      letterSpacing: '0.5px',
      textTransform: 'none',
    },
  },
  zIndex: {
    mobileStepper: 1,
    appBar: 1,
    drawer: 10,
    modal: 50,
    snackbar: 1,
    tooltip: 10,
  },
});
