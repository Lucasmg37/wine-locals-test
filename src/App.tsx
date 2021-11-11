import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './routes';

import Global from './styles/global';
import Theme from './styles/theme';
import { initData } from './utils/dataMananger';

const App: React.FC = () => {
  useEffect(() => {
    initData();
  }, []);

  return (
    <>
      <Global />
      <ThemeProvider theme={Theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
