import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View } from 'react-native';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { ButtonTabNavigator } from './ButtomTabNagivator';
import IconComponent from '../components/shared/IconComponent';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
    return (
        <Drawer.Navigator

            drawerContent={(props) => <CustomDrawerContent {...props} />}

            screenOptions={{
                headerShown: false,
                drawerType: 'slide',

                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20
                }
            }}
        >
            {/*<Drawer.Screen name="StackNavigator" component={StackNavigator} />*/}
            <Drawer.Screen options={{ drawerIcon: ({ color }) => (<IconComponent name='logo-tableau' color={color} />) }} name="Tabs" component={ButtonTabNavigator} />
            <Drawer.Screen options={{ drawerIcon: ({ color }) => (<IconComponent name='person-circle-outline' color={color} />) }} name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={{ height: 200, margin: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                <IconComponent name='person-circle-outline' size={200} color={globalColors.primary} />
            </View>
            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    )
}