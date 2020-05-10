import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  First: FirstScreen,
  Second: SecondScreen
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "YOUR APP NAME"
  }
})

export default createAppContainer(navigator)