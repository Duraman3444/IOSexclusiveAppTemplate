import React from 'react';
import { View, TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';
import { IOSTheme } from '../constants/theme';
import { useIOSHaptics } from '../hooks/useIOSHaptics';

interface IOSCardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
  onPress?: () => void;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  hapticFeedback?: boolean;
  disabled?: boolean;
}

export const IOSCard: React.FC<IOSCardProps> = ({
  children,
  variant = 'elevated',
  onPress,
  style,
  contentStyle,
  hapticFeedback = true,
  disabled = false,
}) => {
  const haptics = useIOSHaptics();

  const handlePress = () => {
    if (disabled || !onPress) return;
    
    if (hapticFeedback) {
      haptics.light();
    }
    
    onPress();
  };

  const getCardStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: IOSTheme.borderRadius.card,
      overflow: 'hidden',
    };

    switch (variant) {
      case 'elevated':
        baseStyle.backgroundColor = IOSTheme.colors.secondarySystemGroupedBackground;
        baseStyle.shadowColor = '#000';
        baseStyle.shadowOffset = IOSTheme.shadows.medium.shadowOffset;
        baseStyle.shadowOpacity = IOSTheme.shadows.medium.shadowOpacity;
        baseStyle.shadowRadius = IOSTheme.shadows.medium.shadowRadius;
        baseStyle.elevation = IOSTheme.shadows.medium.elevation;
        break;
      case 'outlined':
        baseStyle.backgroundColor = IOSTheme.colors.systemBackground;
        baseStyle.borderWidth = 1;
        baseStyle.borderColor = IOSTheme.colors.separator;
        break;
      case 'filled':
        baseStyle.backgroundColor = IOSTheme.colors.secondarySystemBackground;
        break;
    }

    if (disabled) {
      baseStyle.opacity = 0.6;
    }

    return baseStyle;
  };

  const getContentStyle = (): ViewStyle => {
    return {
      padding: IOSTheme.spacing.md,
    };
  };

  const CardContent = () => (
    <View style={[getContentStyle(), contentStyle]}>
      {children}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        style={[getCardStyle(), style]}
        onPress={handlePress}
        disabled={disabled}
        activeOpacity={0.8}
      >
        <CardContent />
      </TouchableOpacity>
    );
  }

  return (
    <View style={[getCardStyle(), style]}>
      <CardContent />
    </View>
  );
}; 