import { NewHabit } from '@domain/onboarding/ui/screen/NewHabit';
import { Home } from './ui/screen/Home';

export enum OnboardingRoutes {
  HOME = '/onboarding/home',
  NEW_HABIT = '/onboarding/new-habit',
}

export const onboardingRoutes = [
  {
    path: OnboardingRoutes.HOME,
    component: Home,
  },
  {
    path: OnboardingRoutes.NEW_HABIT,
    component: NewHabit,
  },
];
