import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ActivityIndicator, Pressable } from 'react-native'
import { FIREBASE_AUTH } from '../../services/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { styles } from "./styles";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response)
            alert('Bienvenido')
        } catch (error) {
            console.log(error)
            alert('sign in failed ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response)
            alert('registro exitoso')
        } catch (error) {
            console.log(error)
            alert('sign up failed ' + error.message)
        } finally {
            setLoading(false)
        }
    }


    return(
        <KeyboardAvoidingView
        style={styles.container}
        behavior={"height"}
        >
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                { loading ? (
                    <ActivityIndicator />
                ): (   
                <>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button} onPress={signIn}>
                            <Text style={styles.buttonText}>Login</Text>
                        </Pressable>
                        <Pressable style={[styles.button, styles.buttonOutline]} title='signin' onPress={signUp} >
                            <Text style={styles.buttonOutlineText}>Register</Text>
                        </Pressable>
                    </View>
                </>
                )}
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen
