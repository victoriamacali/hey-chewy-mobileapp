import { StyleSheet, View , Text, SafeAreaView, FlatList, Modal, TextInput, Pressable } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

const Days = [
    { id: "1", day: "1", title: "Walk Bella"},
    { id: "2", day: "2", title: "Clean litter box"},
    { id: "3", day: "3", title: "Feed fish"},
    { id: "4", day: "2", title: "Change Noodles waterbowl"}
  ];

export function SingleReminderPage({route, navigation}){
    const {dayID, day} = route.params;
    const [modelOpen, setModelOpen] = useState(false);

    const renderReminder = ({ item }) => {  
        if (dayID == item.day){   
            return (
            <View style={{padding:10}}>
                <View style={styles.dailyReminder}>
                    <Text style={ {color: '#3153A4', flexWrap: 'wrap', fontSize: 20} } >{item.title}</Text>
                </View>
            </View>
            );
        }
    };

    return(
        <View style={styles.container1}>
            <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#3153A4" onPress={() => navigation.goBack()}></Ionicons>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <Text style={styles.dayText}>{day}</Text>
                <View style={styles.icon}>
                    <Ionicons name="create" size={24} color="#fff" onPress={()=> setModelOpen(true)}></Ionicons>
                </View>
            </View>
            <Modal transparent={true} visible={modelOpen} animationType="slide">
                <View style={{backgroundColor:"#000000aa", flex: 1}}>
                    <View style={{backgroundColor:'#3153A4', margin:50, padding:40, borderRadius:10, flex:1}}>
                        <View style={{flexDirection: 'row'}}>
                            <MaterialIcons name='close' size={20} onPress={() => setModelOpen(false)}></MaterialIcons>
                        </View>
                        <View style={{ flex: 1}}>
                            <TextInput style={styles.description} placeholder="description" placeholderTextColor={'#3153A4'} textAlignVertical="top" multiline={true}></TextInput>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{flex: 1, backgroundColor: 'white', borderRadius: 20, padding: 10}}>
                <SafeAreaView style={{flex: 1}}>
                        <FlatList
                        data={Days}
                        renderItem={renderReminder}
                        keyExtractor={(item) => item.id}
                        />
                </SafeAreaView>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        backgroundColor: '#B9D7EF',
        padding: 30
    },
    dayText:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#3153A4'
    },
    icon:{
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        padding: 20
    },
    dailyReminder:{
        flex: 0.4,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#B9D7EF"
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
    },
      description: {
        flex:1,
        margin: 10,
        padding: 10,
        flexWrap: 'wrap',
        color: '#3153A4',
        backgroundColor: '#B9D7EF',
        fontSize: 15,
        borderRadius: 20
      },
})