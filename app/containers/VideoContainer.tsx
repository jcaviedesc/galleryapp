import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles/videoContainerStyles'

interface Props { }

const CameraContainer: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>hola soy videoContainer</Text>
    </View>
  )
}

export default CameraContainer;