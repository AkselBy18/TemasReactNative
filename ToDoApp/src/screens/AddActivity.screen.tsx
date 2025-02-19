import { Image, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { iconAdd, iconBack, iconDone } from "../images/global.images";
import { TextInput } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import DialogWarning from "./DialogWarning.scree";

export default function AddActivity({route, navigation}: any) {
    const { activity, addActivity } = route.params || {};
    const [name, setName] = useState(activity?.name || '');
    const [description, setDescription] = useState(activity?.description || '');
    const [errorMessage, setErrorMessage] = useState('');
    const [showDialogWarning, setShowDialogWarning] = useState(false);

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


    const handleSave = () => { 
        if (!validateInputs()) { return }

        if (activity) {
            const updateActivity = { ...activity, name, description };
            addActivity(updateActivity, true);
        } else {
            const newActivity = { id: Math.random(), name, description };
            addActivity(newActivity, false);
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
                        style={globalStyles.btnIcon}/>
                </TouchableOpacity>
                <Text style={globalStyles.title}>
                    { activity ? 'Actualizar actividad' : 'Agregar Actividad'}
                </Text>
            </View>
            <View style={{padding: 15, width: "100%",}}>

                <Text style={globalStyles.label}>Nombre:</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder=""
                    placeholderTextColor="#9b9da3"
                    value={name}
                    onChangeText={setName}/>

                <Text style={globalStyles.label}>Descripción:</Text>
                <TextInput
                    style={[globalStyles.input, globalStyles.textArea]}
                    placeholder=""
                    placeholderTextColor="#9b9da3"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}/>
            </View>

            <View style={globalStyles.boxBtnAdd}>
                <TouchableOpacity
                    onPress={handleSave}
                    style={globalStyles.btnAdd}>
                    <Image
                    source={ iconDone }
                    style={globalStyles.btnIcon}/>
                </TouchableOpacity>
            </View>
            <DialogWarning
                message={errorMessage}
                show={showDialogWarning}
                onClose={() => setShowDialogWarning(false)}/>
        </SafeAreaView>
    );
}