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
import { Dialog } from "react-native-simple-dialogs";
import { useState } from "react";
import MivvLogo from "../../components/MivvLogo";
import AlarmIcon from "../../components/AlarmIcon";
import PopUpChallenge from "../../components/PopUpChallenge";

function Main_000({ navigation }) {
  const [popUpVisible, setPopUpVisible] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.margin} />
            <MivvLogo />
            <AlarmIcon />
          </View>
          <View style={styles.challengeBannerContainer}></View>
          <View style={styles.challengeBannerIndicator}></View>
          <View style={styles.adBannerContainer}></View>
          <View style={styles.savingSectionContainer}></View>
          <Pressable
            style={styles.savingButtonContainer}
            onPress={() => {
              setPopUpVisible(true);
            }}
          >
            <Text>절약하러가기</Text>
          </Pressable>
          <Dialog
            visible={popUpVisible}
            onTouchOutside={() => {
              setPopUpVisible(false);
            }}
          >
            <View style={styles.popUp}>
              <PopUpChallenge
                onPress={() => {
                  setPopUpVisible(false);
                  navigation.navigate("Remit");
                }}
              />
              <PopUpChallenge
                onPress={() => {
                  setPopUpVisible(false);
                  navigation.navigate("Remit");
                }}
              />
              <PopUpChallenge
                onPress={() => {
                  setPopUpVisible(false);
                  navigation.navigate("Remit");
                }}
              />
            </View>
          </Dialog>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Main_000;

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
    margin: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  margin: {
    width: 22,
  },
  challengeBannerContainer: {
    width: 315,
    height: 160,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  challengeBannerIndicator: {
    height: 5,
    width: 50,
    margin: 15,
    backgroundColor: "#f0f0f0",
  },
  adBannerContainer: {
    width: 315,
    height: 120,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  savingSectionContainer: {
    margin: 34,
    width: 315,
    height: 260,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  savingButtonContainer: {
    width: 315,
    height: 70,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
