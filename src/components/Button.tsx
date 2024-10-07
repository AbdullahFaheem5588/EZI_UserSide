import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../appStyles/dimentions";
import COLORS from "../appStyles/colors";

interface ButtonProps {
    backgroundColor: string;
    textColor: string;
    title: string;
    style?: object;
    disabled?: boolean;
    icon?: any;
    onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    backgroundColor,
    textColor,
    title,
    style,
    disabled = false,
    icon,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={[styles.container,
                style,
            {
                backgroundColor: disabled ? COLORS.lightGray : backgroundColor
            }]
            }
            onPress={onPress}
            disabled={disabled}>
            {icon && <Image source={icon} style={styles.image} />}
            <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: SCREEN_HEIGHT * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SCREEN_WIDTH * 0.03,
        elevation: 3,
    },
    title: {
        fontSize: SCREEN_WIDTH * 0.05,
    },
    image: {
        height: SCREEN_HEIGHT * 0.03,
        width: SCREEN_HEIGHT * 0.03,
        resizeMode: 'contain',
        marginRight: 10,
    }
});

export default Button;