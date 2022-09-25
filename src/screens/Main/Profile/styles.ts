import { StyleSheet } from "react-native";
import AppColors from "../../../utils/colors";
import { Height, Width } from "../../../utils/dimensions";

const styles = StyleSheet.create({
    profileImage : {
        width : Height(20),
        height : Height(20),
        borderRadius : Width(50),
        resizeMode : "cover"
    },
    profileImageWrapper : {
        width : Height(21),
        height : Height(21),
        borderRadius: Width(50),
        position : "absolute",
        backgroundColor : AppColors.white,
        alignItems : "center",
        justifyContent : "center",
        alignSelf : "center",
        bottom : Height(50),
        ...AppColors.smallShadow
    },
    currentTab : {
        width : Width(40),
        backgroundColor : AppColors.white,
        borderRadius : Width(10)
    },
    tab : {
        width : Width(40),
        backgroundColor : AppColors.transparent,
        borderRadius : Width(10)
    },
})

export default styles;