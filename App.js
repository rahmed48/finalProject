

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Router from './Router'
import axios from 'axios'

export default function App() {
  const [nameToko, setNameToko] = useState({
    nameToko: ''
  })

  axios.get('https://e-menus.herokuapp.com/api/v1/menu/home')
    // .then(result => console.log(result))
    .then(response => {
      // handle success
      setNameToko(response.data.nameToko[0]);
      // console.log(response.data.nameToko[0]);
    })
    .catch(err => console.log('err:', err))

  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  return splash ?
    (<View style={styles.container}>
      {/* <Text style={styles.textSplash}>{`${nameToko.nameToko}`}</Text> */}
      <Image style={styles.logo} source={require('./assets/SplashS.png')} />
    </View>) : (
      <Router />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  logo: {
    width: 160, height: 60
  },
  textSplash: { fontSize: 50, fontFamily: 'Poppins-SemiBold' },
});
