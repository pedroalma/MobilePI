import React, { useState } from "react";
import { TextInput, View, StyleSheet, Image } from "react-native";

export default props => {
    const [text, setEnviar] = useState("")
    const [, set] = useState("")
    return (
        <View style={styles.container}>
            <View></View>
            <View style={{ alignItems: "center", gap: 50, justifyContent: "center" }}>
                <TextInput  placeholder="Nome do Produto" style={styles.inputNomeprod} maxLength={100}/>
            </View>
            <View style={{ alignItems: "center", gap: 10, justifyContent: "center", flexDirection:"row" }}>
                <TextInput  placeholder="Nome do Produto" style={styles.inputs} maxLength={100}/>
                <TextInput  placeholder="Nome do Produto" style={styles.inputs} maxLength={100}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    inputNomeprod: {
        borderWidth: 1,
        borderColor: "#000",
        width: 250,
        borderRadius:8
    },
    inputPeso: {
        borderWidth: 1,
        borderColor: "#000",
        width: 150,
        borderRadius:8
    },
    inputValid: {
        borderWidth: 1,
        borderColor: "#000",
        width: 150,
        borderRadius:8
    },
    
})