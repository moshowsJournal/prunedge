import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/Auth/Register';

const AuthStack = createNativeStackNavigator()

const AuthNavigation = () => {
    return(
        <AuthStack.Navigator
            screenOptions={{
                headerShown : false
            }}
        >
            <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation