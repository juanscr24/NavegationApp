import { Pressable, Text } from "react-native"
import { globalStyles } from "../../theme/theme"
import { FC } from "react"

export const PrimaryButton: FC<{ onPress: () => void, text: string }> = ({ onPress, text }) => {
    return (
        <Pressable
            onPress={onPress}
            style={globalStyles.primaryButton}>
            <Text style={globalStyles.buttonText}>{text}</Text>
        </Pressable>
    )
}
