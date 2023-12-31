import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import { Picker } from '@react-native-picker/picker';

export default function SignUp() {
    const [password, setPassword] = useState('');
    const [selectedConta, setSelectedConta] = useState('');

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Animatable.View animation={"fadeInLeft"} delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastro</Text>
            </Animatable.View>

            <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
                <ScrollView style={{marginTop: 15}} showsVerticalScrollIndicator={false}>

                    <Text style={styles.title}>Login</Text>
                    <TextInput placeholder='Username' style={styles.input}></TextInput>

                    <Text style={styles.title}>Senha</Text>
                    <TextInput placeholder='Password' style={styles.input} secureTextEntry={true} value={password} onChangeText={setPassword}></TextInput>

                    <Text style={styles.title}>E-mail</Text>
                    <TextInput placeholder='E-mail' style={styles.input}></TextInput>

                    <Text style={styles.title}>CPF</Text>
                    <TextInput placeholder='CPF' style={styles.input}></TextInput>

                    <Text style={styles.title}>Endereço</Text>
                    <TextInput placeholder='Endereço' style={styles.input}></TextInput>

                    <Text style={styles.title}>Tipo de conta</Text>
                    <Picker
                        selectedValue={selectedConta}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedConta(itemValue)
                        }>
                        <Picker.Item label="Escolha..." value={null} />
                        <Picker.Item label="Pet Walker" value="PetWalker" />
                        <Picker.Item label="Pet Lover" value="PetLover" />
                    </Picker>



                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SignIn')}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </ScrollView>

            </Animatable.View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
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
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    picker:{
        fontSize:40
    },  
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        marginBottom: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }

})