import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import useCustomHooks from '../customHooks/customHooks'
import ThemeContext from '../context/themeContext'

export function Home() {
    const [count, setCount] = useState(0)
    const { message } = useCustomHooks()
    const { theme, setTheme } = useContext(ThemeContext)
    console.log(theme)
    useEffect(() => {
        console.log("Başlangıç useEffect Çalıştı.")
    }, [])
    useEffect(() => {
        console.log("Değer Güncellendi:" + count)
    }, [count])
    function increase() {
        setCount(count + 1)
    }
    function decrease() {
        setCount(count - 1)
    }
    return (
        <View style={[
            style.container,
            theme === "dark" ? { backgroundColor: "black" } : { backgroundColor: "white" }
        ]}>
            <Text style={style.text}>
                Count:{count}
            </Text>
            <TouchableOpacity
                style={style.button}
                onPress={increase}>
                <Text style={style.text}>
                    +
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.button}
                onPress={decrease}>
                <Text style={style.text}>
                    -
                </Text>
            </TouchableOpacity>
            <Text style={style.text}>
                {message}
            </Text>
            <Switch onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
                value={theme === "dark" ? true : false}
            />
            <Text>Geçerli Tema : {theme}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1
    },
    backGroundLight: {
        backgroundColor: "white"
    },
    backGroundDark: {
        backgroundColor: "black",
    },

    text: {
        fontSize: 20
    },
    button: {
        borderWidth: 1,
        width: 50,
        alignItems: "center",
        marginBottom: 10
    }
});