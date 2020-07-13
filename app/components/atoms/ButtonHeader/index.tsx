import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Text, StyleSheet } from 'react-native'
import { Colors } from '../../../themes'
interface Props {
  title: string;
  onPress: Function;
  active: boolean
}

export const HeaderButton = ({ title, onPress, active }: Props) => {
  const stylesButton = active
    ? { ...styles.headerButton, ...styles.shadowButton, ...styles.buttonActive }
    : { ...styles.headerButton, ...styles.buttonInactive }
  const styleText = active
    ? styles.headerButtonText
    : {...styles.headerButtonText, ...styles.buttonTextIncative}
  return (
    <TouchableHighlight
      style={stylesButton}
      onPress={() => onPress()}
    >
      <Text style={styleText}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  headerButton: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 20,
    paddingHorizontal: 18,
    paddingVertical: 6
  },
  buttonActive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#F4F7FD',
  },
  shadowButton: {
    shadowColor: '#F0F6FF',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5
  },
  headerButtonText: {
    color: '#FEA0A8',
    fontWeight: 'bold'
  },
  buttonTextIncative:{
    color: Colors.inactiveIcon
  },
  buttonInactive: {
    backgroundColor: Colors.borderButton,
    borderColor: Colors.transparent
  }
})