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




    background : {
        height : Height(30),
        borderRadius : Width(5),
        justifyContent : "flex-end",
    },
    imageStyle : {
        borderRadius : Width(5)
    },
    contentContainerStyle : {
        alignItems : "center"
    },
    listItem : {
        width : Width(90),
       borderRadius : Width(5),
       marginBottom : Height(2)
    },
    titleContainer : {
        borderTopRightRadius : Width(3)
    },
    notification  : {
        left : Width(23),
        bottom : Height(4),
        backgroundColor : AppColors.black,
        minWidth : Width(4),
        zIndex : 1000,
        borderRadius : Width(50),
        height : Height(3),
        width : Height(3),
        justifyContent : "center",
        alignItems : "center"
    },
})

export default styles;