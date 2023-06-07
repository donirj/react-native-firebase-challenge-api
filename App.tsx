import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/components/LoginScreen/LoginScreen';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import Details from './src/components/Details/Details';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './src/services/FirebaseConfig';

const Stack = createNativeStackNavigator()

const InsideStack = createNativeStackNavigator()

function InsideLayout() {
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name="my Home" component={HomeScreen} />
      <InsideStack.Screen name="details" component={Details} />
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
      onAuthStateChanged(FIREBASE_AUTH, (user) => {
        console.log('user', user)
        setUser(user)
      });
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ?
          <Stack.Screen options={{ headerShown: false }} name="Inside" component={HomeScreen} /> : <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
