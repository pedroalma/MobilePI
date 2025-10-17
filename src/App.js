import React from "react";
import { SafeAreaView  } from "react-native-safe-area-context";
import { Text , StyleSheet} from "react-native";

export default () =>{
    return (
        <SafeAreaView style={styles.container}>
            <Text>Teste</Text>
        </SafeAreaView> 
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});