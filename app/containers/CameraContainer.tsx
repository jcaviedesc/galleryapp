import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles/imagesContainerStyles'

interface Props { }

const CameraContainer: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>hola soy camera</Text>
    </View>
  )
}

export default CameraContainer;