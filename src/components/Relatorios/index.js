import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { useFocusEffect, useRoute } from "@react-navigation/native";

export default function Relatorios() {
  const route = useRoute();
  const [tableData, setTableData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (route.params?.novoItem) {
        setTableData((prev) => [...prev, route.params.novoItem]);
      }
    }, [route.params])
  );

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={["Produto", "Peso", "Validade", "Recebimento"]}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16,  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { textAlign: "center" },
});
