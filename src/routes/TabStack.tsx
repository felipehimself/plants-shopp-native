import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NativeStack, FavoritesStack } from './../routes/NativeStack';
import GlobalStyles from '../constants/GlobalStyles';

const Tab = createMaterialBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: GlobalStyles.colors.primaryColor,
        position: 'absolute',
        bottom: 20,
        right: 20,
        left: 20,
        elevation: 0,
        borderRadius: 10,
        height: 55,
        overflow: 'hidden',
      }}
      labeled={false}
    >
      <Tab.Screen
        name='Home'
        component={NativeStack}
        options={{
          tabBarIcon: () => (
            <Ionicons name='home-sharp' size={22} color={GlobalStyles.colors.colorWhite} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoritesStack}
        options={{
          tabBarIcon: () => <Ionicons name='heart' size={24} color={GlobalStyles.colors.colorWhite} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
