import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    paddingTop: 9,
    paddingHorizontal: 20
  },
  cameraContainer: {
    position: 'relative',
    width: Metrics.screenWidth - 40,
    height: Metrics.screenWidth,
    borderRadius: 10,
    overflow: 'hidden'
  },
  prePhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
   },
  buttonContainer: {
    flex: 1,
    marginBottom: 30,
    justifyContent: 'center',
    alignContent: 'center'
  },
  buttonCapturePhoto: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: Colors.takePhotoBackgrounButton,
    borderColor: '#CDD4E0',
    borderWidth: 1,
    shadowColor: '#F0F6FF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonMask: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#F4F7FD',
    borderWidth: 1,
    backgroundColor: Colors.backgroundColor,
  },
  takeAgainButton:{
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F4F7FD',
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: '#F0F6FF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  }
})
