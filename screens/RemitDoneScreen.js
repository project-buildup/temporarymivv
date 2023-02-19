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
import CheckIcon from "../components/CheckIcon";
function RemitDoneScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={styles.logoContainer}>
          <MivvLogo />
        </View>
        <View style={styles.checkContainer}>
          <CheckIcon />
          <View style={styles.checkTextContainer}>
            <Text>송금이 완료되었습니다!</Text>
          </View>
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Rank");
          }}
        >
          <Text>랭킹 확인하기</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Value");
          }}
        >
          <Text>가치 소비 추천</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Main_000");
          }}
        >
          <Text>절약 현황 확인하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default RemitDoneScreen;

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
  checkContainer: {
    margin: 40,
    alignItems: "center",
  },
  checkTextContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    width: 280,
    height: 64,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    marginTop: 22,
    alignItems: "center",
    justifyContent: "center",
  },
});
