import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
   SafeAreaView,
   StyleSheet,
   Text,
   View 
} from 'react-native';
import { configureStore } from '@reduxjs/toolkit'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {{fontSize: 40}}>Nombre de mi app</Text>
      <Text>Bienvenidos a mi app</Text>
      <StatusBar style="auto" />
    </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerB: {
    flex:1,
    marginTop: StatusBar.currentHeight || 0
},
  bodyText: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
