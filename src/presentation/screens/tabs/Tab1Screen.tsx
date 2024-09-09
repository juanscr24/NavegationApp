import { Text, View } from 'react-native';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';
import IconComponent from '../../components/shared/IconComponent';

export const Tab1Screen = () => {

    return (
        <View>
            <HamburguerMenu />
            <Text>Tab 1</Text>
            <IconComponent name='rocket-outline' />
        </View>
    )
}
