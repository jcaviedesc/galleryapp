import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Metrics, Colors } from '../../../themes'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '../../icons'

type Props = {
  refcamera: typeof React.createRef,
}

const Camera = ({ refcamera }: Props) => {
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off)
  const [cameraMode, setCameraMode] = useState(RNCamera.Constants.Type.front)
  
  return (
    <View style={styles.container}>
      <RNCamera
        ref={refcamera}
        style={styles.preview}
        type={cameraMode}
        flashMode={flashMode}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCameraMode(prevMode => {
              return prevMode !== RNCamera.Constants.Type.back
                ? RNCamera.Constants.Type.back
                : RNCamera.Constants.Type.front
            })}>
            <Icon
              name="change-camera"
              size={18}
              color={Colors.backgroundColor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: flashMode === RNCamera.Constants.FlashMode.off ? Colors.backgroundButtonCamera: Colors.flashModeOn
            }}
            onPress={() => setFlashMode(flashMode => {
              return flashMode === RNCamera.Constants.FlashMode.on
                ? RNCamera.Constants.FlashMode.off
                : RNCamera.Constants.FlashMode.on
            })}>
            <Icon
              name="flash-off"
              size={18}
              color={Colors.backgroundColor} />
          </TouchableOpacity>
        </View>
      </RNCamera>
    </View >
  );
}

export { Camera }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15
  },
  preview: {
    flex: 1,
    width: Metrics.screenWidth - 40,
    height: 600,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttons: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});