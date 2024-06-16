import { useNavigation } from "@react-navigation/native";
import React from "react";
import{View, Text, Button} from "react-native";


export default function Home(){

const navigation = useNavigation();

function navegaDetalhes(){
    navigation.navigate('Detalhes');

}
    return(
        <View>
        <Text>Página Home</Text>
       
<Button title = "Ir para pagina de Detalhes do usuário" onPress={navegaDetalhes}/>

        </View>
   )
}