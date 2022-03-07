import { StyleSheet, View, Pressable, Text } from "react-native";
import { UpComingReminders } from "./RemindersPageComponents/UpComingReminders";
import { DailyReminders } from "./RemindersPageComponents/DailyReminders";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export function RemindersPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color="#3153A4"
          onPress={() => navigation.navigate("HomeScreen")}
        ></Ionicons>
      </View>

      <UpComingReminders />
      <DailyReminders />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#3153A4",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#B9D7EF",
  },
  container: {
    flex: 1,
    padding: 30,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    padding: 10,
  },
});
