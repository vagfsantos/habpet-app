import { combineReducers } from '@reduxjs/toolkit';
import NewHabitStore from './slices/new-habit';
import HabitsStore from './slices/habits';

const rootReducer = combineReducers({
  newHabit: NewHabitStore.reducer,
  habits: HabitsStore.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
