import React, {useContext, useRef, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {FavoriteContext} from '../context/FavoriteContext';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
} from 'react-native-vision-camera';

export default function ProfileScreen({}: any) {
  const {mainHouse, setProfileImg, profileImg}: any =
    useContext(FavoriteContext);
  const camera = useRef<Camera>(null);
  const [openContainerCamera, setOpenContainerCamera] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  let device = useCameraDevice('front');

  const openCamera = async () => {
    // const takePhoto = async () => {
    try {
      if (!camera.current) {
        console.error('Camera reference not available.', camera);
        return;
      }

      const photo = await camera.current.takePhoto();
      console.log(photo);

      if (photo) {
        // setCapturedPhoto(`file://${photo.path}`);
        setProfileImg(`file://${photo.path}`);
        setShowPreview(true);
        setOpenContainerCamera(false);
      } else {
        console.error('Photo captured is undefined or empty.');
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: mainHouse?.color}]}>
      <View style={styles.card}>
        <Image source={{uri: profileImg}} style={styles.image} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setOpenContainerCamera(true);
        }}>
        <Text style={styles.name}>Click to open the camera</Text>
      </TouchableOpacity>
      {openContainerCamera && (
        <View style={{alignItems: 'center'}}>
          <Camera
            ref={camera}
            style={{height: 280, width: 250}}
            device={device}
            isActive={true}
            photo={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              openCamera();
            }}>
            <Text style={styles.name}>Click to take Profile Photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    alignItems: 'center',
    padding: 10,
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 12,
    margin: 12,
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#2b2b2b',
    borderRadius: 10,
    marginBottom: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
  },
  image: {
    width: 100,
    height: 180,
    borderRadius: 12,
    marginRight: 12,
  },
  info: {
    flex: 1,
    backgroundColor: 'red',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  description: {
    fontSize: 12,
    fontWeight: '',
    color: '#DDD',
  },
});
