import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Splash from "../components/Splash";
import Home from "../components/Home";
import Login from "../components/Login";
import LoginSenha from "../components/LoginSenha";

export default props => {
    return(
        <Tab.Navigator >
            <Tab.Screen name="Splash" component={Splash}/>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Login" component={Login}/>
            <Tab.Screen name="LoginSenha" component={LoginSenha}/>
        </Tab.Navigator>
    );
}