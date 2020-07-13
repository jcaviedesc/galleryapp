import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Metrics } from '../../../themes'

type Props = {
  refcamera: React.createRef,
  flashOn: boolean,
  type?: string
}
type flashType = "auto" | "on" | "off" | "torch" | undefined

const Camera = ({ refcamera, flashOn = false, type = "front" }: Props) => {
  const aciveFlash: flashType = flashOn
    ? RNCamera.Constants.FlashMode.on
    : RNCamera.Constants.FlashMode.off

  // const takePicture: Function = async () => {
  //   if (cameraRef.current) {
  //     const options = { quality: 0.5, base64: true };
  //     const data = await cameraRef.current.takePictureAsync(options);
  //     console.log(data.uri);
  //   }
  // };
//   rectOfInterest={{
//     x: 0, y: 0, width: 480, height: 500
//   }}
//   cameraViewDimensions={{
//   width: 480, height: 500
// }}
  return (
    <View style={styles.container}>
      <RNCamera
        ref={refcamera}
        style={styles.preview}
        type={type}
        ratio="4:3"
        flashMode={aciveFlash}
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
      />
    </View>
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
  }
});