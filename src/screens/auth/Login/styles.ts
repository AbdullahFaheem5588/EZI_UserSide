import { StyleSheet } from "react-native";
import COLORS from "../../../appStyles/colors";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../../appStyles/dimentions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    bottomContainer: {
        flex: 1,
        width: SCREEN_WIDTH,
        alignItems: 'center',
        marginTop: SCREEN_HEIGHT * 0.02,
        borderTopLeftRadius: SCREEN_WIDTH * 0.1,
        borderTopRightRadius: SCREEN_WIDTH * 0.1,
        paddingVertical: SCREEN_HEIGHT * 0.05,
        elevation: 10,
        backgroundColor: COLORS.white,
    },
    dontHaveAccountText: {
        fontSize: SCREEN_WIDTH * 0.05,
        color: COLORS.limeGreen,
        textDecorationLine: 'underline',
    },
    forgetPasswordText: {
        fontSize: SCREEN_WIDTH * 0.04,
        color: COLORS.black,
        marginVertical: 10,
    },
    phoneInputContainer: {
        width: SCREEN_WIDTH * 0.9,
    },
    phoneInput: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        marginLeft: 10,
    },
    countryPickerBtn: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: 20,
    },
    loginBtn: {
        marginTop: 10,
        marginBottom: SCREEN_HEIGHT * 0.05,
        width: '90%'
    },
    passwordInput: {
        marginVertical: 10,
        width: '90%',
    },
});

export default styles;