import { Image, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Activity } from "../interfaces/activity.interface";
import { FlatList } from "react-native-gesture-handler";
import { CellActivity } from "./cells/CellActivity.screen";
import { iconAdd } from "../images/global.images";

export default function ListActivities({ navigation }: any ) {

  const activities: Activity[] = [
    { id: 1, name: "Personal", description: "Descripción larga de actividad: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, iusto doloremque architecto enim harum deleniti ad amet, est asperiores maiores dolorum! Quisquam sint impedit placeat dicta error molestias consequatur cupiditate!" },
    { id: 2, name: "Pendientes", description: "Pasear al perro" },
  ];

  const clickCell = (activity: Activity) => {
    console.log("click", activity);
    
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={[globalStyles.centerV,]}>
        <Text style={globalStyles.title}>
          Lista de Actividades
        </Text>
      </View>
      <FlatList
        style={{width: "95%",}}
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <CellActivity
            activity={item}
            index={index+1}
            onPress={() => clickCell(item)}
          />
        )}/>
      <View style={globalStyles.boxBtnAdd}>
        <TouchableOpacity
          style={globalStyles.btnAdd}
          onPress={() => navigation.navigate('AddActivity')}>
          <Image
            source={ iconAdd }
            style={globalStyles.btnIcon}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}