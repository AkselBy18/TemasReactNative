import { Image, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global.style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListActivities({ navigation }: any ) {

  return (
    <SafeAreaView style={globalStyles.containerList}>
      <View style={[globalStyles.centerV,]}>
        <Text style={globalStyles.title}>
          Lista de Actividades
        </Text>
      </View>
      <View style={globalStyles.boxBtnAdd}>
        <TouchableOpacity
          style={globalStyles.btnAdd}
          onPress={() => navigation.navigate('AddActivity')}>
          <Image
            source={ require('../assets/icons/icon-add.png') }
            style={globalStyles.btnIcon}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}