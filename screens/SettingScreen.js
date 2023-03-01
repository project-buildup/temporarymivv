import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import BackIcon from "../components/BackIcon";

function SettingScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <ScrollView bounces={false}>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable
                style={{ marginLeft: 22 }}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <BackIcon />
              </Pressable>
              <Text
                style={{
                  marginLeft: 20,
                  color: "#000000",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 19,
                }}
              >
                앱 설정
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          ></View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    width: "100%",
    height: 120,
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,
  },
  couponContainer: {
    width: 333,
    height: 569,
    margin: 20,
    backgroundColor: "#AD0000",
    overflow: "hidden",
    alignItems: "center",
  },
});
