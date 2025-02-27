import { Image, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Activity } from "../interfaces/activity.interface";
import { FlatList } from "react-native-gesture-handler";
import { CellActivity } from "./cells/CellActivity.screen";
import { iconAdd } from "../images/global.images";
import { useEffect, useState } from "react";
import { deleteActivity, getActivities } from "../database/database";

export default function ListActivities({ navigation }: any ) {
  const [activities, setActivities] = useState<Activity[]>([]);

  const loadActivities = async () => {
    try {
      const data = await getActivities();
      setActivities(data)
    } catch (error) {
      console.log('Error al cargar los datos', error);        
    }
  }

  useEffect(() => {
    const unSubscribe = navigation.addListener("focus", () => {
      loadActivities();
    })
    return unSubscribe;
  }, [navigation]);

  const removeActivity = async (id: number) => {
    await deleteActivity(id);
    await loadActivities();
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
            onEdit={() => navigation.navigate('AddActivity', { activity: item })}
            onDelete={() => removeActivity(item.id)}
          />
        )}/>
      <View style={globalStyles.boxBtnAdd}>
        <TouchableOpacity
          style={globalStyles.btnAdd}
          onPress={() => navigation.navigate('AddActivity', { activity: null })}>
          <Image
            source={ iconAdd }
            style={globalStyles.btnIcon}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}