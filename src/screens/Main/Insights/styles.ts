import { StyleSheet } from "react-native";
import AppColors from "../../../utils/colors";
import { Height, Width } from "../../../utils/dimensions";

const styles = StyleSheet.create({
    graph1  : {
        width : Height(20),
        height : Height(20),
        borderRadius : Width(50),
        backgroundColor : AppColors.white,
        justifyContent : "center",
        alignItems : "center"
    },
    graph2  : {
        width : Height(21),
        height : Height(21),
        borderRadius : Width(50),
        backgroundColor : AppColors.primary,
        justifyContent : "center",
        alignItems : "center"
    },
    icon : {
        width : Height(2),
        height : Height(2),
        borderRadius : Width(50)
    }
})

export default styles;