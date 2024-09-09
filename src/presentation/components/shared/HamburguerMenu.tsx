import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable } from 'react-native'
import IconComponent from './IconComponent'
import { globalColors } from '../../theme/theme'

export const HamburguerMenu = () => {

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable style={{ marginLeft: 5 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <IconComponent name='menu' color={globalColors.primary} />
                </Pressable>
            )
        })
    }, [])


    return (
        <></>
    )
}
