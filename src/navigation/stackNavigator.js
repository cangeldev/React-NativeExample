import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Category, CategoryOne, CategoryTwo, Detail, Home } from '../pages'

const Stack = createStackNavigator()
export function HomeStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home} />
        </Stack.Navigator>
    )
}
export function DetailStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Detail'
                component={Detail} />
        </Stack.Navigator>
    )
}
export function CategoryStackNavigator() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name='Category'
                component={Category} />
            <Stack.Screen
                name='CategoryOne'
                component={CategoryOne} />
            <Stack.Screen
                name='CategoryTwo'
                component={CategoryTwo} />
        </Stack.Navigator>
    )
}
