import React, { useRef, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { isEmpty } from 'lodash'
import styles from './styles/cameraContainerStyles'
import { Camera } from '../components'
import { TouchableHighlight } from 'react-native-gesture-handler'

interface Props { }

const CameraContainer: React.FC<Props> = () => {
  const cameraRef = useRef()
  const [flashOn, setFlasOn] = useState(false)
  const [typeCamera, setTypeCamera] = useState('front')
  const [photo, setPhoto] = useState({ uri: '' })

  const takePicture: Function = async () => {
    if (cameraRef.current) {
      const options: Object = { quality: 0.5, base64: false, orientation: 'portrait', fixOrientation: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setPhoto(data)
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {!isEmpty(photo.uri) ? (<View>
          <Image
            style={styles.prePhoto} source={{ uri: photo.uri }} />
        </View>)
          : (<Camera refcamera={cameraRef} flashOn={flashOn} type={typeCamera} />)
        }
      </View>
      <View style={styles.buttonContainer}>
        {isEmpty(photo.uri) ? (
          <TouchableHighlight onPress={() => takePicture()} style={styles.buttonCapturePhoto} >
            <View style={styles.buttonMask} />
          </TouchableHighlight>
        ) : (
            <View style={styles.takeAgainButton}>
              <TouchableHighlight underlayColor="transparent" onPress={() => setPhoto({ uri: '' })} >
                <Text>Tomar de nuevo</Text>
              </TouchableHighlight>
            </View>
          )}
      </View>
    </View>
  )
}

export default CameraContainer;