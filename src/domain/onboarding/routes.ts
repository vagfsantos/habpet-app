import { Home } from './ui/screen/Home';

export enum OnboardingRoutes {
  HOME = '/onboarding/home',
  CREATE_HABIT = '/onboarding/create-new-habit',
}

export const onboardingRoutes = [
  {
    path: OnboardingRoutes.HOME,
    component: Home,
  },
];
