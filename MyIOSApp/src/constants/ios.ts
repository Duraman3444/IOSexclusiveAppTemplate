import { Platform, Dimensions } from 'react-native';

export const IOSConstants = {
  // Device info
  isIOS: Platform.OS === 'ios',
  iosVersion: Platform.Version,
  
  // Screen dimensions
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  
  // iOS-specific spacing
  statusBarHeight: 44,
  navigationBarHeight: 44,
  tabBarHeight: 83,
  
  // iOS design tokens
  borderRadius: {
    small: 8,
    medium: 12,
    large: 16,
  },
  
  // iOS haptic feedback types
  hapticTypes: {
    light: 'light',
    medium: 'medium',
    heavy: 'heavy',
  } as const,
  
  // iOS blur types
  blurTypes: {
    light: 'light',
    dark: 'dark',
    extraLight: 'extraLight',
  } as const,
} as const; 