import * as React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import {Button} from 'react-native-paper';
// import App from './src/App';

export default function Main() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </SafeAreaView>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
