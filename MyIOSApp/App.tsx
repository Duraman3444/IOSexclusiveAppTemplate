import { StatusBar } from 'expo-status-bar';
import { Text, View, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-white items-center justify-center">
        <Text className="text-lg font-bold text-gray-900">Hello iOS App! 🍎</Text>
        <Text className="text-blue-500 mt-2">Optimized for iOS devices 📱</Text>
        <Text className="text-gray-600 mt-1 text-sm">
          Running on {Platform.OS} {Platform.Version}
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}
