import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    card: {
        backgroundColor: "rgba(14,15,16, .95)",
        borderColor: "rgba(14,15,16, .95)",
        borderRadius: 7,
        width: "90%",
        height: 250,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30
    },

    view: {
        width: 270,
        marginLeft: 23
    },

    button: {
        borderRadius: 30,
        marginTop: 10,
        width: 270,
        height: 40,
        marginLeft: -13
    }

});
