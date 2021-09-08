import React from 'react';

import GlobalStyle from './styles/globa';
// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import AuthProvider from './context/auth';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
