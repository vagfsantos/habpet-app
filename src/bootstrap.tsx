import React from 'react';
import * as Font from 'expo-font';
import { NativeRouter, Route } from 'react-router-native';
import { OnboardingRoutes, onboardingRoutes } from './domain/onboarding/routes';
import { FontFamilies } from '@design-system/tokens/fonts';

const loadFonts = async () =>
  Font.loadAsync({
    [FontFamilies.BALOO]: require('./../assets/fonts/Baloo2ExtraBold.ttf'),
    [FontFamilies.RUBIK_BOLD]: require('./../assets/fonts/RubikBold.ttf'),
    [FontFamilies.RUBIK]: require('./../assets/fonts/RubikRegular.ttf'),
  });

export async function preload() {
  return Promise.all([loadFonts]);
}

export function Bootstrap() {
  return (
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
  );
}
