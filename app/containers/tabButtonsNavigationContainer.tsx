import React from 'react'
import { View } from 'react-native'
import styles from './styles/tabsButtonsStyles'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Icon from '../components/icons'
import { Colors } from '../themes'

export interface Props {
  activeScreen: string
}

const TabsButtons: React.FC<Props> = ({ activeScreen }) => {
  const isActive = (screen: string): boolean => screen === activeScreen
  const activeButton = (screen: string) => isActive(screen)
    ? {...styles.button, ...styles.activeButton}
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

export default TabsButtons;