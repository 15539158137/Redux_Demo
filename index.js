/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Main from './my_redux_test/Main'
import {name as appName} from './app.json';
//App是GitHub例子的 https://github.com/NextChampion/react-native-redux-navigation-example
//main是自己的
AppRegistry.registerComponent(appName, () => Main);

