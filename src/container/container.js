import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerNavigator } from '../navigation/drawerNavigator';
import { ThemeProvider } from '../context/themeContext';

const Tab = createBottomTabNavigator()
export function Container() {
    return (
        <NavigationContainer>
            <ThemeProvider>
                <DrawerNavigator />
            </ThemeProvider>
        </NavigationContainer>
    )
}