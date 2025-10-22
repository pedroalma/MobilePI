import React from "react";
import { View ,Text ,StyleSheet, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import estilo from "../../assets/estilo";

export default () => {
    const navigation = useNavigation();
    return(
        <View >
            <Text style={estilo.txtMedio}>Home Screen</Text>
            <Image source={require('../../assets/icons/lock.png')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    img:{
       
    }
});