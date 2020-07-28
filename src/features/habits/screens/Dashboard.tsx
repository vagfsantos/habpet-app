import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Habits from './Habits';
import CreateHabit from '../../new-habit/screens/CreateHabit';
import Colors from '../../../theme/colors';

enum Tabs {
  HABITS = 'Habits',
  NEW_HABIT = 'New Habit'
}

const Tab = createBottomTabNavigator();

const Dashboard: React.FunctionComponent = () => (
  <Tab.Navigator
    initialRouteName={Tabs.HABITS}
    tabBarOptions={{
      tabStyle: {
        backgroundColor: Colors.SECONDARY,
        paddingVertical: 8,
        borderTopWidth: 0,
        shadowColor: 'transparent',
      },
      activeTintColor: Colors.PRIMARY_DARK,
      inactiveTintColor: Colors.BLACK,
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        const iconName = route.name === Tabs.HABITS ? 'home' : 'plus';

        return <Icon name={iconName} size={20} color={color} />;
      },
    })}
  >
    <Tab.Screen name={Tabs.HABITS} component={Habits} />
    <Tab.Screen name={Tabs.NEW_HABIT} component={CreateHabit} />
  </Tab.Navigator>
);


export default Dashboard;
