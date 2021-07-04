import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, TouchableOpacity, Image } from 'react-native'
import auth from '@react-native-firebase/auth';
import axios from 'axios'

const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: `https://e-menus.herokuapp.com/${item.imageUrl}`
                }}
                resizeMode="contain"
            />
            <Text style={[styles.title]}>{item.nameItem}</Text>
        </View>
    </TouchableOpacity>
);

export default function AboutScreen({ navigation }) {
    const [user, setUser] = useState({})
    const [itemnya, setItemnya] = useState();

    axios.get('https://e-menus.herokuapp.com/api/v1/menu/item')
        .then(response => {
            setItemnya(response.data.item)
        })
        .catch(err => console.log('err:', err))
    // console.log(DATA);
    // console.log(itemnya);
    useEffect(() => {
        const userInfo = auth().currentUser
        setUser(userInfo)
    }, [])

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('AddScreen', {
                        itemId: item._id,
                    })
                }}
            />
        );
    };


    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.pesanin}>Pesanin</Text>
                <Text style={styles.user}>Hai,{user.email}</Text>
            </View>
            <View>
                <SafeAreaView style={styles.container3}>
                    <FlatList
                        data={itemnya}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id}
                    />
                </SafeAreaView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    pesanin: { fontSize: 20, marginLeft: 10 },
    user: { fontSize: 15, marginRight: 10 },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFE500',
        height: 50,
        justifyContent: 'space-between',
    },
    container3: {
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: { width: 100, height: 100, backgroundColor: "white", alignSelf: 'center', marginRight: 10 },
})
