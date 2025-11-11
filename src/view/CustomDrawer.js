import React from "react";
import { View, Text, StyleSheet ,TouchableOpacity} from "react-native";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
export default props =>{
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
            <View>
            <Text style={styles.title}>Little Friends</Text>
            <Text style={styles.telefone}>sac@little-frinds.com</Text>
            <Text style={styles.telefone}>+55-11-3737-3737</Text>
            </View>
            <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );  
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{ 
        fontSize:24,
        fontWeight:"bold",
        color:"#333"
    },
    telefone:{
        fontSize:18,
        color:"#666",
        marginBottom:20
    },
    button:{
        marginTop:10,
        marginBottom:20,
        padding:10,
        backgroundColor:"#4A90E2",
        borderRadius:5
    },
    buttonText:{
        color:"#FFF",
        fontSize:18
    }
});