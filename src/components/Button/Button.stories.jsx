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
      variant="primary"
      onPress={() => console.log('Primary pressed')}
    />
  ))
  .add('Secondary', () => (
    <Button
      title="Secondary Button"
      variant="secondary"
      onPress={() => console.log('Secondary pressed')}
    />
  ))
  .add('Outline', () => (
    <Button
      title="Outline Button"
      variant="outline"
      onPress={() => console.log('Outline pressed')}
    />
  ))
  .add('Disabled', () => (
    <Button
      title="Disabled Button"
      variant="primary"
      disabled={true}
      onPress={() => console.log('Should not work')}
    />
  ));