import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export function MedicalHistory() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.titleBar, {marginRight: 330}}>
                <Ionicons name="ios-arrow-back" size={24} color="#3153A4" onPress={() => navigation.navigate('PetProfile')}></Ionicons>

            </View>
            <TouchableOpacity style={Styles.button}>
                <Text style={Styles.text}>upload files</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={Styles.scontainer}>
                <TouchableOpacity style={Styles.ibutton}>
                    <Image style={Styles.image} source={require("./assets/dogmed.png")}/>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.ibutton}>
                    <Image style={Styles.image} source={require("./assets/catmed.png")}/>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.ibutton}>
                    <Image style={Styles.image} source={require("./assets/vaccine.png")}/>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}


const Styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff", 
        alignItems: 'center',
        justifyContent: "space-between"
    },

    button: {
        alignItems: "center",
        width: 297,
        height: 73,
        borderRadius: 20,
        backgroundColor: "#3153A4",
        justifyContent: "center",
        marginBottom: 20,
      },
    ibutton: {
        alignItems: "center",
        width: 350,
        height: 400,
        borderRadius: 20,
        backgroundColor: "#3153A4",
        justifyContent: "center",
      },

    image: {
        width: 350,
        height: 400,
        borderRadius: 20,
    },

    scontainer: {
        flexGrow: 1,
        backgroundColor: "#E5E5E5", 
        alignItems: 'center',
        justifyContent: "space-between",
        width: 350,
        borderRadius: 15,
    },

    text: {
        color: "#fff", 
        fontSize: 34,
        fontWeight: "bold",
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },


});