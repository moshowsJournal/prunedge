import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStackNavigation from './MainNavigation';
import TabBar from '../utils/TabBar';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown : false
            }} 
            tabBar={(props : any)=> <TabBar {...props}/>}
        >
            <Tab.Screen name="Main" component={MainStackNavigation} />
        </Tab.Navigator>
    )
}

export default BottomNavigation;