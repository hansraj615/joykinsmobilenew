import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/contexts/AuthContext';

const App = () => (
  <AuthProvider>
    <NativeBaseProvider>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </NativeBaseProvider>
  </AuthProvider>
);

export default App;
