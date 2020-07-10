import { StyleSheet } from 'react-native'
import { Colors } from '../../themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor,
    shadowColor: Colors.transparent,
    borderBottomWidth: 0,
    borderBottomColor: Colors.transparent,
    elevation: 0
  },
  backImage: {
    height: 20,
    resizeMode: 'contain'
  }
})
