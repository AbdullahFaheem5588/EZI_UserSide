import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import languages from "../constants/Languages";
import COLORS from "../appStyles/colors";
import { SCREEN_WIDTH } from "../appStyles/dimentions";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface DropdownProps {
    title: string;
    data: [];
    onSelect?: (item: string) => void;
    showIcon?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
    title,
    data,
    onSelect,
    showIcon = false,
}) => {
    return (
        <SelectDropdown
            data={data}
            onSelect={onSelect}
            renderButton={(selectedItem, isOpened) => {
                return (
                    <View style={styles.dropdownButtonStyle}>
                        <Text style={styles.dropdownButtonTxtStyle}>
                            {(selectedItem && selectedItem.name) || title}
                        </Text>
                        {
                            showIcon && <Icon name="chevron-down" size={30} color={COLORS.black} />
                        }
                    </View>
                );
            }}
            renderItem={(item, index, isSelected) => {
                return (
                    <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: COLORS.lightGray }) }}>
                        <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
                    </View>
                );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
        />
    );
};

const styles = StyleSheet.create({
    dropdownButtonStyle: {
        width: SCREEN_WIDTH * 0.45,
        backgroundColor: COLORS.white,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 15,
        fontWeight: '500',
        color: COLORS.black,
        textAlign: 'center',
    },
    dropdownMenuStyle: {
        backgroundColor: COLORS.white,
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.black,
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
});

export default Dropdown;