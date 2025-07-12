import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { IOSDemoScreen } from './src/screens';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <IOSDemoScreen />
    </SafeAreaProvider>
  );
}
