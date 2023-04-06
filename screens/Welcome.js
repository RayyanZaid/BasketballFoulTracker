import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  Dimensions,
  ImageBackground,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Welcome() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/welcomeBg.png")}
    >
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={console.log("hi")}>
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: "white",
    alignItems: "center",
  },

  logo: {
    width: "30%",
    height: "30%",
  },

  buttons: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "slateblue",
    borderRadius: 25,
    width: Dimensions.get("window").width * 0.85,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
