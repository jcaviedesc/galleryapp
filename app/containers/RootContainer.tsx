import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import MainNavigation from '../navigation/appNavigation'


// Styles
// import styles from './Styles/RootContainerStyles'
const styles = {
  applicationView: {
    flex: 1,
    backgroundColor: 'red'
  }
}

class RootContainer extends Component {
  // componentDidMount () {
  //   // if redux persist is not active fire startup action
  //   if (!ReduxPersist.active) {
  //     this.props.startup()
  //   }
  // }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' />
        <MainNavigation />
      </View>
    )
  }
}
export default RootContainer;
// wraps dispatch to create nicer functions to call within our component
// const mapDispatchToProps = (dispatch) => ({
//   startup: () => dispatch(StartupActions.startup())
// })

// export default connect(null, mapDispatchToProps)(RootContainer)
