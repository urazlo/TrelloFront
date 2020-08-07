import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';

const MaterialProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </MuiThemeProvider>
);

MaterialProvider.propTypes = {
  children: PropTypes.node,
};

MaterialProvider.defaultProps = {
  children: null,
};

export default memo(MaterialProvider);
