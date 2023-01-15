import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CategoryStackNavigator, DetailStackNavigator, HomeStackNavigator } from './stackNavigator';

const Tab = createBottomTabNavigator()
export function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name='HomeScreen'
                component={HomeStackNavigator} />
            <Tab.Screen
                name='DetailScreen'
                options={{ title: "Firebase Auth" }}
                component={DetailStackNavigator} />
            <Tab.Screen
                name='CategoryScreen'
                component={CategoryStackNavigator} />
        </Tab.Navigator>
    )
}