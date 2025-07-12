/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./MyIOSApp/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // iOS system colors
        'ios-blue': '#007AFF',
        'ios-green': '#34C759',
        'ios-indigo': '#5856D6',
        'ios-orange': '#FF9500',
        'ios-pink': '#FF2D92',
        'ios-purple': '#AF52DE',
        'ios-red': '#FF3B30',
        'ios-teal': '#5AC8FA',
        'ios-yellow': '#FFCC00',
        'ios-gray': '#8E8E93',
        'ios-gray2': '#AEAEB2',
        'ios-gray3': '#C7C7CC',
        'ios-gray4': '#D1D1D6',
        'ios-gray5': '#E5E5EA',
        'ios-gray6': '#F2F2F7',
      },
      fontFamily: {
        'ios-system': ['-apple-system', 'SF Pro Display', 'SF Pro Text', 'system-ui'],
      },
      spacing: {
        'ios-safe': '44px', // iOS safe area
      }
    },
  },
  plugins: [],
} 