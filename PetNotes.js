import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import AppLoading from 'expo-app-loading';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  Spartan_100Thin,
  Spartan_200ExtraLight,
  Spartan_300Light,
  Spartan_400Regular,
  Spartan_500Medium,
  Spartan_600SemiBold,
  Spartan_700Bold,
  Spartan_800ExtraBold,
  Spartan_900Black,
} from '@expo-google-fonts/spartan';


export function PetNotes() {
  const navigation = useNavigation();
  const [note,setNote] = useState("None");
  let [fontsLoaded] = useFonts({
    Spartan_100Thin,
    Spartan_200ExtraLight,
    Spartan_300Light,
    Spartan_400Regular,
    Spartan_500Medium,
    Spartan_600SemiBold,
    Spartan_700Bold,
    Spartan_800ExtraBold,
    Spartan_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {
  return (

    <SafeAreaView>
            <View style={styles.titleBar}>
                <Ionicons name="ios-arrow-back" size={24} color="#3153A4" onPress={() => navigation.navigate('PetProfile')}></Ionicons>
            </View>
      <Text style={styles.text, {fontFamily:'Spartan_800ExtraBold', fontSize: 28, color: '#3153A4', marginTop: 18, marginLeft: 10}}>My Notes</Text>
    <View >
      <Text style={[styles.text, { fontWeight: "200", fontSize: 14, color: '#3153A4', fontFamily:'Spartan_600SemiBold' , marginLeft: 15, }]}> {"\n"}Write something or whatev-fur{"\n"}</Text>
      <TextInput
        style={styles.textArea, {marginLeft: 15}}
        underlineColorAndroid="transparent"
        placeholder="Begin typing ... "
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
        onChangeText={(val) => setNote(val)}
      />
      </View>
      {/* <View style={styles.infoContainer}>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 35, color: '#3153A4'}]}>My Companions's Notes</Text>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 25, color: '#3153A4'}]}>  {note}</Text>
      </View> */}
      </SafeAreaView>
      
      
  )
}}

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'grey',
    borderWidth: 50,
    padding: 5
  },
  textArea: {
    height: 500,
    width: 100,
    justifyContent: "flex-start",
    textAlignVertical: 'top'
  },
  text: {
      color: "#fff",
      fontSize: 40, 

  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16
  },
  button: {
    //flex: 1,
    alignItems: "center",
    width: 297,
    height: 73,
    borderRadius: 20,
    backgroundColor: "#3153A4",
    justifyContent: "center",
    marginBottom: 20,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
},
}
)

/*
import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style.js";
import Custominput from "./Custominput/Custominput";


import {
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";


export function PetNotes() {
  const navigation = useNavigation();
  const [note,setNote] = useState("");

      return (
        <SafeAreaView styles={styles.container}>
      <View style={styles.titleBar}>
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color="#3153A4"
          onPress={() => navigation.navigate("HomeScreen")}
        ></Ionicons>
      </View>
      <View>
      <TouchableOpacity
          style={styles.pets}
          onPress={() => navigation.navigate("PetProfile")}
        >
          <Image
            source={require("./assets/evie.png")}
            style={styles.portrait}
          />
          
          <Text style={{ color: "#3153A4", fontSize: 35, lineHeight: 50 }}>
          Evie's Notes
        </Text>
        </TouchableOpacity>
      </View>
      <View>
       <TextInput
         style={styles.textArea}
         underlineColorAndroid="transparent"
         placeholder=""
         placeholderTextColor="grey"
         numberOfLines={10}
         multiline={true}
         onChangeText={(val) => setNote(val)}
         placeholder="Add a Note"
         placeholderTextColor="grey"
         placeholderSize="large"
       />
      </View>
     <View>
       <Custominput
        placeholder="- Give Evie a treat"
        value={note}
        setValue={setNote}
      />
      <Custominput
        placeholder="- Take Evie for a walk"
        value={note}
        setValue={setNote}
      />
      <Custominput
        placeholder="- Walk to park"
        value={note}
        setValue={setNote}
      />
      <Custominput
        placeholder="- Buy her some toys"
        value={note}
        setValue={setNote}
      />
      <Custominput
        placeholder="- Give Evie a bath"
        value={note}
        setValue={setNote}
      />
      </View>


      </SafeAreaView>
      )
}*/
