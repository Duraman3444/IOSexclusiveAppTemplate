import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { IOSTheme } from '../constants/theme';
import { useIOSHaptics } from '../hooks/useIOSHaptics';

interface IOSButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  hapticFeedback?: boolean;
}

export const IOSButton: React.FC<IOSButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  textStyle,
  hapticFeedback = true,
}) => {
  const haptics = useIOSHaptics();

  const handlePress = () => {
    if (disabled) return;
    
    if (hapticFeedback) {
      haptics.light();
    }
    
    onPress();
  };

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: IOSTheme.borderRadius.button,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    };

    // Size styles
    switch (size) {
      case 'small':
        baseStyle.paddingHorizontal = 16;
        baseStyle.paddingVertical = 8;
        baseStyle.minHeight = 32;
        break;
      case 'medium':
        baseStyle.paddingHorizontal = 20;
        baseStyle.paddingVertical = 12;
        baseStyle.minHeight = 44;
        break;
      case 'large':
        baseStyle.paddingHorizontal = 24;
        baseStyle.paddingVertical = 16;
        baseStyle.minHeight = 56;
        break;
    }

    // Variant styles
    switch (variant) {
      case 'primary':
        baseStyle.backgroundColor = disabled ? IOSTheme.colors.quaternarySystemFill : IOSTheme.colors.systemBlue;
        break;
      case 'secondary':
        baseStyle.backgroundColor = disabled ? IOSTheme.colors.quaternarySystemFill : IOSTheme.colors.secondarySystemBackground;
        baseStyle.borderWidth = 1;
        baseStyle.borderColor = disabled ? IOSTheme.colors.separator : IOSTheme.colors.systemBlue;
        break;
      case 'destructive':
        baseStyle.backgroundColor = disabled ? IOSTheme.colors.quaternarySystemFill : IOSTheme.colors.systemRed;
        break;
      case 'ghost':
        baseStyle.backgroundColor = 'transparent';
        break;
    }

    return baseStyle;
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      fontWeight: '600',
      textAlign: 'center',
    };

    // Size styles
    switch (size) {
      case 'small':
        baseStyle.fontSize = IOSTheme.typography.footnote.fontSize;
        baseStyle.lineHeight = IOSTheme.typography.footnote.lineHeight;
        break;
      case 'medium':
        baseStyle.fontSize = IOSTheme.typography.body.fontSize;
        baseStyle.lineHeight = IOSTheme.typography.body.lineHeight;
        break;
      case 'large':
        baseStyle.fontSize = IOSTheme.typography.headline.fontSize;
        baseStyle.lineHeight = IOSTheme.typography.headline.lineHeight;
        break;
    }

    // Variant styles
    switch (variant) {
      case 'primary':
        baseStyle.color = disabled ? IOSTheme.colors.tertiaryLabel : '#FFFFFF';
        break;
      case 'secondary':
        baseStyle.color = disabled ? IOSTheme.colors.tertiaryLabel : IOSTheme.colors.systemBlue;
        break;
      case 'destructive':
        baseStyle.color = disabled ? IOSTheme.colors.tertiaryLabel : '#FFFFFF';
        break;
      case 'ghost':
        baseStyle.color = disabled ? IOSTheme.colors.tertiaryLabel : IOSTheme.colors.systemBlue;
        break;
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.6}
    >
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}; 