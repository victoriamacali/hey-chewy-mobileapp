import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./HomeScreen";
import { CreateAccount } from "./CreateAccount";
import { LoginPage } from "./LoginPage";
import { RemindersPage } from "./RemindersPage";
import { SingleReminderPage } from "./SingleReminderPage";
import { PetProfile } from "./PetProfile";
import PetList from "./PetList";
import { MedicalHistory } from "./MedicalPage";
import { PetNotes } from "./PetNotes";
import  EditProfile  from "./EditProfile";
const Stack = createNativeStackNavigator();

export default function App() {

 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RemindersPage" component={RemindersPage} />
        <Stack.Screen
          name="SingleReminderPage"
          component={SingleReminderPage}
        />
        <Stack.Screen name="PetProfile" component={PetProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="PetList" component={PetList} />
        <Stack.Screen name="MedicalHistory" component={MedicalHistory} />
        <Stack.Screen name="PetNotes" component={PetNotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
