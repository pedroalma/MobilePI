import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilo from '../../assets/estilo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome6';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
export default () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewContImg}>
        <View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 80,
            }} 
          >
            <Image
              source={require('../../assets/icons/logo.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginRight: 20}} onPress={() => navigation.navigate("Login")}>
          <Icon name="user" size={40} color={'black'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.textH}>Home</Text>
      <View>
        <View style={styles.viewCont}>
          <TouchableOpacity style={styles.BotaoN}  onPress={() => navigation.navigate("Atividades")}>
            <Icon3 name="tasks" color={'black'} size={40} />
            <Text style={styles.textB}>Atividades</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BotaoN} onPress={() => navigation.navigate("Horarios")}>
            <Icon name="heartbeat" color={'black'} size={40} />
            <Text style={styles.textB}>Horários</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewCont}>
          <TouchableOpacity style={styles.BotaoD} onPress={() => navigation.navigate("ReceberPro")}>
            <Icon1 name="bar-graph" color={'black'} size={40} />

            <Text style={styles.textB}>Dashboard</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewCont}>
          <TouchableOpacity style={styles.BotaoN} onPress={() => navigation.navigate("QuemSomos")}>
            <Icon2 name="people-roof" color={'black'} size={40} />
            <Text style={styles.textB}>Quem Somos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BotaoN}>
            <Icon name="phone" color={'black'} size={40} />
            <Text style={styles.textB}>Fale conosco</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textH2}>Nossa localização</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/Localização.png')} style={styles.img2} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 70,
    height: 50,
    marginTop: 10,
  },
  img2: {
    width: 420,
    height: 200,
    marginTop: 10,
    alignSelf:"center"
  },
  textH: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    fontFamily: 'Roboto-Bold',
  },
  textH2: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Roboto-Bold',
  },
  textB: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  viewContImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginLeft: 110,
    alignItems: 'center',
  },
  viewCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BotaoN: {
    height: 160,
    width: '39%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    display: 'flex',
    flexDirection: 'column',
  },
  BotaoD: {
    height: 100,
    width: '81%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});
