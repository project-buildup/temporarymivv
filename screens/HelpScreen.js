import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import BackIcon from "../components/BackIcon";
import AlarmIcon from "../components/AlarmIcon";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HelpStatus from "../components/HelpsStatus";
import CustomerCenter from "../components/HelpComponents";

const Stack = createNativeStackNavigator();

function HelpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.backTitle}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <BackIcon />
            </Pressable>
            <Text style={styles.title}>고객센터 / 문의</Text>
          </View>
          <AlarmIcon />
        </View>
      </View>
      <HelpStatus />
    </SafeAreaView>
  );
}

export default HelpScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
  },
  rootContainer: {
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
  backTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
    marginLeft: 24,
  },
});
