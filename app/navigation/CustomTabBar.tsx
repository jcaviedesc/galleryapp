import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import Icon from '../components/icons'
import { Colors, Metrics } from '../themes'
import styles from './styles/tabsButtonsStyles'

interface Props {
  state: object,
  descriptors: object,
  navigation: object
}
export function TabBar({ state, descriptors, navigation }: Props) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const position = {
    right: (Metrics.screenWidth - (state.routes.length * 60)) / 2
  }
  return (
    <View style={{ ...styles.tabsContainer, ...position }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        // const iconName = options.tabBarIcon
        const isFocused = state.index === index;
        const activeButton = isFocused ? styles.activeButton : {}

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ ...styles.button, ...activeButton }}
          >
            <Icon
              name={label}
              size={18}
              color={isFocused ? Colors.activeIcon : Colors.inactiveIcon} />
            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}