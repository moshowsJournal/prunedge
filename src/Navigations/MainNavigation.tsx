import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Main/Profile';
import Insights from '../screens/Main/Insights';

const MainStack = createNativeStackNavigator()

const MainStackNavigation = () => {
    return(
        <MainStack.Navigator screenOptions={{
            headerShown : false
        }}>
            <MainStack.Screen name="Profile" component={Profile} />
            <MainStack.Screen name="Insights" component={Insights} />
        </MainStack.Navigator>
    )
}

export default MainStackNavigation;
