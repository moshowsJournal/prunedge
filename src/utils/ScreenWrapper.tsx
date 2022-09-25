import React from 'react';
import {SafeAreaView, StyleSheet,StatusBar,View} from 'react-native'
import { Provider } from 'react-native-paper';
import AppColors from './colors';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

interface ScreenWrapperProps {
    children? : React.ReactNode,
    barStyle? : "dark-content" | "light-content",
    backgroundColor? : string,
    wrapperStyle? : any
}


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors
    }
  }

const ScreenWrapper = ({
    children,
    barStyle = "light-content",
    backgroundColor,
    wrapperStyle
} : ScreenWrapperProps) => (
    <Provider theme={theme}>
        <View style={[styles.container,wrapperStyle]}>
            <SafeAreaView style={{backgroundColor}}
            
            />
            <StatusBar
                barStyle={barStyle}
            />
            {children}
        </View>
    </Provider>
)
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : AppColors.white
    }
})
export default ScreenWrapper;