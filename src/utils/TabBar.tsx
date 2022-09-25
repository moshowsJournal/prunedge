
import React, { useEffect } from 'react';
import {StyleSheet } from 'react-native';
import AppColors from './colors';
import { Container, H1, P } from './components';
import { Height, Width } from './dimensions';
import TouchableWrapper from './TouchableWrapper';

interface DrawerBarProps{
    navigation : any
}

export default function TabBar({navigation} : DrawerBarProps){
    useEffect(()=>{
    },[])
    return(
        <Container verticalAlignment='space-between' flex={1} paddingVertical={5}>
            <TouchableWrapper isText onPress={()=>null} width={70} style={styles.button}>
                {/* <Container direction='row' verticalAlignment='center'>
                    <Ionicons name="log-out" color={AppColors.black} size={Width(6)} />
                    <H1 marginLeft={2}>Sign Out</H1>
                </Container> */}
            </TouchableWrapper>
        </Container>
    )
}

const styles = StyleSheet.create({
    avatar : {
        width : Height(7),
        height : Height(7),
        backgroundColor : AppColors.gray,
        borderRadius : Width(50)
    },
    button : {
        alignSelf : "center"
    }
})