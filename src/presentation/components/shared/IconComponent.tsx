import Ionicons from '@expo/vector-icons/Ionicons';
import { FC } from 'react';

const IconComponent: FC<{ name: string, size?: number, color?: string }> = ({ name, size = 30, color = 'black' }) => {
    return (
        <Ionicons name={name} size={size} color={color} />
    )
}

export default IconComponent
