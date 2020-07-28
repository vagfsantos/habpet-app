import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Habit } from './habits';

const initialState: Habit = {
  id: null,
  habitName: null,
  petName: null,
  pet: null,
  timesPerWeek: null,
};

const NewHabitStore = createSlice({
  name: 'new-habit',
  initialState,
  reducers: {
    updateNewHabit: (state, action: PayloadAction<Partial<Habit>>) => ({
      ...state,
      ...action.payload,
    }),

    newHabitCreated: () => initialState,
  },
});

export default NewHabitStore;
