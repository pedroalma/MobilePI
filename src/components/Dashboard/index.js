import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default props => {
    return(
        <View style={styles.container}>
            <View style={styles.containertab}>
                <Text>aKSÇKalsk</Text>
                <Text>plapsllpaslpals</Text>
            </View>
            <View style={styles.boxmaiorVerd}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    containertab:{
        flex:1,
        flexDirection:"row",
        
        
    },
    boxmaiorVerd:{
        width:300,
        height:250,
        backgroundColor:"#019B84"
    },
    tmnhLogo:{
        width:50,
        height:50
    }
})