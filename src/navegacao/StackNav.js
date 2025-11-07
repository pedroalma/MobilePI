import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../components/Splash";
import Home from "../components/Home";
import Login from "../components/Login";
import LoginSenha from "../components/LoginSenha";
const Stack = createStackNavigator();

export default props => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="LoginSenha" component={LoginSenha} />
        </Stack.Navigator>
    );
}