import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewHabit from './NewHabit';
import PetPicking from './PetPicking';
import NewHabitStacks from '../enums/NewHabitStacks';
import PetName from './PetName';
import HabitSchedule from './HabitSchedule';
import HabitCreated from './HabitCreated';

const Stack = createStackNavigator();

const CreateHabit: React.FC = () => (
  <Stack.Navigator initialRouteName={NewHabitStacks.NEW_HABIT}>
    <Stack.Screen
      name={NewHabitStacks.NEW_HABIT}
      component={NewHabit}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={NewHabitStacks.PET_PICKING}
      component={PetPicking}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={NewHabitStacks.PET_NAME}
      component={PetName}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={NewHabitStacks.HABIT_SCHEDULE}
      component={HabitSchedule}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={NewHabitStacks.HABIT_CREATED}
      component={HabitCreated}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default CreateHabit;
