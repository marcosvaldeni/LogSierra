import React from 'react';

import GlobalStyle from './styles/globa';
import AppProvider from './hooks';
// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import ToastContainer from './components/ToastContainer';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
