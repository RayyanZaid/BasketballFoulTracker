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

export default function Welcome() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/welcomeBg.png")}
    >
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>

      <View style={styles.buttons}>
        <View style={styles.rectangle1}></View>
        <View style={styles.rectangle2}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },

  rectangle1: {
    backgroundColor: "dodgerblue",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.07,
  },

  rectangle2: {
    backgroundColor: "gray",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.07,
  },
});
