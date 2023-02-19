import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import BackIcon from "../components/BackIcon";

function ShortsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
            <View style={{ width: 30 }}></View>
            <Pressable
              style={styles.margin}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <BackIcon />
            </Pressable>
          </View>
          <Text>ShortsScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ShortsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    width: "100%",
    marginTop: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  margin: {
    width: 22,
  },
});
