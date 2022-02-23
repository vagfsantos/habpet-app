import React from 'react';
import {useFonts} from 'expo-font';
import { NativeRouter, Route } from 'react-router-native';
import { OnboardingRoutes, onboardingRoutes } from './domain/onboarding/routes';
import { FontFamilies } from '@design-system/tokens/fonts';

export function Bootstrap() {
  const [isFontsLoaded] = useFonts({
    [FontFamilies.BALOO]: require('./../assets/fonts/Baloo-2ExtraBold.ttf'),
    [FontFamilies.RUBIK_BOLD]: require('./../assets/fonts/Rubik-Bold.ttf'),
    [FontFamilies.RUBIK]: require('./../assets/fonts/Rubik-Regular.ttf'),
  });

  return isFontsLoaded ? (
    <NativeRouter initialEntries={[OnboardingRoutes.HOME]}>
      {onboardingRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact
        />
      ))}
    </NativeRouter>
  ) : null;
}
