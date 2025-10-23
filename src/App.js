import React from "react";
import { SafeAreaView  } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login/Login"
import home from "./components/Home/home";
import Home from "./components/Home/home";

const Stack = createNativeStackNavigator();

export default props =>{
    return(
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Home />
            </NavigationContainer>
        </SafeAreaView> 
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});

