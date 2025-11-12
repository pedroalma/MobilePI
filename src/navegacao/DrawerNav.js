import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();

import CustomDrawer from "../view/CustomDrawer";
import Home from "../components/Home/home";
import Splash from "../components/Splash/Splash";
import Login from "../components/Login/Login";
import home from "../components/Home/home";
import Atividades from "../components/Atividades/Atividades";
import NossosHorarios from "../components/NossosHorarios/index";
import QuemSomos from "../components/QuemSomos/QuemSomos";


export default props => {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} 
        screenOptions={{headerShown:true,headerStyle:{ 
            elevation:0,shadowOpacity:0
            },
            }}>
            <Drawer.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
            <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Drawer.Screen name="Atividades" component={Atividades}/>
            <Drawer.Screen name="NossosHorarios" component={NossosHorarios}/>
            <Drawer.Screen name="QuemSomos" component={QuemSomos}/>
        </Drawer.Navigator>
    )
}


