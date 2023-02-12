import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";

function Reg_000({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <Text>Reg_000</Text>
        <View style={styles.buttonContainer}>
          <Button
            title={"등록하기"}
            onPress={() => {
              navigation.navigate("Reg_001");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Reg_000;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },

  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: 80,
    height: 40,
    justifyContent: "center",
  },
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.7,
  },
});
