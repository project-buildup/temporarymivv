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

function Reg_002({ navigation, SetIsIdStored }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <Text>본인인증</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title={"카카오 본인인증"}
                onPress={() => {
                  navigation.goBack();
                  SetIsIdStored(true);
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={"토스 본인인증"}
                onPress={() => {
                  navigation.goBack();
                  SetIsIdStored(true);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Reg_002;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: "black",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  container: {
    width: "100%",
    height: 300,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonContainer: {
    marginTop: 50,
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    margin: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
