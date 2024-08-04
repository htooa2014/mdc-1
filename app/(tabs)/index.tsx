import { View,Text,Image, StyleSheet, Platform ,SafeAreaView,Pressable} from 'react-native';
import React, {useState} from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (   
    <>
     <SafeAreaView >
      <View style={styles.container}>
      <Text style={styles.title}>0</Text>
     <Pressable style={styles.button}>
     <Text  style={styles.buttonText}>Increase</Text>
     </Pressable>
      </View>
    </SafeAreaView>
    </> 
    
  );
}

const styles = StyleSheet.create({
  container:{
        marginHorizontal:'auto',
        width:'90%',
        height:'100%',
        justifyContent:'center',
        backgroundColor:"lightblue",
    alignItems:'center',
  },
  title : {
fontSize:50 ,fontWeight:'bold'
  },
  button:{
    paddingHorizontal:18,
    paddingVertical:20,
    borderRadius:20,
    backgroundColor:'#ddffaa',
  },
  buttonText:{
      fontSize:16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

