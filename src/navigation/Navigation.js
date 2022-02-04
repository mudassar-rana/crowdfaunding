
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard/Dashboard.js';
import Login from '../screens/login/Login'
import Inciar from '../screens/iniciar/Iniciar'
import Abrir from '../screens/abrir/AbrirCuenta'
import Ingresa from '../screens/ingresa/Ingresa'
import Invertir from '../screens/invertir/Invertir'
import SideBar from '../commonComponent/sideBar/SideBar'

//stack screens
const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="dashboard" component={Dashboard} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="inciar" component={Inciar} />
                <Stack.Screen name="abrir" component={Abrir} />
                <Stack.Screen name="ingresa" component={Ingresa} />
                <Stack.Screen name="invertir" component={Invertir} />
                <Stack.Screen name="sidebar" component={SideBar} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default StackNavigator;

