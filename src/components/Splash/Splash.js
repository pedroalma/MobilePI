import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ProgressBar } from "react-native-paper";


export default ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            
        }, 3000)

        return () => clearTimeout(timer)
    }, [navigation])
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/icons/logo.png')}
                style={styles.imgLogo}
            />
            <Text style={styles.txtTitulo}>Francisco De Assis</Text>
            <ProgressBar
                progress={0.5}
                color="#215727"
                indeterminate
                style={styles.barraProgresso}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imgLogo: {
    width: 170,
    height: 150,
    alignSelf: 'center',
    marginBottom: 18,
  },
  txtTitulo: {
    fontSize: 35,
    color: '#000',
    fontFamily: 'Roboto-Light',
    padding: 30,
  },
   barraProgresso: {
        width: 300,
        height: 10,
        borderRadius: 5,
        marginTop: 10,
    }
})