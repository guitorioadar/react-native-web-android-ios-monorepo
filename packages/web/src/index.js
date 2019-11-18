import {AppRegistry} from 'react-native'

import App from 'components/src/App'

AppRegistry.registerComponent('web-monorepo', () => App);
AppRegistry.runApplication('web-monorepo',{
   rootTag: document.getElementById('root')
});
