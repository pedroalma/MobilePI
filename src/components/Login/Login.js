import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgLogo}
        source={require('../../assets/icons/logo.png')}
      />
      <Text style={styles.txtTitulo}>Login</Text>

      <View style={styles.boxInput}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail:"
          maxLength={100}
          placeholderTextColor="#1D2D2E"
        />

        <TextInput
          style={styles.input}
          placeholder="Insira sua senha:"
          maxLength={12}
          secureTextEntry={true}
          placeholderTextColor="#1D2D2E"
        />

        <TouchableOpacity>
          <Text style={styles.linkEsqueceu}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.txtButton}>Acessar</Text>
        </TouchableOpacity>

        <View style={styles.cadastro}>
          <Text style={styles.linkCadastro}>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={styles.negrito}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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
    fontFamily: 'Roboto-Bold',
    padding: 30,
  },

  boxInput: {
    paddingVertical: 34,
    paddingHorizontal: 14,
  },

  input: {
    width: 300,
    height: 50,
    color: 'black',
    backgroundColor: '#fff',
    marginBottom: 12,
    borderColor: '#000000a4',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 8,
  },

  button: {
    width: 300,
    height: 40,
    backgroundColor: '#3fffa3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  txtButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '101026',
  },

  linkEsqueceu: {
    textAlign: 'right',
    color: '#007bff',
    marginBottom: 10,
  },

  linkCadastro: {
    color: 'red',
  },
  negrito: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  cadastro: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 8
  },
});
