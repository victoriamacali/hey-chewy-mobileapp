//import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "./style.js";
import {
  SafeAreaView,
} from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
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


export function HomeScreen() {
  const navigation = useNavigation();
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
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 3, }}>
      <Image
        source={require("./assets/heychewy2.png")}
        style={styles.heyChewy2}
      />
      <Text style={{ alignSelf: 'center', color: "white", fontSize: 30, lineHeight: 30, fontFamily: 'Spartan_600SemiBold', paddingBottom:50 }}>
        show me ...
      </Text>
      <Text> </Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'center',  }}>
        <TouchableOpacity
          title="my pets"
          style={styles.button}
          
          onPress={() => navigation.navigate("PetList")}
        >
          <Text style={styles.text}>{"my companions"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="reminders"
          style={styles.button}
          onPress={() => navigation.navigate("RemindersPage")}
        >
          <Text style={styles.text}>{"reminders"}</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 20, lineHeight: 50, fontFamily:'Spartan_300Light', marginLeft:30 }}>
          recommended items
        </Text>
      </View>

      <ScrollView
        centerContent={true}
        horizontal={true}
        contentContainerStyle={styles.scontainer}
      >
        <TouchableOpacity style={styles.sbutton}>
          <Image source={require("./assets/dog.png")} style={styles.portrait} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbutton}>
          <Image source={require("./assets/cat.png")} style={styles.portrait} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbutton}>
          <Image
            source={require("./assets/bunny.png")}
            style={styles.portrait}
          />
        </TouchableOpacity>
      </ScrollView>
       <View style={styles.footerBar}>
         <Ionicons name="log-out" size={20} color="#fff" onPress={() => navigation.navigate('LoginPage')}><Text style={{fontFamily:'Spartan_300Light', fontSize: 15}}> Logout</Text></Ionicons>
       </View>  
    </SafeAreaView>
  );
}}
