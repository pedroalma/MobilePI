import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,processColor,Image} from 'react-native';
import { BarChart, PieChart } from 'react-native-charts-wrapper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default props => {
  const navigation = useNavigation();
    return (
      <View style={styles.screen}>
        <View style={styles.viewContImg}>
                <View>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      
                    }}
                  >
                    <Image
                      source={require('../../assets/icons/logo1.png')}
                      style={styles.img}
                    />
                  </TouchableOpacity>
                </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Doações do mês</Text>
          <BarChart
            style={styles.barChart}
            data={{
              dataSets: [
                {
                  label: 'Doações',
                  values: [
                    { y: 5 },
                    { y: 6 },
                    { y: 4 },
                    { y: 7 },
                    { y: 3 },
                    { y: 2 },
                  ],
                  config: {
                    color: processColor('#14532d'),
                  },
                },
              ],
            }}
            xAxis={{
              valueFormatter: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
              granularityEnabled: true,
              granularity: 1,
              position: 'BOTTOM',
              textSize: 10,
              textColor: processColor('#fff'),
            }}
            yAxis={{ left: { enabled: false }, right: { enabled: false } }}
            chartDescription={{ text: '' }}
            legend={{ enabled: false }}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.smallCard}>
            <PieChart
              style={styles.pieChart}
              data={{
                dataSets: [
                  {
                    values: [
                      { value: 40, label: 'A' },
                      { value: 30, label: 'B' },
                      { value: 30, label: 'C' },
                    ],
                    config: {
                      colors: [
                        processColor('#f87171'),
                        processColor('#facc15'),
                        processColor('#60a5fa'),
                      ],
                      valueTextSize: 0,
                    },
                  },
                ],
              }}
              legend={{ enabled: false }}
            />
            <Text style={styles.smallTitle}>mais doados</Text>
            <View style={styles.dotRow}>
              <View style={[styles.dot, { backgroundColor: '#f87171' }]} />
              <View style={[styles.dot, { backgroundColor: '#facc15' }]} />
              <View style={[styles.dot, { backgroundColor: '#60a5fa' }]} />
            </View>
          </View>

          
          <View style={styles.smallCard}>
            <PieChart
              style={styles.pieChart}
              data={{
                dataSets: [
                  {
                    values: [
                      { value: 50, label: 'X' },
                      { value: 25, label: 'Y' },
                      { value: 25, label: 'Z' },
                    ],
                    config: {
                      colors: [
                        processColor('#fde047'),
                        processColor('#86efac'),
                        processColor('#67e8f9'),
                      ],
                      valueTextSize: 0,
                    },
                  },
                ],
              }}
              legend={{ enabled: false }}
            />
            <Text style={styles.smallTitle}>local de mais doações</Text>
            <View style={styles.dotRow}>
              <View style={[styles.dot, { backgroundColor: '#fde047' }]} />
              <View style={[styles.dot, { backgroundColor: '#86efac' }]} />
              <View style={[styles.dot, { backgroundColor: '#67e8f9' }]} />
            </View>
          </View>
        </View>

      
        <View style={styles.largeCard}>
          <View style={styles.halfCardLeft}>
            <Text style={styles.label}>cestas montadas</Text>
            <Text style={styles.bigNumber}>00</Text>
          </View>
          <View style={styles.halfCardRight}>
            <Text style={styles.label}>metas de cestas</Text>
            <Text style={styles.bigNumber}>00</Text>
          </View>
        </View>

    
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cestas')}>
          <Text style={styles.buttonText}>Fazer a cesta</Text>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
    paddingVertical: 10,
  },
  viewContImg: {
    width: '90%',
    alignItems: 'center',
    marginVertical: 10,
  },
  img: {
    width: 220,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
  },
  header: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#cce3d1',
    borderRadius: 20,
  },
  menuPlaceholder: {
    width: 30,
    height: 20,
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
  card: {
    width: '90%',
    backgroundColor: '#0d9488',
    borderRadius: 10,
    padding: 10,
    elevation: 4,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  barChart: {
    height: 200,
  },
  row: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  smallCard: {
    width: '48%',
    backgroundColor: '#0d9488',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 4,
  },
  pieChart: {
    width: 120,
    height: 120,
  },
  smallTitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  dotRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  largeCard: {
    width: '90%',
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
    elevation: 4,
  },
  halfCardLeft: {
    flex: 1,
    backgroundColor: '#14532d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    height:200
  },
  halfCardRight: {
    flex: 1,
    backgroundColor: '#0d9488',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  bigNumber: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    width: '90%',
    backgroundColor: '#14532d',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
