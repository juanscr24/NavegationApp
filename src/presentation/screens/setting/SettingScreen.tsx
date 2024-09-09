import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

export const SettingScreen = () => {

    const navigator = useNavigation()

    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 10 }}>Setting Screen</Text>

            <PrimaryButton
                text='Back'
                onPress={() => navigator.goBack()}
            />

            <PrimaryButton
                text='Home'
                onPress={() => navigator.dispatch(StackActions.popToTop)}
            />
        </View>
    )
}
