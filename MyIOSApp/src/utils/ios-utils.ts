import { Platform, Dimensions } from 'react-native';
import * as Haptics from 'expo-haptics';
import * as Device from 'expo-device';

// iOS haptic feedback utilities
export const IOSHaptics = {
  light: () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  },
  medium: () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
  },
  heavy: () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }
  },
  success: () => {
    if (Platform.OS === 'ios') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  },
  warning: () => {
    if (Platform.OS === 'ios') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    }
  },
  error: () => {
    if (Platform.OS === 'ios') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  },
  selection: () => {
    if (Platform.OS === 'ios') {
      Haptics.selectionAsync();
    }
  },
};

// iOS device detection utilities
export const IOSDevice = {
  isIOS: Platform.OS === 'ios',
  iosVersion: Platform.Version,
  deviceType: Device.deviceType,
  deviceName: Device.deviceName,
  
  // Screen dimensions
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  
  // Device type checks
  isPhone: Device.deviceType === Device.DeviceType.PHONE,
  isTablet: Device.deviceType === Device.DeviceType.TABLET,
  
  // Screen size checks
  isSmallScreen: Dimensions.get('window').width < 375,
  isLargeScreen: Dimensions.get('window').width >= 414,
  
  // iPhone model detection (approximate)
  isiPhoneSE: Dimensions.get('window').width === 320,
  isiPhone678: Dimensions.get('window').width === 375,
  isiPhone678Plus: Dimensions.get('window').width === 414,
  isiPhoneX: Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812,
  isiPhoneXR: Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896,
  isiPhoneXS: Dimensions.get('window').width === 375 && Dimensions.get('window').height === 812,
  isiPhoneXSMax: Dimensions.get('window').width === 414 && Dimensions.get('window').height === 896,
  
  // Safe area detection
  hasNotch: Dimensions.get('window').height >= 812,
  hasHomeButton: Dimensions.get('window').height < 812,
};

// iOS-specific styling utilities
export const IOSStyles = {
  // iOS system font stack
  systemFont: '-apple-system',
  
  // iOS standard shadows
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // iOS blur effects
  blurBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  
  // iOS button styles
  primaryButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  
  // iOS navigation styles
  navigationHeader: {
    backgroundColor: '#F2F2F7',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C6C6C8',
  },
  
  // iOS list styles
  listItem: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C6C6C8',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  
  // iOS form styles
  textInput: {
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
};

// iOS-specific formatters
export const IOSFormatters = {
  // Format text for iOS accessibility
  accessibilityLabel: (text: string) => {
    return text.replace(/[.,!?]/g, '');
  },
  
  // Format currency for iOS
  currency: (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  },
  
  // Format date for iOS
  date: (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  },
  
  // Format time for iOS
  time: (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  },
}; 