import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const PetList = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView styles={styles.container}>
      <View style={styles.titleBar}>
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color="#3153A4"
          onPress={() => navigation.navigate("HomeScreen")}
        ></Ionicons>

        <Ionicons
          name="add"
          size={24}
          color="#3153A4"
          onPress={() => navigation.navigate("HomeScreen")}
        ></Ionicons>
      </View>

      <Text style={styles.header}> my companions </Text>

      <ScrollView style={styles.scontainer}>
        <TouchableOpacity
          style={styles.pets}
          onPress={() => navigation.navigate("PetProfile")}
        >
          <Image
            source={require("./assets/eevee.jpg")}
            style={styles.portrait}
          />
          <Text style={styles.names}> eevee </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.pets}
          onPress={() => navigation.navigate("PetProfile")}
        >
          <Image source={require("./assets/yukii.jpg")} style={styles.portrait} />
          <Text style={styles.names}> yuki </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.pets}
          onPress={() => navigation.navigate("PetProfile")}
        >
          <Image
            source={require("./assets/hammy.png")}
            style={styles.portrait}
          />
          <Text style={styles.names}> hammy </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.pets}
          onPress={() => navigation.navigate("PetProfile")}
        >
          <Image source={require("./assets/bella.png")} style={styles.portrait} />
          <Text style={styles.names}> bella </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  scontainer: {
    marginHorizontal: 0,
  },
  petContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  header: {
    color: "#3153A4",
    fontWeight: "bold",
    fontSize: 34,
    textAlign: "center",
    padding: 10,
  },

  pets: {
    shadowOpacity: 30,
    height: 350,
    alignItems: "center",
    justifyContent: "center",
  },

  portrait: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    padding: 30,
    borderRadius: 30,
  },

  names: {
    flex: 1,
    justifyContent: "flex-start",
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    top: 290,
    left: 70,
    color: "#FFFFFF",
    shadowOpacity: 30,
  },

  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 56,
  },
});

export default PetList;
