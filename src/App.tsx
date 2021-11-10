import React from 'react';
import { ThemeProvider } from 'styled-components';
import Places from './pages/Places';
import Global from './styles/global';
import Theme from './styles/theme';

const App: React.FC = () => (
  <>
    <Global />
    <ThemeProvider theme={Theme}>
      <Places />
    </ThemeProvider>
  </>
);

export default App;
