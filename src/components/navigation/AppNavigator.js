import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TechScreen from '../screens/TechScreen';
import CyberScreen from '../screens/CyberScreen';
import ProgrammingScreen from '../screens/ProgrammingScreen';


const TabNavigator = createBottomTabNavigator({
    Technology: TechScreen,
    Cybersecurity: CyberScreen,
    Programming: ProgrammingScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Technology') {
          iconName = `keyboard-settings${focused ? '' : '-outline'}`;
        } else if (routeName === 'Cybersecurity') {
          iconName = `pirate`;
        } else if (routeName === 'Programming') {
          iconName = `console-network${focused ? '' : '-outline'}`;
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'magenta',
      inactiveTintColor: '#666',
    },
  }
);

export default createAppContainer(TabNavigator);
