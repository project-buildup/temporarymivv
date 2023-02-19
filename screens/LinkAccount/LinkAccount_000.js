import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";

function LinkAccount_000({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <Text>LinkAccount_000</Text>
        <View style={styles.buttonContainer}>
          <Button
            title={"동의하고 다음"}
            onPress={() => {
              navigation.navigate("LinkAccount_001");
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={"완료"}
            onPress={() => {
              navigation.replace("LinkAccount_002");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default LinkAccount_000;

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
    width: 120,
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
