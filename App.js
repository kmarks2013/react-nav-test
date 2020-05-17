import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import FormExample from './src/screens/FormExample';

const navigator = createStackNavigator({
  Home: HomeScreen,
  First: FirstScreen,
  Second: SecondScreen,
  Form: FormExample
}, {
  initialRouteName: "Form",
  defaultNavigationOptions: {
    title: "YOUR APP NAME"
  }
})

export default createAppContainer(navigator)