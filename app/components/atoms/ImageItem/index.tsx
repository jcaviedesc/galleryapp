import React from 'react'
import { View } from 'react-native'
import styles from './styles'

type Props = {
  style?: Object;
};

export const ImageItem = ({ style }: Props) => {
  return (
    <View style={{ ...styles.imageItem, ...style}} />
  )
}