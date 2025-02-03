import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import TextCustom from "../components/TextCustom";
import { useAuth } from "@/context/AuthContext";


export default function Index() {
  const {user, session, signout} =useAuth()

  return (
    <SafeAreaView>
          <TouchableOpacity 
            style={styles.button} 
            onPress={signout}
            >
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.container}>
            {/* <TextCustom fontSize={22}>Protected Routex</TextCustom> */}
            {session && (<TextCustom fontSize={22}>Hello {user.name}!</TextCustom>)}
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,

  },
  headline:{
    paddingVertical:20
  },
    button: {
      backgroundColor: 'black',
      padding: 12,
      borderRadius: 6,
      alignItems: 'center',
      margin:20,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
})