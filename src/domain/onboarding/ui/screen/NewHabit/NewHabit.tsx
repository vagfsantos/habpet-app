import { HabitName } from '@domain/habit/ui/screen/HabitName';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export enum NewHabitStacks {
  HABIT_NAME = 'habit-name',
}

export function NewHabit() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NewHabitStacks.HABIT_NAME} component={HabitName} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
