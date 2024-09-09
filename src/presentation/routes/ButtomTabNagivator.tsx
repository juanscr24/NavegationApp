import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { Tab1Screen } from '../screens';
import { globalColors } from '../theme/theme';
import { StackNavigator } from './StackNavigator';
import { TopTabsNavigator } from './TopTabsNavigator';
import IconComponent from '../components/shared/IconComponent';

const Tab = createBottomTabNavigator();

export const ButtonTabNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: globalColors.background,
            }}
            screenOptions={{
                tabBarActiveTintColor: globalColors.primary,
                //    headerShown:falset
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent'
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0
                }
            }}
        >
            <Tab.Screen name="Tab1" options={{ title: 'home', tabBarIcon: ({ color }) => (<IconComponent name='home' color={color} />) }} component={Tab1Screen} />
            <Tab.Screen name="Tab2" options={{ title: 'products', tabBarIcon: ({ color }) => (<IconComponent name='airplane-outline' color={color} />) }} component={TopTabsNavigator} />
            <Tab.Screen name="Tab3" options={{ title: 'profile', tabBarIcon: ({ color }) => (<IconComponent name='person-circle-outline' color={color} />) }} component={StackNavigator} />
        </Tab.Navigator>
    );
}