import { Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global.style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddActivity({navigation}: any) {
    return (
        <SafeAreaView style={[globalStyles.containerList, {flex: 1}]}>
            <View style={[globalStyles.row]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ListActivities')}>
                    <Text style={globalStyles.title}>Back</Text>
                </TouchableOpacity>
                <Text style={globalStyles.title}>
                    Agregar Actividad
                </Text>
            </View>
        </SafeAreaView>
    );
} 