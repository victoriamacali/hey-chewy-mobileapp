import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Text,
  SafeAreaView,
} from "react-native";
import Custominput from "./Custominput/Custominput";
import React, { useState } from "react";
import CustomButton from "./Custom button/CustomButton";
import { useNavigation } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
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


export function LoginPage() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
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
  } else {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header, {fontFamily: 'Spartan_800ExtraBold', color: "#3153A4"}}> Hello and Welcome to </Text>
      <Image
        source={require("./assets/heychewy1.png")}
        style={[styles.logo, { height: height * 0.3 }]}
      />
      <Custominput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <Custominput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <View style={{ flexDirection: "row" }}>
        <CustomButton
          text="Sign Up"
          onPress={() => navigation.navigate("CreateAccount")}
        />
        <CustomButton
          text="Log In"
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </SafeAreaView>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    maxWidth: 200,
    maxHeight: 200,
    width: "100%",
    resizeMode: "contain",
    paddingVertical: 130,
  },

  header: {
    color: "#3153A4",
    fontWeight: "bold",
    fontStyle: "italic",
  }

});
