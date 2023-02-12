import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import MivvLogo from "../components/MivvLogo";
import AlarmIcon from "../components/AlarmIcon";
import BackIcon from "../components/BackIcon";

function RemitScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={styles.logoContainer}>
          <Pressable
            style={styles.margin}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackIcon />
          </Pressable>

          <MivvLogo />
          <AlarmIcon />
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.replace("RemitDone");
          }}
        >
          <Text>토스에서 송금하기</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Text>카카오페이에서 송금하기</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Text>뱅크샐러드에서 송금하기</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Text>은행 앱에서 송금하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default RemitScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    alignItems: "center",
  },
  logoContainer: {
    width: "100%",
    margin: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  margin: {
    width: 22,
  },
  buttonContainer: {
    width: 260,
    height: 60,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
