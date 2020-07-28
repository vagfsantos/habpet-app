import { RootState } from '../reducers';

const HabitsSelectors = {
  getHabits: (state: RootState) => state.habits,
};

export default HabitsSelectors;
