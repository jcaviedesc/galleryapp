import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    paddingTop: 9,
    paddingHorizontal: 20
  },
  mainPhoto:{
    width: Metrics.screenWidth - 40,
    height: Metrics.screenWidth - 40,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainImage:{
    width: Metrics.screenWidth,
  },
  imagesContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 3
  },
  firtsItem:{
    marginLeft: 0
  },
  lastItem:{
    marginRight: 0
  }
})
