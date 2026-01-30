import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Button } from './Button';

storiesOf('Button', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {getStory()}
    </View>
  ))
  .add('Primary', () => (
    <Button
      title="Primary Button"
      backgroundColor="purple"
      onPress={() => console.log('Primary pressed')}
    />
  ))
  .add('Secondary', () => (
    <Button
      title="Secondary Button"
      backgroundColor="#6c5ce7"
      onPress={() => console.log('Secondary pressed')}
    />
  ))
  .add('Custom color', () => (
    <Button
      title="Custom Button"
      backgroundColor="#00b894"
      onPress={() => console.log('Custom pressed')}
    />
  ));