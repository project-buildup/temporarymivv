import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import BackIcon from "../../components/BackIcon";

function Notice_000({ setIsEvent, navigation }) {
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
                알림
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Pressable
                style={{
                  width: 100,
                  height: 38,
                  backgroundColor: "#0047CF",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 26,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  이벤트
                </Text>
              </Pressable>
              <Pressable
                style={{
                  width: 100,
                  height: 38,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                }}
                onPress={() => {
                  setIsEvent(false);
                }}
              >
                <Text
                  style={{
                    color: "#0047CF",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 16,
                  }}
                >
                  공지사항
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Notice_000;

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
