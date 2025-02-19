import { Image, Text, TouchableOpacity, View } from "react-native";
import { cell } from "../../styles/cell.style";
import { useState } from "react";
import { iconDelete, iconEdit } from "../../images/global.images";

export const CellActivity = ({activity, onPress, index}: any) => {
    const [isAdminMode, setIsAdminMode] = useState(false);

    const activeEdition = () => {
        setIsAdminMode(!isAdminMode);
    }

    return (
        <TouchableOpacity onPress={activeEdition} activeOpacity={0.9}>
            <View style={cell.cell}>
                <View style={cell.container}>
                    <View style={cell.content}>
                        <View style={cell.row}>
                            <Text style={[cell.title, {marginRight: 10}]}>
                                {index}.
                            </Text>
                            <Text style={cell.title}>
                                {activity.name}
                            </Text>
                        </View>
                        <Text
                            style={cell.grayText}>
                            {activity.description}
                        </Text>
                    </View>
                    { isAdminMode &&
                        <View style={[cell.actions, cell.row]}>
                            <TouchableOpacity
                                onPress={onPress}
                                style={[cell.btnAction, cell.btnEdit]}>
                                <Image
                                    source={iconEdit}
                                    style={cell.icon}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={onPress}
                                style={[cell.btnAction, cell.btnDelete]}>
                                <Image
                                    source={iconDelete}
                                    style={cell.icon}/>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}