import React, { useState } from "react";
import { View,Text,Image,TextInput,TouchableOpacity,StyleSheet,ScrollView} from "react-native";
import estilo from "../../assets/estilo";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from "@react-native-picker/picker";



export default props => {
    const navigation = useNavigation();
    const [selecionaComida, setSelecionaComida] = useState(null);

    return(
        <ScrollView style={styles.container}>
        <View >
            <View style={styles.viewContImg}>
                <View>
                    <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',marginLeft: 80,}} onPress={() => navigation.navigate("Login")}>
                        <Image
                          source={require('../../assets/icons/logo.png')}
                          style={styles.img}
                        />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ marginRight: 20}}>
                      <Icon name="navicon" size={30} color={'black'} />
                    </TouchableOpacity>
            </View>
            <View style={{marginTop:20, alignItems:'center'}}>
                <Text>Histórico e Fundação</Text>
                <Text style={{fontSize:30,color:"#631311"}}>Quem Somos</Text>
            </View>
            <View style={styles.viewCont}>
                <Image
                  source={require('../../assets/icons/image.png')}
                  style={{width:150, height:100, marginTop:20, alignSelf:'center'}}
                  />
                  <View>
                    <Text>Espiritas,amai-vos e instrui-vos!</Text>
                    <Text>                                   Allan Kardec</Text>
                  </View>
            </View>
            <View style={styles.viewText}>
                <Text style={styles.Text}>Em 17 de dezembro de 1990, às 20h, um grupo de idealistas uniu-se para criar uma sociedade civil de caráter religioso e filantrópico. Sob a liderança de Carlos Alberto Venturini, nasceu o Grupo Socorrista Francisco de Assis (GFSA), com a missão de estudar, praticar e divulgar o Espiritismo codificado por Allan Kardec, sempre guiado pela caridade e sem qualquer distinção de raça, credo, profissão ou condição social.
                Os encontros começaram de forma simples, no porão da Creche Mamãe, em Santo Amaro. Com o crescimento das atividades, o grupo conquistou autonomia e novos lares, passando por endereços na Rua Cabiúna e na Rua Estilo Barroco, até chegar à atual sede, na Rua Diogo de Quadros, 363, onde permanece firme há 18 anos.
                </Text>
                <Text style={styles.TextDois}>Inês Assumpção</Text>
                <Text style={styles.Text}>Durante muitos anos, a casa foi guiada espiritualmente por Inês Assumpção, lembrada pela firmeza, 
                    amor e sabedoria com que conduziu os trabalhos. Mãezona dedicada, soube apoiar e corrigir com ternura, deixando um legado vivo no coração de todos.
                </Text>
                <TouchableOpacity style={{borderBottomWidth: 2,borderBottomColor: '#215727',marginTop: 20,alignSelf:'center'}} onPress={() => navigation.navigate("")}>
                    <Text style={{ textAlign: 'center',fontSize:20 }}>ver mais</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{textAlign:"center",fontSize:20}}>Galeria da ONG</Text>
                <View style={styles.imgemGaleriaContainer}>
                    <View>
                    <Image 
                    source={require('../../assets/icons/Rectangle.png')}
                    style={styles.imgemGaleria}
                    />
                    <Image 
                    source={require('../../assets/icons/Rectangle.png')}
                    style={styles.imgemGaleria}
                    />
                    </View>
                    <View>
                    <Image 
                    source={require('../../assets/icons/Rectangle.png')}
                    style={styles.imgemGaleria}
                    />
                    <Image 
                    source={require('../../assets/icons/Rectangle.png')}
                    style={styles.imgemGaleria}
                    />
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop:20}}>
                <View>
                        <TextInput
                          placeholder="Nome:"
                          maxLength={20}
                            style={styles.textcontatos}  
                        />
                        <TextInput
                          placeholder="Email:"
                          maxLength={20}
                            style={styles.textcontatos}  
                        />
                        <TextInput
                          placeholder="Bairro:"
                          maxLength={20}
                            style={styles.textcontatos}  
                        />
                        <TextInput
                          placeholder="Cidade:"
                          maxLength={20}
                            style={styles.textcontatos}  
                        />
                        <TextInput
                          placeholder="Estado:"
                          maxLength={20}
                            style={styles.textcontatos}  
                        />
                        <TextInput
                          placeholder="CEP:"
                          maxLength={20}
                            style={styles.textcontatos}  
                        />
                        <View style={styles.textcontatos}>
                         <Picker
                            selectedValue={selecionaComida}
                            onValueChange={setSelecionaComida}
                            mode="dropdown"
                            dropdownIconColor="#000"
                        >
                        <Picker.Item label="Assunto " value={null} />
                        {["Cursos", "Horários", "Localização", "informações", "Atendimento"].map((item) => (
                        <Picker.Item key={item} label={item} value={item} />
                        ))}
                        {selecionaComida && <Text style={{fontSize:10,}}>Você escolheu:{selecionaComida}</Text>}
                        </Picker>
                        </View>

                        <TextInput
                          placeholder="Mensagem:"
                          maxLength={100}
                            style={styles.textConMensa}  
                        />
                        <TouchableOpacity style={styles.textconenviar}>
                           <Text style={styles.textenviar}>Enviar</Text> 
                        </TouchableOpacity>
                    </View>
                        <View style={{marginRight:10,}}>
                            <View style={styles.caixaImg}>
                                <TouchableOpacity style={estilo.logo} >
                                <Image
                                   source={require('../../assets/icons/insta.png')}
                                   
                                />
                                <Text style={estilo.txtPequeno}>gruposocorristafrancisco</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.caixaImg}>
                                <TouchableOpacity style={estilo.logo} >
                                <Image
                                   source={require('../../assets/icons/youtube.png')}
                                />
                                <Text style={estilo.txtPequeno}>@gruposocorristafranciscode6211</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.caixaImg}>
                                <TouchableOpacity style={estilo.logo} >
                                <Image
                                   source={require('../../assets/icons/facebook.png')}
                                />
                                <Text style={estilo.txtPequeno}>gruposocorristafranciscodeassis</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
            </View>
        </View>
        </ScrollView>
    )
}
const styles =  StyleSheet.create({
    container:{
        flex: 1,
    },
    img: {
    width: 70,
    height: 50,
    marginTop: 10,
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
    justifyContent: 'space-between',
    paddingRight: 20,
    backgroundColor: '#DDD',
    },
    viewText:{
        margin: 20,
        paddingLeft:30,
        paddingRight:30,
    },
    Text:{
        textAlign: 'center',
        marginBottom:10,
        marginTop:10,
    },
    TextDois:{
        fontSize:20,
        textAlign: 'center',
    },
    imgemGaleriaContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    imgemGaleria:{
        width: 200,
        height: 100,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#215727'
    },
    textcontatos:{
        borderWidth: 2,
        borderColor: '#215727',
        borderRadius: 10,
        marginLeft: 10,
        marginTop:5,
        width: '200%',
    },
    textConMensa:{
        borderWidth: 2,
        borderColor: '#215727',
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 5,
        width: '200%',
        height:'10%',
    },
    textconenviar:{
        borderWidth: 2,
        borderColor: '#215727',
        borderRadius: 10,
        marginLeft: 10,
        marginBottom:20,
        marginTop: 5,
        width: '100%',
    },
    textenviar:{
        textAlign: 'center',
        fontSize:20,
    },
    caixaImg:{
        borderWidth: 2,
        borderColor: '#215727',
        marginTop: 5,
        paddingBottom:"10%",
        paddingTop:"10%",
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
    }
});