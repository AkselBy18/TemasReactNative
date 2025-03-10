import { Image, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { iconAdd, iconBack, iconDone } from "../images/global.images";
import { TextInput } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import DialogWarning from "./DialogWarning.scree";
import { Activity } from "../interfaces/activity.interface";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { insertActivity, updateActivity } from "../database/database";

type RootStackParamList = {
    AddActivity: {
        activity?: Activity
    }
}

type AddActivityRouteProp = RouteProp<RootStackParamList, 'AddActivity'>;
type AddActivityNavigationProp = StackNavigationProp<RootStackParamList, 'AddActivity'>;

interface AddActivityProps {
    route: AddActivityRouteProp;
    navigation: AddActivityNavigationProp;
}

export default function AddActivity({route, navigation}: AddActivityProps) {
    const { activity } = route.params || {};
    const [name, setName] = useState<string>(activity?.name || '');
    const [description, setDescription] = useState<string>(activity?.description || '');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [showDialogWarning, setShowDialogWarning] = useState<boolean>(false);

    useEffect(() => {
        if (activity) {
            setName(activity.name);
            setDescription(activity.description);
        }
    }, [activity]);

    const validateInputs = () => {
        if (!name.trim()) {
            setErrorMessage("El nombre ingresado no es valido");
            setShowDialogWarning(true);
            return false;
        }
        if (!description.trim()) {
            setErrorMessage("La descripción ingresada no es valida");
            setShowDialogWarning(true);
            return false;
        }
        return true;
    }


    const handleSave = async () => { 
        if (!validateInputs()) { return }
        if (activity) {
            await updateActivity({...activity, name, description})
        } else {
            await insertActivity({ id: 0, name, description });
        }
        navigation.goBack();
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={[globalStyles.row, { justifyContent: 'center', alignItems: 'center', position: 'relative'}]}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{position: 'absolute', left: -100}}>
                    <Image
                        source={iconBack}
                        style={globalStyles.btnIcon}
                        />
                </TouchableOpacity>
                <Text style={globalStyles.title}>
                    { activity ? 'Actualizar actividad' : 'Agregar Actividad'}
                </Text>
            </View>
            <View style={{padding: 15, width: "100%"}}>

                <Text style={globalStyles.label}>Nombre:</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder=""
                    placeholderTextColor="#9b9da3"
                    value={name}
                    onChangeText={setName}
                    />

                <Text style={globalStyles.label}>Descripción:</Text>
                <TextInput
                    style={[globalStyles.input, globalStyles.textArea]}
                    placeholder=""
                    placeholderTextColor="#9b9da3"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}
                    />
            </View>

            <View style={globalStyles.boxBtnAdd}>
                <TouchableOpacity
                    onPress={handleSave}
                    style={globalStyles.btnAdd}>
                    <Image
                        source={ iconDone }
                        style={globalStyles.btnIcon}
                        />
                </TouchableOpacity>
            </View>
            <DialogWarning
                message={errorMessage}
                show={showDialogWarning}
                onClose={() => setShowDialogWarning(false)}
                />
        </SafeAreaView>
    );
}