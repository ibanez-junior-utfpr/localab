import React, { useState, useEffect } from "react";
import { Pressable, Image, TextInput, View, Text } from "react-native";
import { Estilos } from "../style";
import firebase from "../../firebaseConfig";

export default Login = (props) => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    useEffect(() => {
        async function carregaDados() {
            await firebase.database().ref("usuario").on("value",
            (snapshot) => { setUsuario(snapshot.val()) });
            await firebase.database().ref("senha").on("value",
            (snapshot) => { setSenha(snapshot.val()) });
        }
    });
    
    return(
        <View style={Estilos.caixa}>
            <Text style={Estilos.textoG}>Login</Text>
            <TextInput style={Estilos.entrada}
                placeholder="Digite seu Usuário"
                onChangeText={setUsuario}
                value={usuario}
            />
            <TextInput style={Estilos.entrada}
                placeholder="Digite sua Senha"
                secureTextEntry={true}
                onChangeText={setSenha}
                value={senha}
            />
            <Pressable style={Estilos.pressionar}>
                <Text style={Estilos.textoGB}>
                <Image
                    source={require("../../../assets/botao_urso.png")}
                    style={Estilos.botao}
                />Entrar</Text>
            </Pressable>
            <View style={Estilos.pressionar}>
                <Pressable>
                    <Text style={Estilos.textoMB}>Cadastrar</Text>
                </Pressable>
                <Text style={Estilos.textoMB2}></Text>
                <Pressable>
                    <Text style={Estilos.textoMB}>Reset da Senha</Text>
                </Pressable>
            </View>
            <View>
                <Text>{usuario}</Text>
                <Text>{senha}</Text>
            </View>
        </View>
    );
}
