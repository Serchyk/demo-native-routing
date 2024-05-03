import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Ionicons';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="FirstPage">
            <Stack.Screen name="FirstPage" component={FirstPage} />
            <Stack.Screen name="SecondPage" component={SecondPage} />
        </Stack.Navigator>
    );
};

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Main') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'ThirdPage') {
                        iconName = focused ? 'cog' : 'cog';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}>
                <Tab.Screen name="Main" component={MainStack} />
                <Tab.Screen name="ThirdPage" component={ThirdPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;