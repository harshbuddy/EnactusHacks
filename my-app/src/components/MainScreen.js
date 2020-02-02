import Expo from 'expo';
import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import InputScrollView from 'react-native-input-scroll-view';
import { TextInput, StyleSheet, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import MultiSelect from 'react-native-multiple-select';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';



const styles = StyleSheet.create({
  bigBlue: {
    color: '#F44235',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 15,
    // fontFamily: 'HelveticaNeueBold'
  },
  bigRed: {
    color: 'red',
    fontWeight: 'bold',
    fontSize:43,
    marginBottom: 13,
  },
  caption: {
    color: 'black',
    fontSize:14,
  },
  button: {
    backgroundColor: '#F44235',
    alignItems:'center',
    padding: 18,
    paddingHorizontal: 80,
    borderRadius:10,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  icons: {
    width: 60,
    height: 60,
    resizeMode: 'stretch'
  },
  infoText: {
    fontSize: 12,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 15,
    backgroundColor: 'white',
    width: 310,
    padding: 10,
    marginBottom: 50,
    borderRadius:10
  },
  button2: {
    backgroundColor: 'transparent',
    alignItems:'center',
    padding: 18,
    paddingHorizontal: 80,
    borderRadius:10,
  },
  buttonText2: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    justifyContent: 'flex-end'
  },

});


export default class MainScreen extends React.Component {

  cconstructor(props) {

      this.state = {
        places: [],
        dataAnalyzed: " "
      };

      this.getNearbyPlaces = this.getNearbyPlaces.bind(this);
      this.nearbyCallback = this.nearbyCallback.bind(this);
      this.getTrafficTimes = this.getTrafficTimes.bind(this);
      this.onAnalyze = this.onAnalyze.bind(this);
    }

    onAnalyze = () => {
      this.setState({
        dataAnalyzed: "Health Card Data Sent"
      })
    }

    getNearbyPlaces(position) {
      let request = {
        location: position,
        rankBy: google.maps.places.RankBy.PROMINENCE,
        keyword: 'clinic',
        type: ['health','doctor'],
        radius: '1500',
      };

      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, nearbyCallback);

    }

     nearbyCallback(results, status) {
      console.log(results);
      listofplaces = []
      for (i in results) {
        console.log(results[i].name);
        listofplaces.push([results[i].geometry.viewport.Ya.g,results[i].geometry.viewport.Ta.g]);
        this.places.push(results[i].name);
        // listofplaces.push(results[i].vicinity);
      }

      console.log(listofplaces);

      getTrafficTimes(listofplaces);
    }

     getTrafficTimes(places) {

      var service = new google.maps.DistanceMatrixService();
    
      for (i in places){
        dest = {
          lat: places[i][0],
          lng: places[i][1]
        }
      
        let request = {
          origins: [{lat: 42, lng: -83}],
          destinations: [dest],
          travelMode: 'DRIVING',
          avoidTolls: true
        }

          service.getDistanceMatrix(request,trafficCallBack);

        }
      
      }

    
    state = {
      hasPermission: null,
      type: Camera.Constants.Type.back,
    }

    async componentDidMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasPermission: status === 'granted' });
    }
  


render() {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, paddingVertical: 60 }}>

      <View style={styles.container}>

        <Text style={styles.bigBlue}>Plan Your Visit</Text>

          <ModalDropdown 
          defaultValue = "Select your nearest Clinic"
          textStyle={{fontSize: 17, paddingTop: 8, paddingBottom: 8, marginBottom: 10}}
          dropdownStyle={styles.dropdown}
          dropdownTextStyle={{fontSize: 15}}

          options={['Wharncliffe WalkIn Clinic - 6 min',
           'Canadian Cannabis Clinics London - 6 min',
            'Oxford Medical WalkIn Clinic - 4 min',
             'Travel Immunization Clinic - 3 min',
              'London Family Court Clinic - 2 min',
           'St Josephs Family Medical and Dental Centre - 8 min',
            'Good doctors London - 4 min',
             'Diabetes Education Centre - 4 min',
             'Cherryhill Foot Care - 5 min',
              'Student Health Services At Western University - 2 min',
              'Fowler Kennedy Sport Medicine Clinic - 5 min',
               'VenaCare & Skin Care Clinic - 3 min ',
                'Bodystream Medical Cannabis Clinic London - 5 min']
              }/>

          <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                placeholder={'Describe your current symptoms'}
                style={styles.input}
          />


          <TouchableOpacity
              style={styles.button}
              activeOpacity = { .7 }
              onPress={()=>this.props.navigation.navigate('Camera')}
            >
            <Text style={styles.buttonText}> Scan your Health Card </Text>
          </TouchableOpacity> 

          <View style={{justifyContent:'center', alignItems: 'center', marginTop: 50, marginBottom: 80}}>
            <Text>{this.state.dataAnalyzed}</Text>
          </View>


          <TouchableOpacity
              style={styles.button2}
              activeOpacity = { .7 }
              onPress={this.onAnalyze}
            >
            <Text style={styles.buttonText2}> Submit  </Text>
          </TouchableOpacity>  
      </View>
    </View>
    )
  }
}

