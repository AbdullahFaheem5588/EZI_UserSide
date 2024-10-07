import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../appStyles/dimentions";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../appStyles/colors";

interface InputFieldProps {
    placeholder: string;
    type?: string;
    value: string;
    style?: object;
    disabled?: boolean;
    isPassword?: boolean;
    onChange?: (text: string) => void;
}

const TextField: React.FC<InputFieldProps> = ({
    placeholder,
    type = "default",
    value,
    style,
    disabled = false,
    isPassword = false,
    onChange,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View style={[style, styles.container]}>
            <TextInput
                value={value}
                onChangeText={onChange}
                editable={!disabled}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={isPassword && !showPassword}
                keyboardType={type}
            />
            {
                isPassword &&
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => setShowPassword(!showPassword)} >
                    <Icon name={!showPassword ? "eye" : "eye-off"} size={30} />
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    input: {
        height: 70,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
    },
    icon: {
        position: 'absolute',
        right: 10,
    }
});

export default TextField;