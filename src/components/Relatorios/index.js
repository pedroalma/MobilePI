import React, { useState, useCallback } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, Alert } from "react-native";
import { Table, Row } from "react-native-table-component";
import { useFocusEffect, useRoute, useNavigation } from "@react-navigation/native";
import RNHTMLtoPDF from "react-native-html-to-pdf";

export default function Relatorios() {
  const route = useRoute();
  const navigation = useNavigation();

  const [tableData, setTableData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState([]);

  // --- TURNOS AUTOMÁTICOS ---
  const getTurno = () => {
    const hora = new Date().getHours();
    if (hora < 12) return "Manhã";
    if (hora < 18) return "Tarde";
    return "Noite";
  };

  const turnoAtual = getTurno();

  // --- PEGANDO NOVOS ITENS DO CADASTRO ---
  useFocusEffect(
    useCallback(() => {
      if (route.params?.novoItem) {
        const itemComTurno = [...route.params.novoItem, turnoAtual];
        setTableData((prev) => [...prev, itemComTurno]);

        navigation.setParams({ novoItem: null });
      }
    }, [route.params, navigation])
  );

  // --- INICIAR EDIÇÃO ---
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditData([...tableData[index]]);
  };

  // --- SALVAR EDIÇÃO ---
  const saveEditing = () => {
    const newData = [...tableData];
    newData[editingIndex] = editData;
    setTableData(newData);
    setEditingIndex(null);
    setEditData([]);
  };

  // --- CANCELAR EDIÇÃO ---
  const cancelEditing = () => {
    setEditingIndex(null);
    setEditData([]);
  };

  // --- EXCLUIR ITEM ---
  const deleteRow = (index) => {
    setTableData((prev) => prev.filter((_, i) => i !== index));
  };

  // --- TOTAL POR PRODUTO ---
  const totalPorProduto = {};
  tableData.forEach((row) => {
    const produto = row[0];
    totalPorProduto[produto] = (totalPorProduto[produto] || 0) + 1;
  });

  // --- TOTAL POR TURNO ---
  const totalPorTurno = { Manhã: 0, Tarde: 0, Noite: 0 };
  tableData.forEach((row) => {
    const turno = row[5];
    totalPorTurno[turno]++;
  });

  // --- GERAR PDF ---
const gerarPDF = async () => {
  try {
    const dataSaida = new Date().toLocaleDateString();
    const horaSaida = new Date().toLocaleTimeString();

    let tabelaHTML = "";
    tableData.forEach((r) => {
      tabelaHTML += `
        <tr>
          <td>${r[0]}</td>
          <td>${r[1]}</td>
          <td>${r[2]}</td>
          <td>${r[3]}</td>
          <td>${r[4]}</td>
          <td>${r[5]}</td>
        </tr>
      `;
    });

    let html = `
      <h1 style="text-align:center;">Relatório de Saída</h1>
      <p>Data de saída: <b>${dataSaida}</b> às <b>${horaSaida}</b></p>
      <hr />

      <h2>Totais por Produto</h2>
    `;

    Object.keys(totalPorProduto).forEach((k) => {
      html += `<p><b>${k}:</b> ${totalPorProduto[k]} unidade(s)</p>`;
    });

    html += `
      <h2>Totais por Turno</h2>
      <p>Manhã: ${totalPorTurno["Manhã"]}</p>
      <p>Tarde: ${totalPorTurno["Tarde"]}</p>
      <p>Noite: ${totalPorTurno["Noite"]}</p>

      <hr />

      <h2>Tabela Completa</h2>
      <table border="1" width="100%" style="border-collapse: collapse;">
        <tr>
          <th>Produto</th>
          <th>Peso</th>
          <th>Validade</th>
          <th>Descrição</th>
          <th>Recebimento</th>
          <th>Turno</th>
        </tr>
        ${tabelaHTML}
      </table>
    `;

    // === GERAR PDF ===
    const file = await RNHTMLtoPDF.convert({
      html,
      fileName: `Relatorio_${dataSaida}`,
      directory: "Documents",
    });

    // === VERIFICAR SE EXISTE ===
    const exists = await RNFS.exists(file.filePath);
    if (!exists) {
      Alert.alert("Erro", "O arquivo PDF não foi encontrado.");
      return;
    }

    // === ABRIR PDF ===
    await FileViewer.open(file.filePath, {
      showOpenWithDialog: true,
      showAppsSuggestions: true,
    });

  } catch (err) {
    console.log(err);
    Alert.alert("Erro", "Não foi possível gerar ou abrir o PDF.");
  }
};


  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row
              data={["Produto", "Peso", "Validade", "Descrição", "Recebimento", "Turno", "Ações"]}
              style={styles.head}
              textStyle={styles.text}
            />

            {tableData.map((row, index) => (
              <Row
                key={index}
                data={
                  editingIndex === index
                    ? [
                        <TextInput style={styles.input} value={editData[0]} onChangeText={(t) => setEditData([t, editData[1], editData[2], editData[3], editData[4], editData[5]])} />,
                        <TextInput style={styles.input} value={editData[1]} onChangeText={(t) => setEditData([editData[0], t, editData[2], editData[3], editData[4], editData[5]])} />,
                        <TextInput style={styles.input} value={editData[2]} onChangeText={(t) => setEditData([editData[0], editData[1], t, editData[3], editData[4], editData[5]])} />,
                        <TextInput style={styles.input} value={editData[3]} onChangeText={(t) => setEditData([editData[0], editData[1], editData[2], t, editData[4], editData[5]])} />,
                        <TextInput style={styles.input} value={editData[4]} onChangeText={(t) => setEditData([editData[0], editData[1], editData[2], editData[3], t, editData[5]])} />,
                        <Text style={styles.text}>{editData[5]}</Text>,

                        <View style={styles.buttonContainer}>
                          <TouchableOpacity onPress={saveEditing} style={styles.button}><Text style={styles.buttonText}>Salvar</Text></TouchableOpacity>
                          <TouchableOpacity onPress={cancelEditing} style={styles.button}><Text style={styles.buttonText}>Cancelar</Text></TouchableOpacity>
                        </View>,
                      ]
                    : [
                        row[0],
                        row[1],
                        row[2],
                        row[3],
                        row[4],
                        row[5],
                        <View style={styles.buttonContainer}>
                          <TouchableOpacity onPress={() => startEditing(index)} style={styles.button}><Text style={styles.buttonText}>Editar</Text></TouchableOpacity>
                          <TouchableOpacity onPress={() => deleteRow(index)} style={styles.button}><Text style={styles.buttonText}>Excluir</Text></TouchableOpacity>
                        </View>,
                      ]
                }
                textStyle={styles.text}
              />
            ))}
          </Table>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.pdfButton} onPress={gerarPDF}>
        <Text style={styles.pdfText}>📄 Gerar PDF</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  head: { height: 40, backgroundColor: "#c6f7c6" },
  text: { textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    margin: 2,
    width: 120,
    textAlign: "center",
  },
  buttonContainer: { flexDirection: "row", justifyContent: "space-around" },
  button: {
    backgroundColor: "#007bff",
    padding: 5,
    margin: 2,
    borderRadius: 5,
  },
  buttonText: { color: "#fff" },
  pdfButton: {
    marginTop: 15,
    backgroundColor: "#215727",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  pdfText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
