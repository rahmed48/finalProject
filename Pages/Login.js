import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);

    const register = () => {
        return (
            navigation.navigate('RegisterScreen')
        )
    }
    const login = () => {
        if (email == '' || password == '') {
            Alert.alert('Error', 'Form Tidak Lengkap')
        }
        else {
            auth().signInWithEmailAndPassword(email, password)
                .then((res) => {
                    return (
                        navigation.navigate('MainApp')
                    )
                })
                .catch((err) => {
                    Alert.alert('Error', err.message)
                })
        }
    }
    const submit = () => {
        if (password == 'asd') {
            return (
                navigation.navigate('MyDrawwer', { username: username })
                // navigation.navigate("MyDrawwer", { screen: 'App', params: { screen: 'MyDrawwer' } })

            )
        }
        else {
            return (
                () => setIsError(true),
                alert('Passwordnya asd Ya')
            )
        }
    }

    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <Image style={styles.ellipse1} source={require('../assets/Ellipse2.png')} />
            <Image style={styles.ellipse2} source={require('../assets/Ellipse3.png')} />
            <Image style={styles.ellipse3} source={require('../assets/Ellipse4.png')} />
            <Image style={styles.logo} source={require('../assets/bi_person-circle.png')} />
            <View style={styles.container2}>
                <Text style={styles.text1}>Selamat datang di Pesanin</Text>
                <Text style={styles.text2}>Kamu duduk aja, biar kami yang antar pesananmu</Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={{
                        marginTop: 15,
                        borderBottomWidth: 1,
                        paddingVertical: 2,
                        width: 320,
                        marginBottom: 30,
                        paddingHorizontal: 5,
                    }}
                    placeholder="Masukan Email"
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
                <TextInput
                    style={{
                        marginTop: 15,
                        borderBottomWidth: 1,
                        paddingVertical: 2,
                        width: 320,
                        marginBottom: 30,
                        paddingHorizontal: 5,
                    }}
                    placeholder="Masukan Password"
                    value={password}
                    secureTextEntry
                    onChangeText={(value) => setPassword(value)}
                />

                <TouchableOpacity
                    onPress={login}
                    style={{
                        marginTop: 10,
                        height: 50,
                        width: 150,
                        borderRadius: 25,
                        justifyContent: 'center',
                        backgroundColor: '#FFE500',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        elevation: 5,
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                        Login
                    </Text>
                </TouchableOpacity>


                <Text
                    style={{
                        fontSize: 10,
                        marginTop: 10,
                    }}>
                    Belum punya akun ?...
                    </Text>
                <TouchableOpacity
                    onPress={register}
                    style={{
                        height: 50,
                        width: 150,
                        borderRadius: 25,
                        justifyContent: 'center',
                        backgroundColor: '#FFE500',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        elevation: 5,
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                        Register
                    </Text>
                </TouchableOpacity>
                {/* <Button onPress={submit} title="Login" /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ellipse1: {
        position: 'absolute',
        top: 139,
        right: 125
    },
    ellipse2: {
        position: 'absolute',
        top: 164,
        left: 106,
        right: 240
    },
    ellipse3: {
        position: 'absolute',
        top: 185,
        left: 110,
        right: 220
    },
    logo: {
        position: 'absolute',
        top: 147,
        alignSelf: 'center',
        width: 80,
        height: 80
    },
    text1: {
        fontSize: 20, fontWeight: 'bold'

    },
    text2: {
        fontSize: 12, fontWeight: 'normal'

    },
    container: {
        marginTop: 40,
        marginBottom: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        // flex: 1,
        marginTop: 240,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
