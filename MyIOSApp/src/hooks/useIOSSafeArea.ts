import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIOSDevice } from './useIOSDevice';

export const useIOSSafeArea = () => {
  const insets = useSafeAreaInsets();
  const device = useIOSDevice();

  const safeAreaStyle = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  const safeAreaVerticalStyle = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  };

  const safeAreaHorizontalStyle = {
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  const safeAreaTopStyle = {
    paddingTop: insets.top,
  };

  const safeAreaBottomStyle = {
    paddingBottom: insets.bottom,
  };

  const safeAreaLeftStyle = {
    paddingLeft: insets.left,
  };

  const safeAreaRightStyle = {
    paddingRight: insets.right,
  };

  // iOS-specific safe area calculations
  const statusBarHeight = device.hasNotch ? insets.top : 20;
  const navigationBarHeight = 44;
  const tabBarHeight = device.hasHomeButton ? 49 : 83;
  const bottomButtonHeight = device.hasHomeButton ? 0 : 34;

  // Content area calculations
  const contentHeight = device.screenHeight - insets.top - insets.bottom;
  const availableHeight = contentHeight - navigationBarHeight - tabBarHeight;

  return {
    insets,
    safeAreaStyle,
    safeAreaVerticalStyle,
    safeAreaHorizontalStyle,
    safeAreaTopStyle,
    safeAreaBottomStyle,
    safeAreaLeftStyle,
    safeAreaRightStyle,
    statusBarHeight,
    navigationBarHeight,
    tabBarHeight,
    bottomButtonHeight,
    contentHeight,
    availableHeight,
    hasNotch: device.hasNotch,
    hasHomeButton: device.hasHomeButton,
    hasDynamicIsland: device.hasDynamicIsland,
  };
}; 