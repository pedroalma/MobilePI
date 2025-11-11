import React from "react";
import { SafeAreaView  } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./components/Login/Login"
import Home from "./components/Home/home";
import NossosHorarios from "./components/NossosHorarios";
import QuemSomos from "./components/QuemSomos/QuemSomos";
import Splash from "./components/Splash/Splash";
import Receber from "./components/Receber produtos/index"
import StackNav from "./navegacao/StackNav";
import ReceberPro from "./components/Receber produtos/index"


export default props =>{
    return(
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <StackNav/>
            </NavigationContainer>
        </SafeAreaView> 
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});

