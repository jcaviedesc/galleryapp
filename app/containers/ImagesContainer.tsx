import React from 'react'
import { View, Text} from 'react-native'
import styles from './styles/imagesContainerStyles'

export interface Props {}
const ImagesContainer: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>hola imagesss</Text>
    </View>
  )
}

export default ImagesContainer;