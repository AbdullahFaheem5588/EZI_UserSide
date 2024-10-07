import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import COLORS from "../../../appStyles/colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../appStyles/dimentions";
import Button from "../../../components/Button";
import TextField from "../../../components/TextInput";

const Login = () => {
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [formattedMobileNumber, setFormattedMobileNumber] = useState("");
    const phoneInput = useRef<PhoneInput>(null);


    useEffect(() => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isPhoneValid = phoneInput.current?.isValidNumber(mobileNumber);
        const isPasswordValid = passwordRegex.test(password);

        if (isPhoneValid && isPasswordValid) {
            setIsBtnDisabled(false);
        } else {
            setIsBtnDisabled(true);
        }
    }, [formattedMobileNumber, password]);


    return (
        <View style={styles.container}>
            <Header title="Signin" />
            <View style={styles.bottomContainer}>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={mobileNumber}
                    defaultCode="PL"
                    layout="first"
                    onChangeText={(text) => {
                        setMobileNumber(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedMobileNumber(text);
                    }}
                    autoFocus
                    placeholder="Mobile Number"
                    containerStyle={styles.phoneInputContainer}
                    textContainerStyle={styles.phoneInput}
                    countryPickerButtonStyle={styles.countryPickerBtn}
                />
                <TextField
                    placeholder="Password"
                    value={password}
                    onChange={setPassword}
                    isPassword={true}
                    style={styles.passwordInput} />
                <Text style={styles.forgetPasswordText} onPress={() => navigation.navigate("MobileVerification" as never)} > Forget Password?</Text>
                <Button
                    title="Login"
                    backgroundColor={COLORS.limeGreen}
                    textColor={COLORS.white}
                    disabled={isBtnDisabled}
                    style={styles.loginBtn}
                    onPress={() => console.log("Logged In")} />
                <Text style={styles.dontHaveAccountText} onPress={() => navigation.navigate("MobileVerification" as never)}>Don't have an account?</Text>
            </View>
        </View >
    );
};

export default Login;