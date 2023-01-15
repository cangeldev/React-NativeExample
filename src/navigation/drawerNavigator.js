import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigator } from './tabNavigator';
import { CategoryOne } from '../pages';

const Drawer = createDrawerNavigator()
export function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                name='TabNavigator'
                component={TabNavigator} />
            <Drawer.Screen
                name='TabNavigator2'
                component={CategoryOne}
                options={{ title: "CategoryOne" }} />
        </Drawer.Navigator>
    )
}