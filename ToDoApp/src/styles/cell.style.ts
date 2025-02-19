import { StyleSheet } from 'react-native';

export const cell = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        paddingRight: 8
    },
    actions: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell: {
        backgroundColor: '#222a4d',
        borderRadius: 10,
        marginBottom: 5,
        padding: 8
    },
    title: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    grayText: {
        color: '#9b9da3',
        fontSize: 16
    },
    btnAction: {
        width: 50,
        height: 50,
        borderRadius: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginRight: 5
    },
    btnEdit: {
        backgroundColor: '#7886C7'
    },
    btnDelete: {
        backgroundColor: '#AE445A'
    },
    icon: {
        width: 30,
        height: 30
    }
});