import React from 'react';
import { cache } from 'emotion';
import { CacheProvider, css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import htmlCss from './html.css';
import resetCss from './reset.css';

export const theme = {};

const Theme = props => (
  <CacheProvider value={cache}>
    <Global
      styles={css`
        ${resetCss} ${htmlCss}
      `}
    />
    <ThemeProvider theme={theme} {...props} />
  </CacheProvider>
);

export default Theme;
