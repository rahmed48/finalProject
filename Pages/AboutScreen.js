import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
    // const { username } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.pesanin}>Pesanin</Text>
            <Text style={styles.user}>Hai, Rahmad</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pesanin: { fontSize: 20, marginLeft: 10 },
    user: { fontSize: 20, marginRight: 10 },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFE500',
        height: 50,
        justifyContent: 'space-between',
    }
})
