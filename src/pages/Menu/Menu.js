import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export default function Menu (){
    const navigation = useNavigation();
    return(
        <View style={styles.containerMenu}>
                <TouchableOpacity style={styles.containerButtonMenu} onPress={()=>navigation.navigate('PetLove')}>
                    <Icon name="home" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerButtonMenu} onPress={()=>navigation.navigate('MyAcount')}>
                    <Icon name="user" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerButtonMenu} onPress={()=>navigation.navigate('Historico')}>
                    <Icon name="list" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    containerMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButtonMenu: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: '5%',
        marginEnd: '5%'
    },

})