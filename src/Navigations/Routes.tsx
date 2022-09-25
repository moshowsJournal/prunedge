import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import BottomNavigation from './BottomNavigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors
  }
}

const Routes = () => {
  const route = useSelector((state : any)=>state.routeReducer)

  useEffect(() => {

  },[]);
  {console.log("ROUTES--",route)}
  return(
      <PaperProvider theme={theme}>
        <NavigationContainer>
          {
            route.name === "Auth" ? <AuthNavigation /> : 
            <BottomNavigation />
          }
        </NavigationContainer>
    </PaperProvider>
  )
}

export default Routes