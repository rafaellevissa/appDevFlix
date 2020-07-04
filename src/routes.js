import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Header from './components/Header';
import Player from './pages/Player';

export default function Route(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Header" component={Header}/>
                <AppStack.Screen name="Player" component={Player}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
