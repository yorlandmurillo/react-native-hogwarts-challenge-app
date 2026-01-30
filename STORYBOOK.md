#Install Storybook

```bash
yarn add --dev @storybook/react-native@6.5.7
```

Then, create the folder `.storybook` and create `index.js` in that folder with (`.storybook/index.js`):

```js
import { getStorybookUI, configure } from '@storybook/react-native';
configure(() => {
  require('../src/components/Button/Button.stories');
}, module);

const StorybookUIRoot = getStorybookUI({});
export default StorybookUIRoot;
```

In App.tsx add

```js
const SHOW_STORYBOOK = true; // Change to false to see normal app

function App() {
    
    if (SHOW_STORYBOOK) {
        const Storybook = require('./.storybook').default;
    return <Storybook />;
  }

```


Create the Button.stories.jsx file in your normal Component folder

```js
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
```


#Init

```bash
npx react-native start --reset-cache
```

In another terminal:

```bash
npx react-native run-ios
```