import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        elevation: 0,
        backgroundColor: "transparent",
        marginLeft: 10
    },
    header: {
        color: "white",
        marginLeft: Platform.OS !== "ios" ? 100 : 0 ,
        fontSize: 20,
        fontWeight: '900'
    }
})
