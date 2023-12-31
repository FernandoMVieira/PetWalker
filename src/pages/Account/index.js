import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome'

import Menu from "../Menu/Menu";

export default function MyAcount() {
    return (
        <View style={styles.container}>
            <Animatable.View style={styles.containerHeader} delay={600} animation={'fadeInLeft'}>
                <Text style={styles.message}>Perfil</Text>
            </Animatable.View>

            <Animatable.View style={styles.containerMycount} animation={'fadeInRight'}>
                <TouchableOpacity style={styles.perfil}>
                    <Icon name="user" size={50} color={'#a1a1a1'} marginRight={10} />
                    <View style={styles.textContainer}>
                        <Text style={styles.perfilTitle}>#Daniel2849</Text>
                        <Text style={styles.perfilEmail}>usuario@gmail.com</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOption}>
                    <Text style={styles.buttonOptionText}>Editar foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOption}>
                    <Text style={styles.buttonOptionText}>Mudar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOption}>
                    <Text style={styles.buttonOptionText}>Excluir conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOption}>
                    <Text style={styles.buttonOptionText}>Sair</Text>
                </TouchableOpacity>
            </Animatable.View>
            <Menu />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerMycount: {
        backgroundColor: '#fff',
        flex: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    perfil: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 28,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#a1a1',
        borderRadius: 10,
        marginBottom: 3,
        paddingTop: "7%",
        paddingBottom: "7%",
        paddingStart: "5%"
    },
    perfilTitle: {
        fontWeight: "bold",
        fontSize: 20,
    },
    perfilEmail: {
        color: '#a1a1a1',
    },
    textContainer: {
        flexDirection: "column",
    },
    buttonOption: {
        borderColor: '#a1a1a1',
        borderWidth: 0.5,
        borderRadius: 5,
        marginTop: '2%',
        padding: '4%'
    },
    buttonOptionText: {
        fontSize: 16
    }

});
