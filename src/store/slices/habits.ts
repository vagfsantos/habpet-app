import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Habit {
  id: string,
  habitName: string,
  petName: string,
  pet: string,
  timesPerWeek: number
}

const initialState: Habit[] = [];

const HabitsStore = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    createHabit: (state, action: PayloadAction<Habit>) => [
      ...state,
      action.payload,
    ],
  },
});

export default HabitsStore;
