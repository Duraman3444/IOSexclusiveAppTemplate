// iOS-specific theme constants following Human Interface Guidelines
export const IOSTheme = {
  colors: {
    // iOS system colors
    systemBlue: '#007AFF',
    systemGreen: '#34C759',
    systemIndigo: '#5856D6',
    systemOrange: '#FF9500',
    systemPink: '#FF2D92',
    systemPurple: '#AF52DE',
    systemRed: '#FF3B30',
    systemTeal: '#5AC8FA',
    systemYellow: '#FFCC00',
    
    // iOS semantic colors
    label: '#000000',
    secondaryLabel: '#3C3C43',
    tertiaryLabel: '#3C3C43',
    quaternaryLabel: '#2C2C2E',
    
    // iOS background colors
    systemBackground: '#FFFFFF',
    secondarySystemBackground: '#F2F2F7',
    tertiarySystemBackground: '#FFFFFF',
    
    // iOS grouped background colors
    systemGroupedBackground: '#F2F2F7',
    secondarySystemGroupedBackground: '#FFFFFF',
    tertiarySystemGroupedBackground: '#F2F2F7',
    
    // iOS separator colors
    separator: '#3C3C43',
    opaqueSeparator: '#C6C6C8',
    
    // iOS fill colors
    systemFill: '#787880',
    secondarySystemFill: '#787880',
    tertiarySystemFill: '#767680',
    quaternarySystemFill: '#747480',
  },
  
  typography: {
    // iOS text styles
    largeTitle: {
      fontSize: 34,
      lineHeight: 41,
      fontWeight: '400',
    },
    title1: {
      fontSize: 28,
      lineHeight: 34,
      fontWeight: '400',
    },
    title2: {
      fontSize: 22,
      lineHeight: 28,
      fontWeight: '400',
    },
    title3: {
      fontSize: 20,
      lineHeight: 25,
      fontWeight: '400',
    },
    headline: {
      fontSize: 17,
      lineHeight: 22,
      fontWeight: '600',
    },
    body: {
      fontSize: 17,
      lineHeight: 22,
      fontWeight: '400',
    },
    callout: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: '400',
    },
    subheadline: {
      fontSize: 15,
      lineHeight: 20,
      fontWeight: '400',
    },
    footnote: {
      fontSize: 13,
      lineHeight: 18,
      fontWeight: '400',
    },
    caption1: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '400',
    },
    caption2: {
      fontSize: 11,
      lineHeight: 13,
      fontWeight: '400',
    },
  },
  
  spacing: {
    // iOS standard spacing
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    
    // iOS component spacing
    buttonHeight: 44,
    cellHeight: 44,
    navigationBarHeight: 44,
    tabBarHeight: 83,
    statusBarHeight: 44,
  },
  
  borderRadius: {
    // iOS corner radius
    small: 8,
    medium: 12,
    large: 16,
    button: 8,
    card: 12,
  },
  
  shadows: {
    // iOS shadow styles
    small: {
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    medium: {
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    large: {
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
} as const; 