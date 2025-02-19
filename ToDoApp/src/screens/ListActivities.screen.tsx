import { Image, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Activity } from "../interfaces/activity.interface";
import { FlatList } from "react-native-gesture-handler";
import { CellActivity } from "./cells/CellActivity.screen";
import { iconAdd } from "../images/global.images";
import { useState } from "react";

export default function ListActivities({ navigation }: any ) {
  const [activities, setActivities] = useState([
    { id: 1, name: "Personal", description: "Descripción larga de actividad: Actividad de pruba, puedes editar o agregar más actividades, tambien puedes eliminarlas" },
    { id: 2, name: "Pendientes", description: "Pasear al perro" },
  ]);

  const addActivity = (activity: any, isEdit: boolean) => {
    if (isEdit) {
      setActivities((prevActivities) => 
        prevActivities.map((item) => (item.id === activity.id ? activity : item))
      );
    } else {
      setActivities((prevActivities) => [...prevActivities, activity]);
    }
  }

  const deleteActivity = (id: number) => {
    setActivities((prevActivities) => 
      prevActivities.filter((activity) => activity.id !== id)
    );
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
            onEdit={() => navigation.navigate('AddActivity', { activity: item, addActivity })}
            onDelete={() => deleteActivity(item.id)}
          />
        )}/>
      <View style={globalStyles.boxBtnAdd}>
        <TouchableOpacity
          style={globalStyles.btnAdd}
          onPress={() => navigation.navigate('AddActivity', { activity: null,  addActivity })}>
          <Image
            source={ iconAdd }
            style={globalStyles.btnIcon}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}