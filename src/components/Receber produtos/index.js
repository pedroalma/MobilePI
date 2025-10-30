import React, { useState } from "react";
import { TextInput, View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";;


export default props => {
    const [selecionaComida, setSelecionaComida] = useState();

   const [data, setData] = useState('');
   const [dataReceb, setDataReceb] = useState('');

 const handleChange = (text, setter) => {
  let cleaned = text.replace(/\D/g, '');
  if (cleaned.length > 2 && cleaned.length <= 4) {
    cleaned = cleaned.slice(0, 2) + '/' + cleaned.slice(2);
  } else if (cleaned.length > 4) {
    cleaned = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4) + '/' + cleaned.slice(4, 8);
  }
  setter(cleaned.slice(0, 10));
};

    return (
        <View style={styles.container}>
            <View style={styles.centralizaitem}>

                <View style={styles.Pickerborder}>
                    <Picker
                        selectedValue={selecionaComida}
                        onValueChange={(itemValue, itemIndex) => setSelecionaComida(itemValue)}
                        mode="dropdown"
                        dropdownIconColor="#000"
                        style={styles.Picker}
                    >
                        <Picker.Item label="Nome do Produto" value={null} />
                        <Picker.Item label="Arroz" value="Arroz" />
                        <Picker.Item label="Feijão" value="Feijão" />
                        <Picker.Item label="Macarrão" value="Macarrão" />
                        <Picker.Item label="Açucar" value="Açucar" />
                        <Picker.Item label="Café" value="Café" />

                    </Picker>
                    {selecionaComida && (
                        <Text>Você escolheu: {selecionaComida}</Text>
                    )}
                </View>
                <View style={{ alignItems: "center", gap: 45, justifyContent: "center", flexDirection: "row" }}>
                    <TextInput placeholder="Peso/Liquído" style={styles.input} maxLength={5}/>
                    <TextInput placeholder="Validade" style={styles.input} maxLength={10} keyboardType="numeric" value={data} onChangeText={(t) => handleChange(t, setData)} />
                </View>
                <View style={styles.centralizaitem}>
                    <TextInput placeholder="Descrição" style={styles.descricao} multiline={true} />
                </View>
                <View style={styles.centralizaitem}>
                    <TextInput placeholder="Data de Recebimento" style={styles.dtreceb}  maxLength={10} keyboardType="numeric" value={dataReceb} onChangeText={(t) => handleChange(t,setDataReceb)} />
                </View>
                <View style={styles.centralizaitem}>
                    <TouchableOpacity style={styles.btnconfirm}>
                        <Text style={styles.txtbtnconfirm}> Confirmar </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top:55
    },
    input: {
        borderWidth: 2,
        borderColor: "#215727",
        width: 150,
        borderRadius: 8
    },
    descricao: {
        borderWidth: 2,
        borderColor: "#215727",
        width: 350,
        height: 150,
        borderRadius: 8,
    },
    dtreceb: {
        borderWidth: 2,
        borderColor: "#215727",
        width: 350,
        height: 50,
        borderRadius: 8,
    },
    Picker: {
        height: 50,
        width: 340,
    },
    Pickerborder: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#215727",  
        borderRadius: 8
    },
    centralizaitem: {
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        gap:10
    },
    btnconfirm: {
        width: 350,
        height: 50,
        backgroundColor: "#215727",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    txtbtnconfirm: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
})