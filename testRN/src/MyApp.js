

import {
  TabNavigator,
} from 'react-navigation';
import ListNav from './pages/ListNav';
import List from './pages/List';
import Detail from './pages/Detail';
import Cinemas from './pages/Cinemas';
import MyMovies from './pages/MyMovies';

const MyApp = TabNavigator({
  List: {screen: ListNav},
  Cinemas: {screen: Cinemas},
  MyMovies: {screen: MyMovies},
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    // activeTintColor: '#0390EB',
    // inactiveTintColor: '#fff',
    labelStyle: {
      fontSize: 20,
      marginBottom: 18,
    },
    style: {
      backgroundColor: '#222',
    },
  }

});
//
// const MyApp = StackNavigator({
//   MyTab: {screen: MyTab},
//   Detail: {screen: Detail},
// }, {
//   headerMode: 'screen'
// });


export default MyApp;