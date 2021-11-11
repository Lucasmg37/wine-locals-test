import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './routes';

import Global from './styles/global';
import Theme from './styles/theme';
import { initData } from './utils/dataMananger';

const App: React.FC = () => {
  const [finishInit, setFinishInit] = useState(false);

  useEffect(() => {
    initData();
    setFinishInit(true);
  }, []);

  if (!finishInit) {
    return null;
  }

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
