import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, ViewStyle, TextStyle, TextInputProps } from 'react-native';
import { IOSTheme } from '../constants/theme';
import { useIOSHaptics } from '../hooks/useIOSHaptics';

interface IOSTextInputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  variant?: 'filled' | 'outlined' | 'plain';
  size?: 'small' | 'medium' | 'large';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  errorStyle?: TextStyle;
  helperTextStyle?: TextStyle;
  hapticFeedback?: boolean;
}

export const IOSTextInput: React.FC<IOSTextInputProps> = ({
  label,
  placeholder,
  error,
  helperText,
  variant = 'filled',
  size = 'medium',
  leftIcon,
  rightIcon,
  containerStyle,
  labelStyle,
  inputStyle,
  errorStyle,
  helperTextStyle,
  hapticFeedback = true,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const haptics = useIOSHaptics();

  const handleFocus = (e: any) => {
    if (hapticFeedback) {
      haptics.selection();
    }
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const getInputContainerStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: IOSTheme.borderRadius.medium,
      flexDirection: 'row',
      alignItems: 'center',
    };

    // Size styles
    switch (size) {
      case 'small':
        baseStyle.paddingHorizontal = 12;
        baseStyle.paddingVertical = 8;
        baseStyle.minHeight = 36;
        break;
      case 'medium':
        baseStyle.paddingHorizontal = 16;
        baseStyle.paddingVertical = 12;
        baseStyle.minHeight = 44;
        break;
      case 'large':
        baseStyle.paddingHorizontal = 20;
        baseStyle.paddingVertical = 16;
        baseStyle.minHeight = 56;
        break;
    }

    // Variant styles
    switch (variant) {
      case 'filled':
        baseStyle.backgroundColor = isFocused 
          ? IOSTheme.colors.tertiarySystemBackground 
          : IOSTheme.colors.secondarySystemBackground;
        break;
      case 'outlined':
        baseStyle.backgroundColor = IOSTheme.colors.systemBackground;
        baseStyle.borderWidth = 1;
        baseStyle.borderColor = error 
          ? IOSTheme.colors.systemRed 
          : isFocused 
            ? IOSTheme.colors.systemBlue 
            : IOSTheme.colors.separator;
        break;
      case 'plain':
        baseStyle.backgroundColor = 'transparent';
        baseStyle.borderBottomWidth = 1;
        baseStyle.borderBottomColor = error 
          ? IOSTheme.colors.systemRed 
          : isFocused 
            ? IOSTheme.colors.systemBlue 
            : IOSTheme.colors.separator;
        baseStyle.borderRadius = 0;
        break;
    }

    return baseStyle;
  };

  const getInputStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      flex: 1,
      color: IOSTheme.colors.label,
      fontWeight: '400',
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

    return baseStyle;
  };

  const getLabelStyle = (): TextStyle => {
    return {
      fontSize: IOSTheme.typography.footnote.fontSize,
      lineHeight: IOSTheme.typography.footnote.lineHeight,
      fontWeight: '600',
      color: IOSTheme.colors.label,
      marginBottom: IOSTheme.spacing.xs,
    };
  };

  const getErrorStyle = (): TextStyle => {
    return {
      fontSize: IOSTheme.typography.caption1.fontSize,
      lineHeight: IOSTheme.typography.caption1.lineHeight,
      color: IOSTheme.colors.systemRed,
      marginTop: IOSTheme.spacing.xs,
    };
  };

  const getHelperTextStyle = (): TextStyle => {
    return {
      fontSize: IOSTheme.typography.caption1.fontSize,
      lineHeight: IOSTheme.typography.caption1.lineHeight,
      color: IOSTheme.colors.secondaryLabel,
      marginTop: IOSTheme.spacing.xs,
    };
  };

  return (
    <View style={[containerStyle]}>
      {label && (
        <Text style={[getLabelStyle(), labelStyle]}>{label}</Text>
      )}
      
      <View style={[getInputContainerStyle()]}>
        {leftIcon && (
          <View style={{ marginRight: IOSTheme.spacing.sm }}>
            {leftIcon}
          </View>
        )}
        
        <TextInput
          style={[getInputStyle(), inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={IOSTheme.colors.tertiaryLabel}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {rightIcon && (
          <View style={{ marginLeft: IOSTheme.spacing.sm }}>
            {rightIcon}
          </View>
        )}
      </View>
      
      {error && (
        <Text style={[getErrorStyle(), errorStyle]}>{error}</Text>
      )}
      
      {helperText && !error && (
        <Text style={[getHelperTextStyle(), helperTextStyle]}>{helperText}</Text>
      )}
    </View>
  );
}; 