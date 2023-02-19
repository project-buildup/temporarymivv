import {
  Button,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import MivvLogo from "../../components/MivvLogo";
import AlarmIcon from "../../components/AlarmIcon";
import BackIcon from "../../components/BackIcon";
import { useState } from "react";
import { Dialog } from "react-native-simple-dialogs";

function RCDetail({ navigation }) {
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
          <Text>RCDetail</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RCDetail;

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
