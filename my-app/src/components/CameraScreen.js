import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';


takePicture = async function() {
    if (this.camera) {
      this.camera.takePictureAsync().then(async (data) => {

        cropdata = {
          offset:{x:0, y:0},
          size:{width:100, height:100},
        };

        await ImageEditor.cropImage(
          data.uri, 
          cropdata,
          async (uri) => {
            FileSystem.moveAsync({
              from: uri,
              to: `${FileSystem.documentDirectory}src/components${this.state.photoId}.jpg`,
            }).then(() => {
              this.setState({
                photoId: this.state.photoId + 1,
              });
              Vibration.vibrate();
            });
          },
          (error) => {
            console.log(error);
          }
        );

      });
    }
};

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 22, marginBottom: 50, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              takePicture();
            }}>
            <Text style={{ fontSize: 20, marginBottom: 500, color: 'white' }}> Capture </Text>
          </TouchableOpacity>

        </View>
      </Camera>
    </View>
  );
}
