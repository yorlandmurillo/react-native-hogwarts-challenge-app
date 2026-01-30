import { getStorybookUI, configure } from '@storybook/react-native';
configure(() => {
  require('../src/components/Button/Button.stories');
}, module);

const StorybookUIRoot = getStorybookUI({});
export default StorybookUIRoot;