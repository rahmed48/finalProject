import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../Pages/Home';
import AboutScreen from '../Pages/AboutScreen';
import LoginScreen from '../Pages/Login';
import RegisterScreen from '../Pages/Register';
import ProjectScreen from '../Pages/ProjectScreen';
import Setting from '../Pages/Setting';
import SkillProject from '../Pages/SkillProject';
import AddScreen from '../Pages/AddScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MainApp" component={MainApp} />
                {/* <Stack.Screen name="MyDrawwer" component={MyDrawwer} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MainApp = () => (
    <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
            activeTintColor: '#000000',
            inactiveTintColor: '#FFFFFF',
            style: {
                backgroundColor: '#FFE500',
            },
            showLabel: false
        }}>
        {/* <Tab.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Tab.Screen name="AboutScreen" component={AboutScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
        <Tab.Screen name="AddScreen" component={AddScreen}
            options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cart" color={color} size={size} />
                ),
                // tabBarBadge: 10,
            }}
        />
        <Tab.Screen name="SkillProject" component={SkillProject}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-circle" color={color} size={size} />
                ),
            }} />
    </Tab.Navigator>
)

// const MyDrawwer = () => (
//     <Drawer.Navigator>
//         <Drawer.Screen name="App" component={MainApp} />
//         <Drawer.Screen name="AboutScreen" component={AboutScreen} />
//     </Drawer.Navigator>
// )
