import { NavigationProp, useNavigation } from '@react-navigation/native'
import { FlatList, Text, View } from 'react-native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { RootStackParams } from '../../routes/StackNavigator'
import { globalStyles } from '../../theme/theme'

const products = [
    { id: 1, name: 'producto 1' },
    { id: 2, name: 'producto 2' },
    { id: 3, name: 'producto 3' },
    { id: 4, name: 'producto 4' },
    { id: 5, name: 'producto 5' },
    { id: 6, name: 'producto 6' },
]

export const ProductsScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 10, fontSize: 30 }}>Products</Text>

            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <PrimaryButton
                        onPress={() => navigation.navigate('Product', { id: item.id, name: item.name })}
                        text={item.name} />
                )}
            />

            <Text style={{ marginBottom: 10, fontSize: 30 }}>Ajustes</Text>
            <PrimaryButton
                onPress={() => navigation.navigate('Setting')}
                text='Setting'
            />
        </View>
    )
}
