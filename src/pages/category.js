import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'

export function Category({ navigation }) {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                Category
            </Text>
            <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate("CategoryOne")}>
                <Text style={style.buttonText}>
                    CategoryOne Sayfasına Git
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate("CategoryTwo")}>
                <Text style={style.buttonText}>
                    CategoryTwo Sayfasına Git
                </Text>
            </TouchableOpacity>
        </View>
    )
}