import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';


const styles = StyleSheet.create({
  bigBlue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 60,
    marginBottom: 1,
    // fontFamily: 'HelveticaNeueBold'
  },
  bigRed: {
    color: '#f44235',
    fontWeight: 'bold',
    fontSize:14,
    marginBottom: 13,
  },
  caption: {
    color: 'black',
    fontSize:14,
  },
  button: {
    backgroundColor: '#f44235',
    alignItems:'center',
    padding: 18,
    paddingHorizontal: 60,
    borderRadius:25,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  icons: {
    width: 350,
    height: 350,
    resizeMode: 'stretch',
    marginTop: 80
  },
  infoText: {
    fontSize: 12,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '800',
    marginTop: 7
  }

});


export default class HomeScreen extends Component {
  // componentDidMount() {
  //   Font.loadAsync({
  //     'HelveticaNeue': require('../assets/fonts/HelveticaNeue.ttf'),
  //     'HelveticaNeueBold': require('../assets/fonts/HelveticaNeueBd.ttf'),
  //   });
  // }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, paddingVertical: 60 }}>

        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
          <Image
              style={styles.icons}
              source={require('../assets/images/pulseLogo.png')}
          />

          <Text style={styles.bigBlue}> Pulse </Text>
          <Text style={styles.infoTitle}> Your <Text style={styles.bigRed}>health</Text> comes first. </Text>

        </View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity = { .7 }
              onPress={()=>this.props.navigation.navigate('Login')} 
            >
            <Text style={styles.buttonText}> Welcome </Text>
            </TouchableOpacity>

          </View>

      </View>
    )
  }
}