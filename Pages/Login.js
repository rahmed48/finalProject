import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);

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
                        borderWidth: 1,
                        paddingVertical: 10,
                        borderRadius: 20,
                        width: 300,
                        marginBottom: 30,
                        paddingHorizontal: 10,
                    }}
                    placeholder="Masukan Username"
                    value={username}
                    onChangeText={(value) => setUsername(value)}
                />
                <TextInput
                    style={{
                        borderWidth: 1,
                        paddingVertical: 10,
                        borderRadius: 20,
                        width: 300,
                        marginBottom: 30,
                        paddingHorizontal: 10,
                    }}
                    placeholder="Masukan Password"
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                />
                <TouchableOpacity
                    onPress={submit}
                    style={{
                        marginTop: 10,
                        height: 50,
                        width: 150,
                        borderRadius: 25,
                        justifyContent: 'center',
                        backgroundColor: '#FFE500',
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'black',
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}>
                        Login
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
        left: 106
    },
    ellipse3: {
        position: 'absolute',
        top: 185,
        left: 117
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
