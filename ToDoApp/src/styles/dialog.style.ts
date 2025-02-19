import { StyleSheet } from "react-native";

export const dialog = StyleSheet.create({
    dialogView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    dialog: {
        width: '80%',
        height: 'auto',
        borderRadius: 15,
        padding: 20,
        paddingTop: 0,
        backgroundColor: '#141E46',
        alignItems: 'center',
    },
    dialogText: {
        fontSize: 16,
        color: '#FFF',

    },
    btnDone: {
        backgroundColor: '#83B4FF',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: 50,
        height: 50,
        marginTop: 15
    }
});