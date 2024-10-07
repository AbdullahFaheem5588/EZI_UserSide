import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
import COLORS from "../../../appStyles/colors";
import { useNavigation } from "@react-navigation/native";
import languages from "../../../constants/Languages";
import SelectDropdown from "react-native-select-dropdown";
import currencies from "../../../constants/Currencies";
import Dropdown from "../../../components/Dropdown";

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/logo/logo.png")} style={styles.logo} />
            <Text style={styles.heading}>Welcome Back</Text>
            <Text style={styles.subHeading}>Login to continue</Text>
            <View style={styles.bottomContainer}>
                <Button backgroundColor={COLORS.limeGreen} title={"Continue with Phone number"} textColor={COLORS.white} onPress={() => navigation.navigate("Login" as never)} style={styles.largeBtn} />
                <Button backgroundColor={COLORS.white} title={"Register"} textColor={COLORS.black} onPress={() => navigation.navigate("MobileVerification" as never)} style={styles.largeBtn} />
                <View style={styles.smallBtnContainer}>
                    <Button backgroundColor={COLORS.white} title={"Google"} textColor={COLORS.black} onPress={() => console.log("Google")} style={[styles.smallBtn, { borderRadius: 50, }]} icon={require("../../../assets/logo/google.png")} />
                    <Button backgroundColor={COLORS.white} title={"Facebook"} textColor={COLORS.black} onPress={() => console.log("Facebook")} style={[styles.smallBtn, { borderRadius: 50, }]} icon={require("../../../assets/logo/facebook.png")} />
                </View>
                <Button backgroundColor={COLORS.white} title={"Apple Login"} textColor={COLORS.black} onPress={() => console.log("Apple")} style={[styles.largeBtn, { borderRadius: 50, }]} icon={require("../../../assets/logo/apple.png")} />
                <View style={styles.pickersContainer}>
                    <Dropdown title="Select Language" data={languages} onSelect={(selectedItem) => console.log(selectedItem)} showIcon={true} />
                    <Dropdown title="Select Currency" data={currencies} onSelect={(selectedItem) => console.log(selectedItem)} showIcon={true} />
                </View>
            </View>
        </View>
    );
};

export default Welcome;