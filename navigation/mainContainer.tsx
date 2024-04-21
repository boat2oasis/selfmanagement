import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homeScreen';
import DetailScreen from './screens/detailScreen';
import SettingScreen from './screens/settingScreen';
import Icon  from 'react-native-vector-icons/FontAwesome';

const homeName = '全资产';
const detailName = '明细';
const staticName = '统计';
const myName = '我的';
const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
    <NavigationContainer>
   <Tab.Navigator
   screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

            if (route.name === homeName) {
              iconName = focused
                ? 'behance-square'
                : 'behance-square';
            } else if (route.name === detailName) {
              iconName = focused ? 'behance-square' : 'behance-square';
            }
            else if (route.name === staticName) {
              iconName = focused ? 'behance-square' : 'behance-square';
            }
            else if (route.name === myName) {
              iconName = focused ? 'behance-square' : 'behance-square';
            }
            // You can return any component that you like here!
            return <Icon  name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
        <Tab.Screen options={{headerShown: false}} name={homeName} component={HomeScreen} />
        <Tab.Screen options={{headerShown: false}} name={detailName} component={DetailScreen} />
        <Tab.Screen options={{headerShown: false}} name={staticName} component={HomeScreen} />
        <Tab.Screen options={{headerShown: false}} name={myName} component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  };
  export default MainContainer;