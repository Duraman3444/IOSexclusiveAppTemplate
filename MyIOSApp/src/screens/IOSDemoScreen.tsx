import React, { useState } from 'react';
import { ScrollView, View, Text, Alert } from 'react-native';
import {
  IOSButton,
  IOSTextInput,
  IOSCard,
  IOSSafeAreaContainer,
  useIOSHaptics,
  useIOSDevice,
  IOSTheme,
} from '../components';

export const IOSDemoScreen: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const haptics = useIOSHaptics();
  const device = useIOSDevice();

  const handleButtonPress = (type: string) => {
    Alert.alert('Button Pressed', `You pressed the ${type} button!`);
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (inputError) {
      setInputError('');
    }
  };

  const handleFormSubmit = () => {
    if (!inputValue.trim()) {
      setInputError('This field is required');
      haptics.error();
      return;
    }
    
    haptics.success();
    Alert.alert('Success', `Form submitted with value: ${inputValue}`);
  };

  const getDeviceInfo = () => {
    const info = [];
    info.push(`Device: ${device.deviceName}`);
    info.push(`Model: ${device.modelName}`);
    info.push(`Screen: ${device.screenWidth}x${device.screenHeight}`);
    info.push(`iOS Version: ${device.iosVersion}`);
    info.push(`Has Notch: ${device.hasNotch ? 'Yes' : 'No'}`);
    info.push(`Has Dynamic Island: ${device.hasDynamicIsland ? 'Yes' : 'No'}`);
    info.push(`Device Type: ${device.isPhone ? 'iPhone' : device.isTablet ? 'iPad' : 'Unknown'}`);
    return info.join('\n');
  };

  return (
    <IOSSafeAreaContainer>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: IOSTheme.spacing.md }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ marginBottom: IOSTheme.spacing.xl }}>
          <Text style={[IOSTheme.typography.largeTitle, { color: IOSTheme.colors.label }]}>
            iOS Demo
          </Text>
          <Text style={[IOSTheme.typography.body, { color: IOSTheme.colors.secondaryLabel, marginTop: IOSTheme.spacing.xs }]}>
            Showcase of iOS-specific components and features
          </Text>
        </View>

        {/* Device Info Card */}
        <IOSCard style={{ marginBottom: IOSTheme.spacing.lg }}>
          <Text style={[IOSTheme.typography.headline, { color: IOSTheme.colors.label, marginBottom: IOSTheme.spacing.sm }]}>
            Device Information
          </Text>
          <Text style={[IOSTheme.typography.body, { color: IOSTheme.colors.secondaryLabel, fontFamily: 'Menlo' }]}>
            {getDeviceInfo()}
          </Text>
        </IOSCard>

        {/* Buttons Section */}
        <IOSCard style={{ marginBottom: IOSTheme.spacing.lg }}>
          <Text style={[IOSTheme.typography.headline, { color: IOSTheme.colors.label, marginBottom: IOSTheme.spacing.md }]}>
            iOS Buttons
          </Text>
          
          <View style={{ gap: IOSTheme.spacing.sm }}>
            <IOSButton
              title="Primary Button"
              onPress={() => handleButtonPress('primary')}
              variant="primary"
            />
            
            <IOSButton
              title="Secondary Button"
              onPress={() => handleButtonPress('secondary')}
              variant="secondary"
            />
            
            <IOSButton
              title="Destructive Button"
              onPress={() => handleButtonPress('destructive')}
              variant="destructive"
            />
            
            <IOSButton
              title="Ghost Button"
              onPress={() => handleButtonPress('ghost')}
              variant="ghost"
            />
            
            <View style={{ flexDirection: 'row', gap: IOSTheme.spacing.sm }}>
              <IOSButton
                title="Small"
                onPress={() => handleButtonPress('small')}
                size="small"
                style={{ flex: 1 }}
              />
              <IOSButton
                title="Medium"
                onPress={() => handleButtonPress('medium')}
                size="medium"
                style={{ flex: 1 }}
              />
              <IOSButton
                title="Large"
                onPress={() => handleButtonPress('large')}
                size="large"
                style={{ flex: 1 }}
              />
            </View>
          </View>
        </IOSCard>

        {/* Input Section */}
        <IOSCard style={{ marginBottom: IOSTheme.spacing.lg }}>
          <Text style={[IOSTheme.typography.headline, { color: IOSTheme.colors.label, marginBottom: IOSTheme.spacing.md }]}>
            iOS Text Inputs
          </Text>
          
          <View style={{ gap: IOSTheme.spacing.md }}>
            <IOSTextInput
              label="Filled Input"
              placeholder="Enter text here"
              value={inputValue}
              onChangeText={handleInputChange}
              error={inputError}
              helperText="This is a helper text"
              variant="filled"
            />
            
            <IOSTextInput
              label="Outlined Input"
              placeholder="Enter text here"
              variant="outlined"
            />
            
            <IOSTextInput
              label="Plain Input"
              placeholder="Enter text here"
              variant="plain"
            />
            
            <View style={{ flexDirection: 'row', gap: IOSTheme.spacing.sm }}>
              <IOSTextInput
                label="Small"
                placeholder="Small input"
                size="small"
                style={{ flex: 1 }}
              />
              <IOSTextInput
                label="Large"
                placeholder="Large input"
                size="large"
                style={{ flex: 1 }}
              />
            </View>
          </View>
        </IOSCard>

        {/* Cards Section */}
        <View style={{ marginBottom: IOSTheme.spacing.lg }}>
          <Text style={[IOSTheme.typography.headline, { color: IOSTheme.colors.label, marginBottom: IOSTheme.spacing.md }]}>
            iOS Cards
          </Text>
          
          <View style={{ gap: IOSTheme.spacing.md }}>
            <IOSCard variant="elevated">
              <Text style={[IOSTheme.typography.headline, { color: IOSTheme.colors.label }]}>
                Elevated Card
              </Text>
              <Text style={[IOSTheme.typography.body, { color: IOSTheme.colors.secondaryLabel, marginTop: IOSTheme.spacing.xs }]}>
                This card has elevation and shadow
              </Text>
            </IOSCard>
            
            <IOSCard variant="outlined">
              <Text style={[IOSTheme.typography.headline, { color: IOSTheme.colors.label }]}>
                Outlined Card
              </Text>
              <Text style={[IOSTheme.typography.body, { color: IOSTheme.colors.secondaryLabel, marginTop: IOSTheme.spacing.xs }]}>
                This card has a border
              </Text>
            </IOSCard>
            
            <IOSCard variant="filled">
              <Text style={[IOSTheme.typography.headline, { color: IOSTheme.colors.label }]}>
                Filled Card
              </Text>
              <Text style={[IOSTheme.typography.body, { color: IOSTheme.colors.secondaryLabel, marginTop: IOSTheme.spacing.xs }]}>
                This card has a filled background
              </Text>
            </IOSCard>
            
            <IOSCard
              variant="elevated"
              onPress={() => Alert.alert('Card Pressed', 'This card is tappable!')}
            >
              <Text style={[IOSTheme.typography.headline, { color: IOSTheme.colors.label }]}>
                Tappable Card
              </Text>
              <Text style={[IOSTheme.typography.body, { color: IOSTheme.colors.secondaryLabel, marginTop: IOSTheme.spacing.xs }]}>
                Tap this card to see the interaction
              </Text>
            </IOSCard>
          </View>
        </View>

        {/* Haptics Section */}
        <IOSCard style={{ marginBottom: IOSTheme.spacing.lg }}>
          <Text style={[IOSTheme.typography.headline, { color: IOSTheme.colors.label, marginBottom: IOSTheme.spacing.md }]}>
            iOS Haptic Feedback
          </Text>
          
          <View style={{ gap: IOSTheme.spacing.sm }}>
            <IOSButton
              title="Light Haptic"
              onPress={() => haptics.light()}
              variant="secondary"
            />
            <IOSButton
              title="Medium Haptic"
              onPress={() => haptics.medium()}
              variant="secondary"
            />
            <IOSButton
              title="Heavy Haptic"
              onPress={() => haptics.heavy()}
              variant="secondary"
            />
            <IOSButton
              title="Success Haptic"
              onPress={() => haptics.success()}
              variant="secondary"
            />
            <IOSButton
              title="Error Haptic"
              onPress={() => haptics.error()}
              variant="secondary"
            />
            <IOSButton
              title="Selection Haptic"
              onPress={() => haptics.selection()}
              variant="secondary"
            />
          </View>
        </IOSCard>

        {/* Form Section */}
        <IOSCard style={{ marginBottom: IOSTheme.spacing.xxl }}>
          <Text style={[IOSTheme.typography.headline, { color: IOSTheme.colors.label, marginBottom: IOSTheme.spacing.md }]}>
            Sample Form
          </Text>
          
          <View style={{ gap: IOSTheme.spacing.md }}>
            <IOSTextInput
              label="Email"
              placeholder="Enter your email"
              value={inputValue}
              onChangeText={handleInputChange}
              error={inputError}
              keyboardType="email-address"
              autoCapitalize="none"
              variant="outlined"
            />
            
            <IOSButton
              title="Submit Form"
              onPress={handleFormSubmit}
              variant="primary"
            />
          </View>
        </IOSCard>
      </ScrollView>
    </IOSSafeAreaContainer>
  );
}; 