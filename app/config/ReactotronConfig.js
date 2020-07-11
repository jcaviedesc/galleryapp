import Config from '../config/DebugConfig'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
// 192.168.0.11
const reactotron = Reactotron
    .configure({ name: 'galleryApp'}) 
    .useReactNative()
    .use(reduxPlugin())

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!

  reactotron.connect()

  // Let's clear Reactotron on every time we load the app
  reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
}
export default reactotron
console.tron = reactotron
