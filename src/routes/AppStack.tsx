import { NavigationContainer } from '@react-navigation/native';
import DrawerStack from './DrawerStack';
import {NativeStack, FavoritesStack} from './NativeStack';

import TabStack from './TabStack';
const AppStack = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default AppStack
