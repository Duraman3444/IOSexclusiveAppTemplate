import { useState, useEffect } from 'react';
import { Platform, Dimensions } from 'react-native';
import * as Device from 'expo-device';

export const useIOSDevice = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenData(window);
    });

    return () => subscription?.remove();
  }, []);

  const deviceInfo = {
    // Platform info
    isIOS: Platform.OS === 'ios',
    iosVersion: Platform.Version,
    
    // Device info
    deviceType: Device.deviceType,
    deviceName: Device.deviceName,
    modelName: Device.modelName,
    
    // Screen info
    screenWidth: screenData.width,
    screenHeight: screenData.height,
    
    // Device type checks
    isPhone: Device.deviceType === Device.DeviceType.PHONE,
    isTablet: Device.deviceType === Device.DeviceType.TABLET,
    
    // Screen size checks
    isSmallScreen: screenData.width < 375,
    isLargeScreen: screenData.width >= 414,
    
    // iPhone model detection (approximate)
    isiPhoneSE: screenData.width === 320,
    isiPhone678: screenData.width === 375 && screenData.height === 667,
    isiPhone678Plus: screenData.width === 414 && screenData.height === 736,
    isiPhoneX: screenData.width === 375 && screenData.height === 812,
    isiPhoneXR: screenData.width === 414 && screenData.height === 896,
    isiPhoneXS: screenData.width === 375 && screenData.height === 812,
    isiPhoneXSMax: screenData.width === 414 && screenData.height === 896,
    isiPhone11: screenData.width === 414 && screenData.height === 896,
    isiPhone11Pro: screenData.width === 375 && screenData.height === 812,
    isiPhone11ProMax: screenData.width === 414 && screenData.height === 896,
    isiPhone12: screenData.width === 390 && screenData.height === 844,
    isiPhone12Pro: screenData.width === 390 && screenData.height === 844,
    isiPhone12ProMax: screenData.width === 428 && screenData.height === 926,
    isiPhone13: screenData.width === 390 && screenData.height === 844,
    isiPhone13Pro: screenData.width === 390 && screenData.height === 844,
    isiPhone13ProMax: screenData.width === 428 && screenData.height === 926,
    isiPhone14: screenData.width === 390 && screenData.height === 844,
    isiPhone14Pro: screenData.width === 393 && screenData.height === 852,
    isiPhone14ProMax: screenData.width === 430 && screenData.height === 932,
    isiPhone15: screenData.width === 393 && screenData.height === 852,
    isiPhone15Plus: screenData.width === 430 && screenData.height === 932,
    isiPhone15Pro: screenData.width === 393 && screenData.height === 852,
    isiPhone15ProMax: screenData.width === 430 && screenData.height === 932,
    
    // Safe area detection
    hasNotch: screenData.height >= 812,
    hasHomeButton: screenData.height < 812,
    hasDynamicIsland: screenData.width === 393 || screenData.width === 430,
    
    // Orientation
    isLandscape: screenData.width > screenData.height,
    isPortrait: screenData.width <= screenData.height,
    
    // iPad detection
    isiPad: Device.deviceType === Device.DeviceType.TABLET,
    isiPadMini: Device.deviceType === Device.DeviceType.TABLET && screenData.width === 768,
    isiPadAir: Device.deviceType === Device.DeviceType.TABLET && screenData.width === 820,
    isiPadPro: Device.deviceType === Device.DeviceType.TABLET && screenData.width >= 1024,
  };

  return deviceInfo;
}; 