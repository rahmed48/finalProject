import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import axios from 'axios'

export default function AddScreen({ route, navigation }) {

    const [user, setUser] = useState({})
    const [itemDetail, setItemDetail] = useState({});

    const pesan = () => {
        navigation.navigate('LoginScreen')
        Alert.alert('Sukses', 'Pesanan Akan Segera Dikirimkan')
    }

    useEffect(() => {
        const userInfo = auth().currentUser
        setUser(userInfo)
    }, [])

    if (route.params === undefined) {

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.pesanin}>Pesanin</Text>
                    <Text style={styles.user}>Hai,{user.email}</Text>
                </View>
                <View style={styles.container10}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Anda Belum Memilih Menu Untuk Di Pesan</Text>
                </View>
            </View>
        )

    } else {
        const { itemId } = route.params;

        axios.get(`https://e-menus.herokuapp.com/api/v1/menu/detail-item/${itemId}`)
            .then(response => {
                setItemDetail(response.data.item)

            })
            .catch(err => console.log('err:', err))

        // const itemSemuanya


        // ASYNC Sebelum Ngerender
        return (
            <View style={styles.container2}>
                <View style={styles.container}>
                    <Text style={styles.pesanin}>Pesanin</Text>
                    <Text style={styles.user}>Hai,{user.email}</Text>
                </View>
                <View style={{ flex: 1 }}>

                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: `https://e-menus.herokuapp.com/${itemDetail.imageUrl}`
                        }}
                        resizeMode="contain"
                    />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 21,
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{ marginLeft: 15, fontSize: 30, fontWeight: 'bold' }}>{itemDetail.nameItem}</Text>
                        <Text style={{ marginRight: 15, fontSize: 30, fontWeight: 'normal' }}>Rp.{itemDetail.harga}</Text>
                    </View>
                    <Text style={{ marginTop: 30, alignSelf: 'center', fontSize: 20 }}>Masukkan Alamat Anda</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 30,
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{ marginLeft: 15, fontSize: 15 }}>Alamat</Text>
                        <TextInput style={{
                            backgroundColor: 'white', flex: 1, marginRight: 15, marginLeft: 20, borderRadius: 10, shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.5,
                            shadowRadius: 2,
                            elevation: 5,
                        }} />
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={pesan}
                            style={{
                                marginTop: 50,
                                height: 50,
                                width: 200,
                                borderRadius: 25,
                                justifyContent: 'center',
                                alignSelf: 'center',
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
                                Pesan Sekarang
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pesanin: { fontSize: 20, marginLeft: 10 },
    user: { fontSize: 15, marginRight: 10 },
    container2: { flex: 1, backgroundColor: 'white' },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFE500',
        height: 50,
        justifyContent: 'space-between',
    },
    tinyLogo: { width: 400, height: 250, backgroundColor: "white", alignSelf: 'center', margin: 10 },
    container10: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
