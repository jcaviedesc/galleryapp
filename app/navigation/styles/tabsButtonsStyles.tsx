import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes/'

export default StyleSheet.create({
  tabsContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 30
  },
  button: {
    position: 'relative',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.backgroundColor,
    borderColor: Colors.borderButton,
    borderWidth: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  activeButton: {
    borderColor: '#FEA0A8'
  },
  centerButton: {
    marginHorizontal: 10
  }
})
