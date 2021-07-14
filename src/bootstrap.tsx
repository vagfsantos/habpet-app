import React from "react";
import * as Font from "expo-font";
import { NativeRouter, Route } from "react-router-native";
import { OnboardingRoutes, onboardingRoutes } from "./domain/onboarding/routes";

const loadFonts = async () =>
  Font.loadAsync({
    baloo: require("./../assets/fonts/Baloo2ExtraBold.ttf"),
    "rubik-bold": require("./../assets/fonts/RubikBold.ttf"),
    rubik: require("./../assets/fonts/RubikRegular.ttf"),
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
