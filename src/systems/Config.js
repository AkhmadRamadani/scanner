import React from 'react'
// import { AsyncStorage } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
 
// ********************************************************************************
// * Import Screen
// ********************************************************************************

import MainScreen from "../controllers/MainScreen";
import LoginScreen from "../controllers/LoginScreen";
import AbsenScreen from "../controllers/AbsenScreen";

// ********************************************************************************
// * Main Drawer Navigator
// ********************************************************************************

export const MainNavigator = (auth) => {
    return createAppContainer(
        createStackNavigator({
            
            Main: {
                screen: MainScreen
            },
            Login: {
                screen: LoginScreen
            },
            Absen: {
                screen: AbsenScreen
            }

        },{
            defaultNavigationOptions: {
                header: null
            },
            initialRouteName: 'Main'
        })
    )
}