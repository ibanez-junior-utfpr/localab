import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Estilo } from "./style";
import Login from "../Login";

export default Home = () => {
    return(
        <LinearGradient colors={[ "#FFE200", "#B8860B", "#000000" ]}
            style={Estilo.container}>
            <Image
                source={require("../../../assets/logo_localab_preto.png")}
                style={Estilo.logo}
            />
            <Login />
        </LinearGradient>
    );
}
