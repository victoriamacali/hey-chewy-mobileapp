import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
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
const EditProfile = () => {
  const [text, onChangeText] = React.useState("Name");
  const [number, onChangeNumber] = React.useState(null);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
            <View style={styles.titleBar}>
                <Ionicons name="ios-arrow-back" size={24} color="#3153A4" onPress={() => navigation.navigate('PetList')}></Ionicons>
            </View>
      <Text style={styles.message}>
          Edit Profile
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
},
  
message: {
    color: '#3153A4',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 30,
    paddingBottom: 20,
    textAlign: 'center'
    
},

});

export default EditProfile;