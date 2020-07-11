import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles/imagesContainerStyles'
import { ImageItem } from '../components'
import { ScrollView } from 'react-native-gesture-handler'
import { Images } from '../themes'

export interface Props { }
const images = [...Array(25).keys()]

const ImagesContainer: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainPhoto}>
          <Image style={styles.mainImage} source={Images.mainPhoto}/>
        </View>
        <View style={styles.imagesContainer}>
          {images.map((i, n) => (
            <ImageItem
              style={i % 4 === 0
                ? styles.firtsItem
                : (i + 1) % 4 === 0
                  ? styles.lastItem
                  : {}}
              key={n} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default ImagesContainer;