import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import DrawerNavigation from './DrawerNavigation';

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

  return(
      <PaperProvider theme={theme}>
        <NavigationContainer>
        <AuthNavigation />
          {/* {
            route.name === "Auth" ? <AuthNavigation /> : 
            <DrawerNavigation />
          } */}
        </NavigationContainer>
    </PaperProvider>
  )
}

export default Routes