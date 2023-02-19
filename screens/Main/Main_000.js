import {
  Image,
  ImageBackground,
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
import { useEffect, useState } from "react";
import MivvLogo from "../../components/MivvLogo";
import AlarmIcon from "../../components/AlarmIcon";
import ChallengeItem from "../../components/ChallengeItem";
import { fetchData, fetchKeyData } from "../../util/http";

function Main_000({ navigation }) {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [adImageUri, setAdImageUri] = useState();
  const [challengeImageUri, setChallengeImageUri] = useState();

  useEffect(() => {
    async function getImage(type) {
      try {
        const keys = await fetchKeyData(type);
        const image = await fetchData(type + "/" + keys[0] + "/image");
        if (type === "advertisements") {
          setAdImageUri(image);
        } else {
          setChallengeImageUri(image);
        }
      } catch (error) {
        console.log("Could not fetch keys!");
      }
    }
    getImage("advertisements");
    getImage("challenges");
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.margin} />
            <MivvLogo />
            <AlarmIcon />
          </View>
          <View style={styles.challengeBannerContainer}>
            <ImageBackground
              source={{ uri: challengeImageUri }}
              style={styles.challengeBannerContainer}
            >
              <Text>챌린지 배너</Text>
            </ImageBackground>
          </View>
          <View style={styles.challengeBannerIndicator}></View>
          <View style={styles.adBannerContainer}>
            <Image
              source={{ uri: adImageUri }}
              style={styles.adBannerContainer}
            />
          </View>
          <View style={styles.savingSectionContainer}>
            <Text>절약 섹션</Text>
          </View>
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
              <ChallengeItem
                onPress={() => {
                  setPopUpVisible(false);
                  navigation.navigate("Remit");
                }}
              />
              <ChallengeItem
                onPress={() => {
                  setPopUpVisible(false);
                  navigation.navigate("Remit");
                }}
              />
              <ChallengeItem
                onPress={() => {
                  setPopUpVisible(false);
                  navigation.navigate("Remit");
                }}
              />
            </View>
          </Dialog>
        </View>
        <View style={styles.shortsContainer}>
          <Text>영앤 리치를 향한 첫걸음! 절약 Shorts</Text>
          <ScrollView horizontal={true}>
            <View style={styles.shortsItemContainer}>
              <Pressable
                style={styles.shortsItem}
                onPress={() => {
                  navigation.navigate("Shorts");
                }}
              ></Pressable>
              <Pressable
                style={styles.shortsItem}
                onPress={() => {
                  navigation.navigate("Shorts");
                }}
              ></Pressable>
              <Pressable
                style={styles.shortsItem}
                onPress={() => {
                  navigation.navigate("Shorts");
                }}
              ></Pressable>
              <Pressable
                style={styles.shortsItem}
                onPress={() => {
                  navigation.navigate("Shorts");
                }}
              ></Pressable>
            </View>
          </ScrollView>
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
    marginBottom: 34,
    width: 315,
    height: 70,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  shortsContainer: {
    padding: 20,
    width: "100%",
    height: 270,
    backgroundColor: "#f5f5f5",
  },
  shortsItemContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  shortsItem: {
    width: 120,
    height: 190,
    backgroundColor: "#d9d9d9",
    borderRadius: 25,
    marginRight: 20,
  },
});
