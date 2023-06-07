import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ActivityIndicator, FlatList, ScrollView, Pressable } from 'react-native'
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../services/FirebaseConfig';
import { LogBox } from 'react-native';
import { styles } from "./styles";

const HomeScreen = ({ navigation }) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    const banksULR = "https://dev.obtenmas.com/catom/api/challenge/banks"

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        fetch(banksULR)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    },[])

    return (
        
        <SafeAreaView
            style={styles.container}
        >
            <ScrollView
            showsVerticalScrollIndicator={false}
            >

            <FlatList                
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.bankItem}>
                        <Text>Bank name: {item.bankName}</Text>
                        <Text>Age: {item.age}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.url}</Text>
                    </View>
                )}
            />
            
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={() => FIREBASE_AUTH.signOut()} >
                        <Text style={styles.buttonText}>Logout</Text>
                    </Pressable>
                    {/* <Button onPress={() => navigation.navigate('details')} title="details" /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;

