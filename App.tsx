import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { loadAsync } from 'expo-font';
import { NativeRouter, Route } from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Login from './src/features/auth/screens/Login';
import Routes from './src/enums/routes';
import Fonts from './src/theme/fonts';
import CreateHabit from './src/features/new-habit/screens/CreateHabit';
import AsyncStore from './src/store/async-store';
import Habits from './src/features/habits/screens/Habits';
import Dashboard from './src/features/habits/screens/Dashboard';

const App: React.FC = () => {
  const [store, setStore] = useState();
  const [isLoadingFonts, setFontLoading] = useState(true);

  useEffect(() => {
    AsyncStore.getStore().then(setStore);
  }, []);

  loadAsync({
    [Fonts.PRIMARY]: require('./src/assets/fonts/Baloo-2-Bold.ttf'),
    [Fonts.SECONDARY]: require('./src/assets/fonts/Rubik-Regular.ttf'),
    [Fonts.SECONDARY_BOLD]: require('./src/assets/fonts/Rubik-Bold.ttf'),
  }).then(() => setFontLoading(false));

  if (isLoadingFonts || !store) return null;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeRouter>
          <Route path={Routes.LOGIN} component={Login} exact />
          <Route path={Routes.CREATE_HABIT} component={CreateHabit} exact />
          <Route path={Routes.HABITS} component={Habits} exact />
          <Route path={Routes.DASHBOARD} component={Dashboard} exact />
        </NativeRouter>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
