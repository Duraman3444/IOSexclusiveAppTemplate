# MyIOSApp - iOS-Exclusive React Native App

This is an iOS-exclusive React Native app built with Expo, TypeScript, and NativeWind.

## 🍎 iOS-Specific Features

- **iOS Human Interface Guidelines**: Follows Apple's design guidelines
- **iOS System Colors**: Uses native iOS color palette
- **iOS Haptics**: Integrated haptic feedback for iOS devices
- **iOS Safe Areas**: Proper safe area handling for all iOS devices
- **iOS Navigation**: Native iOS navigation patterns
- **iOS Typography**: Uses SF Pro Display/Text font family

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Xcode (latest version)
- iOS Simulator or iOS device
- Expo CLI

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### iOS Development

- **Run on iOS Simulator**:
  ```bash
  npm run ios:simulator
  ```

- **Run on iOS Device**:
  ```bash
  npm run ios:device
  ```

- **Build for iOS**:
  ```bash
  npm run build:ios
  ```

## 🏗️ Project Structure

```
MyIOSApp/
├── src/
│   ├── components/          # Reusable UI components
│   ├── screens/            # Screen components
│   ├── stores/             # Zustand state management
│   ├── api/               # API calls and services
│   ├── constants/         # iOS constants and theme
│   ├── utils/             # iOS-specific utilities
│   └── types/             # TypeScript type definitions
├── assets/                # Images, fonts, icons
├── ios/                   # iOS-specific native code
└── docs/                  # Documentation
```

## 🎨 Styling

This project uses NativeWind (Tailwind CSS for React Native) with iOS-specific design tokens:

- **iOS System Colors**: `ios-blue`, `ios-green`, `ios-red`, etc.
- **iOS Typography**: SF Pro Display/Text font family
- **iOS Spacing**: Standard iOS spacing values
- **iOS Components**: Pre-built iOS-style components

### Example Usage

```tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { IOSHaptics } from '../utils/ios-utils';

export const IOSButton = () => {
  const handlePress = () => {
    IOSHaptics.light();
    // Handle button press
  };

  return (
    <TouchableOpacity 
      className="ios-button"
      onPress={handlePress}
    >
      <Text className="ios-system-font text-white">
        iOS Button
      </Text>
    </TouchableOpacity>
  );
};
```

## 📱 iOS-Specific Utilities

### Haptic Feedback

```tsx
import { IOSHaptics } from '../utils/ios-utils';

// Light haptic feedback
IOSHaptics.light();

// Success notification
IOSHaptics.success();

// Selection feedback
IOSHaptics.selection();
```

### Device Detection

```tsx
import { IOSDevice } from '../utils/ios-utils';

if (IOSDevice.isPhone) {
  // Phone-specific logic
}

if (IOSDevice.hasNotch) {
  // Handle notch devices
}
```

### iOS Theme

```tsx
import { IOSTheme } from '../constants/theme';

const styles = {
  title: {
    fontSize: IOSTheme.typography.title1.fontSize,
    color: IOSTheme.colors.systemBlue,
  },
};
```

## 🔧 Development Guidelines

1. **Follow iOS HIG**: Adhere to Apple's Human Interface Guidelines
2. **Use iOS System Colors**: Prefer iOS system colors over custom colors
3. **Implement Haptic Feedback**: Use haptics for user interactions
4. **Handle Safe Areas**: Always consider safe areas for different devices
5. **Test on Real Devices**: Test on actual iOS devices when possible
6. **Accessibility**: Implement proper accessibility features (VoiceOver)

## 📦 Build & Deploy

### Development Build

```bash
npm run build:ios:development
```

### Production Build

```bash
npm run build:ios:production
```

### App Store Submission

```bash
npm run submit:ios
```

## 🧪 Testing

- Test on iOS Simulator
- Test on real iOS devices
- Test accessibility features
- Test different screen sizes (iPhone, iPad)

## 📚 Documentation

- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [React Native iOS Guide](https://reactnative.dev/docs/platform-specific-code)
- [Expo iOS Documentation](https://docs.expo.dev/workflow/ios/)

## 🤝 Contributing

1. Create a feature branch
2. Follow iOS development guidelines
3. Test on iOS devices
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🍎 iOS-Specific Notes

- This app is designed exclusively for iOS
- Uses iOS-specific APIs and design patterns
- Optimized for iOS performance and user experience
- Follows Apple App Store guidelines 