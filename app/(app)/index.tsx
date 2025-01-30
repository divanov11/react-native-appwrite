import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import TextCustom from "../components/TextCustom";


export default function Index() {

  return (
    <SafeAreaView>
      <View style={styles.container}>
          <TextCustom fontSize={22}>Protected Routex</TextCustom>
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
  }
})