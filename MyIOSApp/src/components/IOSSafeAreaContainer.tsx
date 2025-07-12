import React from 'react';
import { View, ViewStyle, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IOSTheme } from '../constants/theme';
import { useIOSSafeArea } from '../hooks/useIOSSafeArea';
import { useIOSDevice } from '../hooks/useIOSDevice';

interface IOSSafeAreaContainerProps {
  children: React.ReactNode;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  style?: ViewStyle;
  backgroundColor?: string;
  statusBarStyle?: 'light-content' | 'dark-content' | 'default';
  statusBarHidden?: boolean;
}

export const IOSSafeAreaContainer: React.FC<IOSSafeAreaContainerProps> = ({
  children,
  edges = ['top', 'bottom', 'left', 'right'],
  style,
  backgroundColor = IOSTheme.colors.systemBackground,
  statusBarStyle = 'dark-content',
  statusBarHidden = false,
}) => {
  const safeArea = useIOSSafeArea();
  const device = useIOSDevice();

  const getContainerStyle = (): ViewStyle => {
    return {
      flex: 1,
      backgroundColor,
      ...style,
    };
  };

  const getContentStyle = (): ViewStyle => {
    const contentStyle: ViewStyle = {
      flex: 1,
    };

    // Apply safe area insets based on edges
    if (edges.includes('top')) {
      contentStyle.paddingTop = safeArea.insets.top;
    }
    if (edges.includes('bottom')) {
      contentStyle.paddingBottom = safeArea.insets.bottom;
    }
    if (edges.includes('left')) {
      contentStyle.paddingLeft = safeArea.insets.left;
    }
    if (edges.includes('right')) {
      contentStyle.paddingRight = safeArea.insets.right;
    }

    return contentStyle;
  };

  return (
    <View style={getContainerStyle()}>
      <StatusBar
        barStyle={statusBarStyle}
        hidden={statusBarHidden}
        backgroundColor={backgroundColor}
        translucent={true}
      />
      <SafeAreaView style={getContentStyle()} edges={edges}>
        {children}
      </SafeAreaView>
    </View>
  );
}; 