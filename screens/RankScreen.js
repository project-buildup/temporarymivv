import {
  Image,
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

function RankScreen({ navigation }) {
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
        <View style={styles.buttonContainer} onPress={() => {}}>
          <Text>랭크페이지</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RankScreen;

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
