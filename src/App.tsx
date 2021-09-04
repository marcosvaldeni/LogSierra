import React from 'react';

import GlobalStyle from './styles/globa';
import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyle />
    </>
  );
};

export default App;
