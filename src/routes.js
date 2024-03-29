import { createAppContainer, createStackNavigator } from 'react-navigation';
import App from './App';
import Page2 from './Page2';
import Page3 from './Page3';

export default createAppContainer(
  createStackNavigator(
    {
      App,
      Page2,
      Page3,
    },
    {
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#00BFFF' },
        headerTitleStyle:{ color: '#000000'},
        headerBackTitle: null
      },
      mode: 'modal'
    }
  )
);
