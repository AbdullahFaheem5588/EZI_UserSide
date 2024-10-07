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

interface User {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
};

const Register = () => {
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
            <Header title="Register" />
            <View style={styles.bottomContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH * 0.9 }}>
                    <TextField
                        placeholder="First Name"
                        // value={password}
                        // onChange={setPassword}
                        style={styles.smallInputs} />
                    <TextField
                        placeholder="Last Name"
                        // value={password}
                        // onChange={setPassword}
                        style={styles.smallInputs} />
                </View>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={mobileNumber}
                    defaultCode="PL"
                    layout="first"
                    disabled={true}
                    onChangeText={(text) => {
                        setMobileNumber(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedMobileNumber(text);
                    }}
                    placeholder="Mobile Number"
                    containerStyle={styles.phoneInputContainer}
                    textContainerStyle={styles.phoneInput}
                    countryPickerButtonStyle={styles.countryPickerBtn}
                />
                <TextField
                    placeholder="Password"
                    // value={password}
                    // onChange={setPassword}
                    isPassword={true}
                    style={styles.largeInputs} />
                <TextField
                    placeholder="City"
                    // value={password}
                    // onChange={setPassword}
                    style={styles.largeInputs} />
                <TextField
                    placeholder="Referal Code (Optional)"
                    // value={password}
                    // onChange={setPassword}
                    style={styles.largeInputs} />
                <Button
                    title="Continue"
                    backgroundColor={COLORS.limeGreen}
                    textColor={COLORS.white}
                    disabled={isBtnDisabled}
                    style={styles.continueBtn}
                    onPress={() => console.log("Logged In")} />
                <Text style={styles.alreadyAccountText} onPress={() => navigation.navigate("Login" as never)}>Already have an account?</Text>
            </View>
        </View >
    );
};

export default Register;