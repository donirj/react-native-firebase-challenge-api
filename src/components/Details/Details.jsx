import React from 'react';
import { styles } from "./styles";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ActivityIndicator, Pressable, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Details = ({ navigation }) => {
    return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Move</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default Details;
