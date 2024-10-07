import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../appStyles/dimentions";
import COLORS from "../appStyles/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({
    title,
}) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.container]}>
            <Icon name={"arrow-back-ios"} size={30} onPress={() => navigation.goBack()} color={COLORS.black} />
            <Text style={[styles.title]}>{title}</Text>
        </View>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        width: SCREEN_WIDTH,
    },
    title: {
        fontSize: SCREEN_WIDTH * 0.06,
        color: COLORS.black,
        marginLeft: SCREEN_WIDTH * 0.05,
    }
});

export default Header;