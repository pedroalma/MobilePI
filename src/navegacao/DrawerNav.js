import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import Splash from "../components/Splash/Splash";
import Home from "../components/Home/home";
import Login from "../components/Login/Login"

export default props => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Splash" component={Splash}/>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Login" component={Login}/>
        </Drawer.Navigator>
    );
}