
import React, { useEffect } from 'react';
import {StyleSheet } from 'react-native';
import AppColors from './colors';
import { Container, H1, P } from './components';
import { Height, Width } from './dimensions';
import TouchableWrapper from './TouchableWrapper';
import Ionicons from "react-native-vector-icons/Ionicons"

interface TabBarProps{
    navigation : any
}

export default function TabBar({navigation} : TabBarProps){
    const [name,setName] = React.useState("Profile")
    useEffect(()=>{
    },[])
    const menus = [
        {
            name : "Profile",
            icon : "person-outline",
            route : "Profile"
        },
        {
            name : "Insights",
            icon : "analytics-outline",
            route : "Insights"
        },
        {
            name : "Chats",
            icon : "chatbubbles-outline",
            route : false
        },
        {
            name : "Settings",
            icon : "settings-outline",
            route : false
        }
    ]
    return(
        <Container horizontalAlignment='space-between' paddingVertical={2}
            direction='row'
            width={90}
            alignSelf='center'
        >
           {
               menus.map((item,i)=> <TouchableWrapper onPress={()=>{
                    setName(item.name)
                    if(item.route) navigation.navigate(item.route)
                }} 
                    style={styles.button} key={i}
                    rippleColor={AppColors.white}
                >
                <Container  backgroundColor={name === item.name ? AppColors.primary : AppColors.gray}
                    style={{
                        width : Height(6),
                        height : Height(6)
                    }}
                    borderRadius={Width(50)}
                    verticalAlignment='center'
                    horizontalAlignment='center'
                >
                    <Ionicons name={item.icon} color={name === item.name ? AppColors.white : AppColors.primary} size={Width(5)} />
                </Container>
           </TouchableWrapper>)
           }
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