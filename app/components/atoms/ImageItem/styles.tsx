import { StyleSheet } from 'react-native'
import { Metrics } from '../../../themes'

export default StyleSheet.create({
  imageItem: {
    width: (Metrics.screenWidth - 58) / 4,
    height: (Metrics.screenWidth - 58) / 4,
    borderRadius: 20,
    margin: 3,
    backgroundColor: 'lightgray'
  }
})
