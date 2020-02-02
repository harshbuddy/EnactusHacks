import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Image, TextInput, Modal, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const styles = StyleSheet.create({
  bigRed: {
    color: '#F44235',
    fontWeight: 'bold',
    fontSize:18,
    marginTop: -40,
  },
  icons: {
    width: 120,
    height: 120,
    resizeMode: 'stretch',
    marginTop: 50,
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#F44235',
    alignItems:'center',
    padding: 18,
    paddingHorizontal: 80,
    borderRadius:25,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  input: {
    width: 265,
    height: 44,
    padding: 24,
    marginBottom: 10,
    borderWidth: 0.75,
    borderColor: 'rgba(244,66,53,0.3)',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  bigBlue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 54,
    marginTop: 50,
    marginBottom: 70,
    // fontFamily: 'HelveticaNeueBold'
  },
  SignUp: {
    color: '#F44235',
    fontSize: 15,
    marginLeft: -190
  }
});


export default class LoginScreen extends Component {

  constructor(props) {
      super(props);
    
      this.state = {
        username: '',
        password: '',
      };

      this.onLogin = this.onLogin.bind(this);
    }
  
    onLogin() {
      // const { username, password } = this.state;
      // console.log('Credentials', `${username} + ${password}`);

      // if ((username == "Harsh") && (password == "Patel")) {
        this.props.navigation.navigate('Main');
        // console.log("good");
      
    }

    state = {
      
  };



    render() {
      return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, paddingVertical: 60 }}>
        
        <View>
          <Text style={styles.bigBlue}>
            Pulse
          </Text>
        </View>

          <View style={{flex:2, alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>

            <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />
            <Text style={styles.SignUp}>Sign Up</Text>
            
            <View style={styles.container}>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity = { .7 }
                  // onPress={()=>this.props.navigation.navigate('Main')}
                  onPress={this.onLogin} 
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

            </View>
          
          </View>

      </View> 
    )
  }
}