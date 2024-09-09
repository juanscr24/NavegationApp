import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { RootStackParams } from "../../routes/StackNavigator";
import { globalStyles } from "../../theme/theme";

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <Text>Menu</Text>
                </Pressable>
            )
        })
    }, [])

    return (
        <View style={globalStyles.container}>
            <PrimaryButton text="Products" onPress={() => navigation.navigate('Products')} />
            <PrimaryButton text="Setting" onPress={() => navigation.navigate('Setting')} />
        </View>
    )
}
