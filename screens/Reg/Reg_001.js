import {
  Button,
  Modal,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";

function Reg_001({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <Text>Reg_001</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title={"뒤로가기"}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={"본인인증"}
                onPress={() => {
                  navigation.goBack();
                  navigation.navigate("Reg_002");
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Reg_001;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: "black",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: 334,
    height: 141,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
