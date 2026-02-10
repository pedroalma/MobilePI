import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, Alert } from "react-native";
import { Table, Row } from "react-native-table-component";
import { useFocusEffect, useRoute, useNavigation } from "@react-navigation/native";
import Orientation from 'react-native-orientation-locker';
import RNHTMLtoPDF from "react-native-html-to-pdf";
import FileViewer from "react-native-file-viewer";
import RNFS from "react-native-fs";

export default function Relatorios() {
  useFocusEffect(useCallback(() => {
    Orientation.lockToLandscape();

    return () => {
      // Opcional: liberar o bloqueio quando sair da tela
      Orientation.lockToPortrait();
    };
  }, []));
  const route = useRoute();
  const navigation = useNavigation();

  const [tableData, setTableData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState([]);

  // --- LARGURAS FIXAS (Crucial para o alinhamento) ---
  const widthArr = [90, 60, 100, 160, 100, 80, 140, 100];

  // ... (Mantenha suas funções: getTurno, useFocusEffect, startEditing, saveEditing, etc.) ...
  // Vou omitir as funções lógicas para focar no layout, pois elas não mudaram.
  // Certifique-se de manter o código de lógica (getTurno, deleteRow, gerarPDF, etc) aqui.

  // --- Exemplo rápido das funções necessárias para o render não quebrar ---
  const getTurno = () => { const h = new Date().getHours(); return h < 12 ? "Manhã" : h < 18 ? "Tarde" : "Noite"; };
  const turnoAtual = getTurno();

  useFocusEffect(useCallback(() => {
      if (route.params?.novoItem) {
        setTableData((prev) => [...prev, [...route.params.novoItem, turnoAtual]]);
        navigation.setParams({ novoItem: null });
      }
  }, [route.params]));

  const startEditing = (i) => { setEditingIndex(i); setEditData([...tableData[i]]); };
  const cancelEditing = () => { setEditingIndex(null); setEditData([]); };
  const saveEditing = () => {
    const n = [...tableData]; n[editingIndex] = editData;
    setTableData(n); setEditingIndex(null); setEditData([]);
  };
  const deleteRow = (i) => setTableData((p) => p.filter((_, x) => x !== i));

  // --- Função gerarPDF implementada e corrigida ---
  const gerarPDF = async () => {
    try {
      // Verifique se há dados na tabela
      if (tableData.length === 0) {
        Alert.alert('Erro', 'Não há dados para gerar o PDF.');
        return;
      }

      // Calcule os totais dentro da função para garantir precisão
      const totalWeight = tableData.reduce((sum, row) => {
        const raw = row?.[1] ?? '0';
        const num = parseFloat(String(raw).replace(',', '.').replace(/[^\d.-]/g, ''));
        return sum + (isNaN(num) ? 0 : num);
      }, 0);
      const totalWeightFormatted = totalWeight.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      const totalQuantity = tableData.reduce((sum, row) => {
        const raw = row?.[2] ?? '0';
        const num = parseFloat(String(raw).replace(',', '.').replace(/[^\d.-]/g, ''));
        return sum + (isNaN(num) ? 0 : num);
      }, 0);
      const totalQuantityFormatted = totalQuantity.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      // Construa o HTML do PDF (tabela com 7 colunas: Produto, Peso, Quantidade, Validade, Descrição, Recebimento, Turno)
      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              h1 { text-align: center; color: #333; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #000; padding: 8px; text-align: center; }
              th { background-color: #c1f0c1; font-weight: bold; }
              p { font-size: 16px; margin-top: 10px; }
            </style>
          </head>
          <body>
            <h1>Relatório de Doações</h1>
            <table>
              <tr>
                <th>Produto</th>
                <th>Peso</th>
                <th>Quantidade</th>
                <th>Validade</th>
                <th>Descrição</th>
                <th>Recebimento</th>
                <th>Turno</th>
              </tr>
              ${tableData.map(row => `
                <tr>
                  <td>${row[0] || ''}</td>
                  <td>${row[1] || ''}</td>
                  <td>${row[2] || ''}</td>
                  <td>${row[3] || ''}</td>
                  <td>${row[4] || ''}</td>
                  <td>${row[5] || ''}</td>
                  <td>${row[6] || ''}</td>
                </tr>
              `).join('')}
            </table>
            <p><strong>Total de produtos doados:</strong> ${tableData.length}</p>
            <p><strong>Total de peso:</strong> ${totalWeightFormatted} kg</p>
            <p><strong>Total de quantidade:</strong> ${totalQuantityFormatted}</p>
          </body>
        </html>
      `;

      // Opções para gerar o PDF
      const options = {
        html: htmlContent,
        fileName: 'Relatorio_Doacoes',
        directory: 'Documents',  // Salva na pasta Documents do app
      };

      // Gere o PDF
      const file = await RNHTMLtoPDF.convert(options);
      console.log('PDF gerado em:', file.filePath);  // Para debug

      // Abra o PDF com o visualizador
      await FileViewer.open(file.filePath);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      Alert.alert('Erro', 'Falha ao gerar o PDF. Verifique permissões e tente novamente.');
    }
  };

  // Calcule os totais para exibição na tela (fora da função para performance)
  const totalWeight = tableData.reduce((sum, row) => {
    const raw = row?.[1] ?? '0';
    const num = parseFloat(String(raw).replace(',', '.').replace(/[^\d.-]/g, ''));
    return sum + (isNaN(num) ? 0 : num);
  }, 0);
  const totalWeightFormatted = totalWeight.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const totalQuantity = tableData.reduce((sum, row) => {
    const raw = row?.[2] ?? '0';
    const num = parseFloat(String(raw).replace(',', '.').replace(/[^\d.-]/g, ''));
    return sum + (isNaN(num) ? 0 : num);
  }, 0);
  const totalQuantityFormatted = totalQuantity.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Scroll Horizontal para a tabela inteira */}
      <ScrollView horizontal={true}>
        <View>
         
          {/* --- TABELA 1: APENAS CABEÇALHO --- */}
          <Table borderStyle={{ borderWidth: 1, borderColor: '#000' }}>
            <Row
              data={["Produto", "Peso","Quantidade", "Validade", "Descrição", "Recebimento", "Turno", "Ações"]}
              widthArr={widthArr}
              style={styles.head}
              textStyle={styles.textHead}
            />
          </Table>

          {/* --- SCROLL VERTICAL PARA OS DADOS --- */}
          <ScrollView style={styles.dataWrapper}>
           
            {/* --- TABELA 2: CORPO DOS DADOS --- */}
            {/* O segredo é colocar outra <Table> AQUI DENTRO */}
            <Table borderStyle={{ borderWidth: 1, borderColor: '#000' }}>
              {tableData.map((row, index) => (
                <Row
                  key={index}
                  widthArr={widthArr}
                  style={[styles.row, index % 2 && { backgroundColor: '#f1f8ff' }]} // Zebra style leve
                  textStyle={styles.text}
                  data={
                    editingIndex === index ? [
                      <TextInput style={styles.input} value={editData[0]} onChangeText={(t) => {let d=[...editData]; d[0]=t; setEditData(d)}} />,
                      <TextInput style={styles.input} value={editData[1]} onChangeText={(t) => {let d=[...editData]; d[1]=t; setEditData(d)}} />,
                      <TextInput style={styles.input} value={editData[2]} onChangeText={(t) => {let d=[...editData]; d[2]=t; setEditData(d)}} />,
                      <TextInput style={styles.input} value={editData[3]} onChangeText={(t) => {let d=[...editData]; d[3]=t; setEditData(d)}} />,
                      <TextInput style={styles.input} multiline value={editData[4]} onChangeText={(t) => {let d=[...editData]; d[4]=t; setEditData(d)}} />,
                      <TextInput style={styles.input} value={editData[5]} onChangeText={(t) => {let d=[...editData]; d[5]=t; setEditData(d)}} />,
                      <Text style={styles.text}>{editData[6]}</Text>,
                      <View style={styles.buttonContainer}>
                         <TouchableOpacity onPress={saveEditing} style={styles.btnSalvar}><Text style={styles.btnText}>✔</Text></TouchableOpacity>
                         <TouchableOpacity onPress={cancelEditing} style={styles.btnCancelar}><Text style={styles.btnText}>✖</Text></TouchableOpacity>
                      </View>
                    ] : [
                      row[0], row[1], row[2], row[3], row[4], row[5], row[6],
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => startEditing(index)} style={styles.btnEditar}><Text style={styles.btnText}>Editar</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteRow(index)} style={styles.btnExcluir}><Text style={styles.btnText}>Excluir</Text></TouchableOpacity>
                      </View>
                    ]
                  }
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Totais: quantidade e peso */}
      <View style={{ marginTop: 12, alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
          Total de produtos doados: {tableData.length}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 6 }}>
          Total de peso: {totalWeightFormatted} kg
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 6 }}>
          Total de quantidade: {totalQuantityFormatted}
        </Text>
      </View>

      <TouchableOpacity style={styles.pdfButton} onPress={gerarPDF}>
        <Text style={styles.pdfText}>📄 Gerar PDF</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },

  head: {
    height: 50,
    backgroundColor: "#c1f0c1" // Verde claro igual da imagem
  },
  textHead: { textAlign: "center", fontWeight: 'bold', color: '#000' },

  // Ajuste para colar a tabela de baixo na de cima sem borda dupla
  dataWrapper: { marginTop: -1 },

  row: {
    minHeight: 45, // Altura mínima para caber os botões
    backgroundColor: '#fff'
  },
  text: { textAlign: "center", margin: 6, color: '#333' },

  input: {
    borderWidth: 1, borderColor: "#007bff", // Borda azul no input ao editar
    padding: 0, margin: 2,
    width: '95%', textAlign: "center", backgroundColor: '#fff',
    height: 35, borderRadius: 4
  },

  // Botões
  buttonContainer: { flexDirection: "row", justifyContent: "center", alignItems: 'center', width: '100%', paddingVertical: 2 },
  btnEditar: { backgroundColor: "#007bff", paddingVertical: 5, paddingHorizontal: 8, borderRadius: 4, marginRight: 4 },
  btnExcluir: { backgroundColor: "#007bff", paddingVertical: 5, paddingHorizontal: 8, borderRadius: 4 },
  btnSalvar: { backgroundColor: "#28a745", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 4, marginRight: 4 },
  btnCancelar: { backgroundColor: "#dc3545", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 4 },
  btnText: { color: "#fff", fontSize: 11, fontWeight: 'bold' },

  pdfButton: {
    marginTop: 15, backgroundColor: "#215727",
    padding: 15, borderRadius: 10, alignItems: "center",
  },
  pdfText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});