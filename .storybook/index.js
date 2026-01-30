import { getStorybookUI, configure } from '@storybook/react-native';
console.log('Cargando Storybook...');
configure(() => {
  require('../src/components/Button/Button.stories');
}, module);

const StorybookUIRoot = getStorybookUI({});
console.log('Cargando Storybook second part...');
export default StorybookUIRoot;