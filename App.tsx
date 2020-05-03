import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Login from './src/screens/Login';
import Routes from './src/enums/routes';

const App: React.FC = () => (
  <NativeRouter>
    <Route path={Routes.LOGIN} component={Login} />
  </NativeRouter>
);

export default App;
