import { View, TextInput, Button, Text } from 'react-native'
import React, { useState, useContext } from 'react'
import auth from '@react-native-firebase/auth';
import useCustomHooks from '../customHooks/customHooks'
import ThemeContext from '../context/themeContext'

export function Detail() {
    const [userId, setUserID] = useState()
    const [userPw, setUserPW] = useState()
    const { theme, setTheme } = useContext(ThemeContext)

    const createUser = () => {
        auth().createUserWithEmailAndPassword(userId, userPw)
            .then(() =>
                console.log("Kayıt Başarılı")
            ).catch((error) => {
                console.log(error.code)
            })
    }
    const deleteUser = () => {
        const deleteUser = auth().currentUser;
        deleteUser.delete()
            .then(() => console.log("Kullanıcı Silindi"))
            .catch((error) => console.log(error));
    }
    const checkUSer = () => {
        const durum = auth().currentUser
        console.log(durum)
    }
    const loginUser = () => {
        auth().signInWithEmailAndPassword(userId, userPw)
            .then(() => console.log("Kullanıcı Girişi Başarılı"))
            .catch((error) => console.log(error));
    }
    const logoutUser = () => {
        auth().signOut()
            .then(() => console.log("Kullanıcı Girişi Başarılı"))
            .catch((error) => console.log(error));
    }
    return (
        <View style={([
            theme === "dark" ? { backgroundColor: "black" } : { backgroundColor: "white" }, { flex: 1 }
        ])}>
            <TextInput
                placeholder='E-mail'
                onChangeText={(userId) => setUserID(userId)} />
            <TextInput
                placeholder='Password'
                onChangeText={(userPw) => { setUserPW(userPw) }} />
            <Button
                title='Kayıt Ol'
                onPress={createUser}
            />
            <Button
                title='Giriş Yap'
                onPress={loginUser}
            />
            <Button
                title='Kullanıcı Sil'
                onPress={deleteUser}
            />
            <Button
                title='Durum'
                onPress={checkUSer}
            />
            <Button
                title='Çıkış Yap'
                onPress={logoutUser}
            />
            <Text>Geçerli Tema : {theme}</Text>
        </View>
    )
}