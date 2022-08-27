import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import {Image,Button,ScrollView} from 'react-native' ; 



export default function App() {

    const [meme,setMeme]=useState('https://i.redd.it/e6eb8t4uu1k91.jpg')
    const resp =()=>{fetch(
      `https://meme-api.herokuapp.com/gimme`
    ).then((data)=>data.json()).then((d)=>setMeme(d.url));}
    useEffect(()=>{
      resp();
    },[]);



  return (
    
    <View style={{marginTop:'50%',marginBottom:'50%',marginLeft:'0%'}} resizeMode='contain'>
      <Image style={{  width: '100%', height: '90%'}}  source={{uri:meme}} resizeMode='contain'/>
      
      <Button 
      color="black"
      onPress={resp}
      title="One More"  
  />  



      
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    color:'black'
  }
});