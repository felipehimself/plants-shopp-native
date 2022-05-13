import { createDrawerNavigator } from '@react-navigation/drawer';
import { ReactNode } from 'react';
import { Ionicons } from '@expo/vector-icons';
import TabStack from './TabStack';
import Favorites from '../screens/Favorites';
import GlobalStyles from '../constants/GlobalStyles';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerTitle: '',
        headerShadowVisible: false,
        headerStyle: { backgroundColor: GlobalStyles.colors.colorWhiteLight },
        drawerActiveBackgroundColor: GlobalStyles.colors.primaryColor,
        drawerActiveTintColor: GlobalStyles.colors.colorWhite,
        drawerLabelStyle: { fontSize: 16, marginLeft: -14 },
        headerTintColor: GlobalStyles.colors.colorGrayMed,
        headerLeft: () => (
          <Ionicons
            name='menu'
            size={30}
            color={GlobalStyles.colors.colorGrayMed}
            style={{ marginLeft: 20 }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      })}
    >
      <Drawer.Screen
        name='Home'
        component={TabStack}
        options={({ navigation }) => ({
          headerRight: () => (
            <Ionicons
              name='notifications-outline'
              size={26}
              color={GlobalStyles.colors.colorGrayMed}
              style={{ marginRight: 20 }}
            />
          ),
          drawerIcon: ({ color, size }) => (
            <Ionicons name='home' size={18} color={color} />
          ),
        })}
      />
      <Drawer.Screen
        name='Favorites'
        component={Favorites}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
