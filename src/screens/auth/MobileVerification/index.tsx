import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, Touchable, TouchableOpacity, Linking } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import COLORS from "../../../appStyles/colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../appStyles/dimentions";
import Button from "../../../components/Button";
import TextField from "../../../components/TextInput";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { PrivacyPolicy, TermsAndConditions } from "../../../constants/ExternalLinks";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const MobileVerification = () => {
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState("");
    const [inviteCode, setInviteCode] = useState("");
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [formattedMobileNumber, setFormattedMobileNumber] = useState("");
    const [termsAgreed, setTermsAgreed] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);


    useEffect(() => {
        if (phoneInput.current?.isValidNumber(mobileNumber) && termsAgreed) {
            setIsBtnDisabled(false);
        } else {
            setIsBtnDisabled(true);
        }
    }, [formattedMobileNumber, termsAgreed]);


    return (
        <View style={styles.container}>
            <Header title="Mobile Verification" />
            <View style={styles.bottomContainer}>
                <Image source={require("../../../assets/images/mobileVerification.png")} tintColor={COLORS.black} style={styles.image} />
                <Text style={styles.subHeading}> Please enter you mobile number</Text>
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
                    placeholder="Invite Code"
                    value={inviteCode}
                    onChange={setInviteCode}
                    style={styles.inviteCodeInput} />
                <View style={styles.termsContainer}>
                    <TouchableOpacity onPress={() => setTermsAgreed(!termsAgreed)}>
                        <Icon name={termsAgreed ? "radiobox-marked" : "radiobox-blank"} size={30} color={COLORS.limeGreen} />
                    </TouchableOpacity>
                    <Text style={styles.agreeText}>I agree to the <Text style={styles.clickAbleText} onPress={() => Linking.openURL(TermsAndConditions)}>Terms & Conditions</Text> and <Text style={styles.clickAbleText} onPress={() => Linking.openURL(PrivacyPolicy)}>Privacy Policy</Text>.</Text>
                </View>
                <Button
                    title="Continue"
                    backgroundColor={COLORS.limeGreen}
                    textColor={COLORS.white}
                    disabled={isBtnDisabled}
                    style={styles.continueBtn}
                    onPress={() => navigation.navigate("Register" as never)} />
            </View>
        </View >
    );
};

export default MobileVerification;