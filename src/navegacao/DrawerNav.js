import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();

import Dashboard from "../components/Dashboard/index";
import CustomDrawer from "../view/CustomDrawer";



export default props => {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} 
        screenOptions={{headerShown:true,headerStyle:{ 
            elevation:0,shadowOpacity:0
            },
            }}>
            <Drawer.Screen name="Dashboard" component={Dashboard}/>
        </Drawer.Navigator>
    )
}

// export default props => {
//     return(
//         <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{headerShown:true,headerStyle:{
//             elevation:0,
//             shadowOpacity:0
//         },
//         }}>
            
//             <Drawer.Screen name="Splash" component={Splash}/>
//             <Drawer.Screen name="Home" component={Home}/>
//             <Drawer.Screen name="Login" component={Login}/>
//             <Drawer.Screen name="LoginSenha" component={LoginSenha}/>
//         </Drawer.Navigator>
//     );
// }