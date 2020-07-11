import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles/tabsButtonsStyles'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Icon from '../components/icons'
import { Colors } from '../themes'
import RouterActions from '../redux/RouterRedux'

export interface Props {
  currentScreen: string
}

const TabsButtons: React.FC<Props> = ({ currentScreen }) => {
  const isActive = (screen: string): boolean => screen === currentScreen
  const activeButton = (screen: string) => isActive(screen)
    ? { ...styles.button, ...styles.activeButton }
    : styles.button
  return (
    <View style={styles.tabsContainer}>
      <TouchableHighlight style={activeButton('ImagesScreen')}>
        <Icon
          name={'image'}
          size={18}
          color={isActive('ImagesScreen') ? Colors.activeIcon : Colors.inactiveIcon} />
      </TouchableHighlight>
      <TouchableHighlight style={{ ...activeButton('cameraScreen'), ...styles.centerButton }}>
        <Icon
          name={'photo'}
          size={18}
          color={isActive('cameraScreen') ? Colors.activeIcon : Colors.inactiveIcon} />
      </TouchableHighlight>
      <TouchableHighlight style={activeButton('videoScreen')}>
        <Icon
          name={'video'}
          size={18}
          color={isActive('videoScreen') ? Colors.activeIcon : Colors.inactiveIcon} />
      </TouchableHighlight>
    </View>
  )
}
const mapStateToProps = (state) => {
  return {
    currentScreen: state.router.get('screen')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateTo: (screen) => dispatch(RouterActions.navigateTo(screen))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsButtons);
