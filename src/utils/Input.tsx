import React from "react";
import { TextInput,DefaultTheme } from "react-native-paper";
import AppColors from "./colors";
import { H1 } from "./components";
import { Height, Width } from "./dimensions";
import Font_Family from "./fontFamily";
import TouchableWrapper from "./TouchableWrapper";

interface InputProps{
    placeholder? : string,
    mode? : 'outlined' | 'flat',
    inputWidth? : number,
    inputMarginTop? : number,
    height? : number,
    minHeight? : number,
    placeholderColor? : string,
    textColor? : string,
    label? : string,
    right? : React.ReactNode,
    keyboardType? : string,
    secureTextEntry? : boolean,
    onChangeText : (text : string) => void,
    value : string
}

const Input = (props : InputProps) => {
    return(
        <TextInput
            label={props.label}
            mode={props?.mode || "outlined"}
            placeholderTextColor={AppColors.gray2}
            outlineColor={AppColors.gray1}
            style={[
                {
                    backgroundColor: AppColors.gray,
                    width: props?.inputWidth ? Width(props.inputWidth) : Width(90),
                    justifyContent:'center',
                    alignSelf:'center',
                    marginTop: props?.inputMarginTop ? Height(props.inputMarginTop) : Height(2),
                    height : Height(props.height || 7),
                    fontSize : Width(4)
                }
            ]}
            theme={
                {
                    colors : {
                        primary: AppColors.primary
                    },
                    fonts: {
                      regular: {
                        fontFamily: Font_Family[700]
                      }
                    },
                    roundness : Width(3)
                  }
            }
            {...props}
        />
    )
}

export default Input;