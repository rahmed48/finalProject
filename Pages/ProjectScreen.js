import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card } from 'react-native-shadow-cards';

export default function ProjectScreen() {
    return (
        <View style={{ padding: 17 }}>
            <Text
                style={{
                    color: 'black',
                    marginTop: 10,
                    marginLeft: 17,
                    fontSize: 35,
                    fontFamily: 'Poppins-SemiBold',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginBottom: 10,
                }}>
                About Me
        </Text>
            <View
                style={{
                    flexDirection: 'row'
                }}>
                <Image
                    style={{
                        height: 120,
                        width: 120,
                    }}
                    source={require('../assets/foto.png')}
                />
                <View style={{
                    marginTop: 6,
                    marginLeft: 9
                }}>
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            textAlign: 'left',
                        }}>
                        Rahmad Alfian
            </Text>
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            textAlign: 'left',
                        }}>
                        Syahputra
            </Text>
                    <Text
                        style={{
                            fontSize: 13,
                            fontWeight: '300',
                            textAlign: 'left',
                        }}>
                        Back End & React Native Developer
            </Text>
                </View>
            </View>
            <Text
                style={{
                    marginTop: 28,
                    marginBottom: 28,
                    fontSize: 12,
                    textAlign: 'left',
                }}>
                I am passionate Back End Dev with 1 year experience. I have a strong foundation some programming languages and database system. Have Experience with third-party libraries and APIs. Hardworking person and have a genuine interest in activity for challenging new things especially about programming. I also have about 2 years of experience in developing web projects.
        </Text>
            <Card style={{
                padding: 5, height: 40, borderRadius: 28, width: '100%', height: 300, borderColor: '#C1D0E6', borderWidth: 1,
            }}>
                <Text
                    style={{
                        margin: 15,
                        fontSize: 15,
                        textAlign: 'left',
                        fontWeight: 'bold',
                        marginBottom: 20,
                    }}>
                    Check My Portofolio
          </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../assets/gitlab.png')}
                    />
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../assets/github.png')}
                    />
                </View>
                <Text
                    style={{
                        margin: 15,
                        fontSize: 15,
                        textAlign: 'left',
                        fontWeight: 'bold',
                        marginBottom: 20,
                    }}>
                    Contact
          </Text>
                <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                    <View>
                        <Image
                            style={{ width: 30, marginBottom: 10 }}
                            source={require('../assets/wa.png')}
                        />
                        <Image
                            style={{ width: 30 }}
                            source={require('../assets/mail.png')}
                        />
                    </View>
                    <View>
                        <Text
                            style={{
                                marginLeft: 7,
                                fontSize: 15,
                                textAlign: 'left',
                                fontWeight: 'bold',
                                marginBottom: 20,
                            }}>
                            rahmadalfiansyahputra48@gmail.com
          </Text>
                        <Text
                            style={{
                                marginLeft: 7,
                                fontSize: 15,
                                textAlign: 'left',
                                fontWeight: 'bold',
                                marginBottom: 20,
                            }}>
                            0853-7324-3136
          </Text>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
