import { RootState } from '../reducers';

const NewHabitSelectors = {
  getHabitName: (state: RootState) => state.newHabit.habitName,
  getPet: (state: RootState) => state.newHabit.pet,
  getPetName: (state: RootState) => state.newHabit.petName,
  getTimesPerWeek: (state: RootState) => state.newHabit.timesPerWeek,
  getNewHabit: (state: RootState) => state.newHabit,
};

export default NewHabitSelectors;
