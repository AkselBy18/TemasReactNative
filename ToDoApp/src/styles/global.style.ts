import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141E46',
        alignItems: 'center',
    },
    centerV: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    boxBtnAdd: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    btnAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#83B4FF',
        width: 60,
        height: 60,
        borderRadius: 50,
        padding: 10,
    },
    btnIcon: {
        width: 40,
        height: 40,  
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    label: {
        fontSize: 16,
        color: '#9b9da3',
        fontWeight: '300'
    },
    input: {
        backgroundColor: '#222a4d',
        color: '#fff',
        fontSize: 16,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 3
    },
    textArea: {
        height: 150,
        textAlignVertical: 'top'
    },
});