import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Text, StyleSheet } from 'react-native'
export interface Props {
  title: string;
  onPress: Function;
}

export const HeaderButton = ({ title, onPress }: Props) => {
  return (
    <TouchableHighlight
      style={styles.headerButton}
      onPress={() => onPress()}
    >
      <Text style={styles.headerButtonText}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  headerButton: {
    display: 'flex',
    borderColor: '#F4F7FD',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginRight: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
    shadowColor: '#F0F6FF',
    shadowOffset: { width: 0, height: 15},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5
  },
  headerButtonText: {
    color: '#FEA0A8'
  }
})