import { Image, Text, TouchableOpacity, View } from "react-native";
import { dialog } from "../styles/dialog.style";
import { globalStyles } from "../styles/global.style";
import { iconDone } from "../images/global.images";

interface DialogWarningProps {
    message: string;
    show: boolean;
    onClose: () => void;
}

export default function DialogWarning({ message, show, onClose }: DialogWarningProps) {
    return (
        <>
            { show &&
                <View style={dialog.dialogView}>
                    <View style={dialog.dialog}>
                        <Text style={globalStyles.title}>
                            Atención    
                        </Text>
                        <Text style={dialog.dialogText}>
                            {message}
                        </Text>
                        <TouchableOpacity
                            onPress={onClose}
                            style={dialog.btnDone}>
                            <Image
                                source={iconDone}
                                style={globalStyles.btnIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </>
    );
}