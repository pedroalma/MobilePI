import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Atividades() {
  const navigation = useNavigation();
  // 🔹 Lista de atividades (você pode expandir ou puxar de uma API futuramente)
  const atividades = [
    {
      id: '1',
      titulo: 'ODE AOS MORTOS (VIVOS)',
      texto:
        'Ode àqueles que se foram Ode àqueles que dizemos ter perdido A quem, por quê? Não há nenhuma resposta. Ode àqueles que se foram Ode àqueles que dizemos nos deixaram[…]',
      imagem: require('../../assets/icons/Atividades1.jpg'),
    },
    {
      id: '2',
      titulo: 'NOSSO CAMINHO',
      texto:
        'Segundo a Metafísica, cada sintoma traz uma mensagem para que a pessoa sinta, perceba e tome consciência de sua maneira de agir para que este sintoma melhore o seu corpo, isto porque, o nosso organismo possui um sistema de autorregularão que sabe o que é bom para nós em termos de atitudes e posturas mentais.…',
      imagem: require('../../assets/icons/Atividades2.jpg'),
    },
    {
      id: '3',
      titulo: 'PENSAMENTOS',
      texto:
        '“Cuidado com as voltas que o mundo dá. Hoje você lança as palavras, amanhã sente o efeito delas”. “O tempo deixa perguntas, mostra respostas, esclarece dúvidas, mas, acima de tudo, o tempo traz verdades” “Transformar um medo em curiosidade é um dom”. C.R. “Planto amor para reflorestar o mundo”. B.M. “Acrescente em sua vida sal,…',
      imagem: require('../../assets/icons/Atividades3.jpg'),
    },
    {
      id: '4',
      titulo: 'JESUS E A PARÁBOLA DOS LAVRADORES MAUS OU DOS RENDEIROS INFIÉIS',
      texto:
        'Jesus estava no templo em Jerusalém, antes da Páscoa, aquela em que ele seria preso e morto, pregando para a população, quando alguns Sacerdotes e Anciãos, para provocá-lo, questionaram: – Com que autoridade você faz essas coisas? Quem lhe deu essa autoridade? – Eu também vou fazer uma pergunta – disse Jesus – e se…',
      imagem: require('../../assets/icons/Atividades4.jpg'),
    },
    {
      id: '5',
      titulo: 'MÃE – MARIA DE JESUS',
      texto:
        'Mãe, Maria do Filho do Criador Mãe, Maria de Todos os Filhos do Criador Olha Nossas imperfeições Olha Nossos Erros e Tropeços E Nos Ergue em Teu Coração. Mãe, Maria dos Pobres Abandonados Mãe, Maria dos Corações Aflitos Mãe, Maria dos Homens Cheios de Angústia Olha e nos Ergue Todos em Teu Coração. Mãe, Maria…',
      imagem: require('../../assets/icons/Atividades5.jpg'),
    },
    {
      id: '6',
      titulo: 'JESUS E A PARÁBOLA DO TESOURO ESCONDIDO',
      texto:
        'JESUS E A PARÁBOLA DO TESOURO ESCONDIDO',
      imagem: require('../../assets/icons/Atividades6.jpg'),
    },
  ];

  // 🔹 Estado da página
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 6;
  const totalPaginas = Math.ceil(atividades.length / itensPorPagina);

  // 🔹 Cálculo dos itens da página atual
  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const atividadesPagina = atividades.slice(inicio, fim);

  // 🔹 Função para mudar de página
  const mudarPagina = (novaPagina) => {
    if (novaPagina >= 1 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  // 🔹 Render de cada card
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.touch} onPress={() => Linking.openURL("https://www.gfranciscodeassis.org.br/blog-2/#page-content")}>
      <Image style={styles.AtividadesImg} source={item.imagem} />
      <View style={{ overflow: 'hidden', height: 100 }}>
        <Text style={styles.TituloAtividades}>{item.titulo}</Text>
        <Text style={styles.TextoAtividades}>{item.texto}</Text>
      </View>
      <TouchableOpacity style={{ alignItems: 'center', marginTop: 5 }}>
        <Text style={{ color: 'green' }}>Ler mais</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.Container}>
      {/* 🔹 Logo e campo de pesquisa */}
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity             
        onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={require('../../assets/icons/logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TextInput placeholder="Pesquisar" style={styles.textInput} />
      </View>

      {/* 🔹 Lista paginada */}
      <FlatList
        data={atividadesPagina}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'center' }}
        contentContainerStyle={{ marginTop: '6%' }}
      />

      {/* 🔹 Controles de paginação */}
      <View style={styles.pagination}>
        <TouchableOpacity
          onPress={() => mudarPagina(paginaAtual - 1)}
          disabled={paginaAtual === 1}
        >
          <Text
            style={[
              styles.pageBtn,
              paginaAtual === 1 && styles.disabled,
            ]}
          >
            ◀
          </Text>
        </TouchableOpacity>

        <Text style={styles.pageText}>
          {paginaAtual} / {totalPaginas}
        </Text>

        <TouchableOpacity
          onPress={() => mudarPagina(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
        >
          <Text
            style={[
              styles.pageBtn,
              paginaAtual === totalPaginas && styles.disabled,
            ]}
          >
            ▶
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 70,
    height: 50,
    marginTop: '5%',
  },
  textInput: {
    height: 40,
    width: 340,
    borderWidth: 1.5,
    borderColor: 'green',
    marginTop: '5%',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  touch: {
    height: 220,
    width: 170,
    borderRadius: 20,
    borderWidth: 0.7,
    borderColor: 'green',
    margin: '2%',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  AtividadesImg: {
    height: 70,
    width: '100%',
    alignSelf: 'center',
  },
  TituloAtividades: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    margin: 3,
  },
  TextoAtividades: {
    fontSize: 13,
    fontFamily: 'Roboto',
    marginLeft: '3%',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    gap: 20,
  },
  pageBtn: {
    fontSize: 20,
    color: 'green',
    paddingHorizontal: 8,
    height:20.
    
  },
  pageText: {
    fontSize: 14,
  },
  disabled: {
    opacity: 0.3,
  },
});
