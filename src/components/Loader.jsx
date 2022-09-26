import { View, Text, StyleSheet } from "react-native";

export function Loader() {
    return(
        <View style={LoaderStyle.contenedor}>
            <Text style={LoaderStyle.texto}>Cargando...</Text>
        </View>
    )
}

const LoaderStyle = StyleSheet.create({
    contenedor: {
        backgroundColor:'#e3e3e3'
    },
    texto: {
        color: 'red',
        fontSize: '5rem'
    }
})