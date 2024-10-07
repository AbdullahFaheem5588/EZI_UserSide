import { StyleSheet } from "react-native";
import COLORS from "../../../appStyles/colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../appStyles/dimentions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    logo: {
        height: SCREEN_WIDTH * 0.3,
        width: SCREEN_WIDTH * 0.3,
        resizeMode: 'contain',
        marginVertical: SCREEN_HEIGHT * 0.05,
    },
    heading: {
        fontSize: SCREEN_WIDTH * 0.12,
        fontWeight: 'bold',
        color: COLORS.black,
    },
    subHeading: {
        fontSize: SCREEN_WIDTH * 0.07,
        color: COLORS.black,
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
    largeBtn: {
        marginVertical: SCREEN_HEIGHT * 0.015,
        width: '90%'
    },
    smallBtn: {
        marginVertical: SCREEN_HEIGHT * 0.015,
        width: '48.5%'
    },
    smallBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH * 0.9,
    },
    touchableText: {
        fontSize: SCREEN_WIDTH * 0.05,
        color: COLORS.limeGreen,
        fontWeight: 'bold',
    },
    pickersContainer: {
        marginVertical: SCREEN_HEIGHT * 0.02,
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default styles;