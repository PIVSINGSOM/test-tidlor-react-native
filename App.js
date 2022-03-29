import * as React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import Navigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import Store from './src/redux/store';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#526AFB',
    accent: '#f1c40f',
  },
};

export default function Main() {
  return (
    <Provider store={Store}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
