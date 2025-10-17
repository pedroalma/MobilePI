import React from "react";
import { SafeAreaView  } from "react-native-safe-area-context";
import {StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import home from "./Home/home";

const Stack = createNativeStackNavigator();

export default props =>{
    return(
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="home">
                    <Stack.Screen name="home" component={home} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView> 
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});