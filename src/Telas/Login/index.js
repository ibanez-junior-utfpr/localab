import React, { useState, useEffect } from "react";
import { Pressable, Image, TextInput, View, Text } from "react-native";
import { Estilos } from "../style";
import firebase from "../../firebaseConfig";

export default Login = (props) => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [status, setStatus] = useState(false);

    async function validarDados() {
        if (usuario !== "") {
            await firebase.database().ref('Usuario').child(usuario).once('value', (snapshot) => {
                if (snapshot.val() !== null) {
                    if (snapshot.val().senha === senha) {
                        setStatus(true);
                    } else {
                        alert("Senha Inválida");    
                    }
                } else {
                    alert("Usuário não existe");
                }
            });
        }
    }

    return(
        <View style={Estilos.caixa}>
            {
                status ? (
                    <>
                        <Text>Usuário: {usuario}, logado com sucesso!!!</Text>
                    </>
                ) : (
                    <>
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
                        <Pressable style={Estilos.pressionar} onPress={validarDados}>
                            <Text style={Estilos.textoGB}>
                            <Image
                                source={require("../../../assets/botao_urso.png")}
                                style={Estilos.botao}
                            /> Entrar</Text>
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
                    </>
                )
            }
        </View>
    );
}
