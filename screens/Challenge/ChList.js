import {
  Image,
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
import ChallengeBanner from "../../components/ChallengeBanner";
import { useRecoilValue } from "recoil";
import { challengeIdState, challengeState } from "../../data/atom";
import { useRef, useState } from "react";
import ChallengeListItem from "../../components/ChallengeListItem";
import { useScrollToTop } from "@react-navigation/native";

function ChList({ navigation }) {
  const [isUp, setIsUp] = useState(true);
  const challengeIds = useRecoilValue(challengeIdState);
  const challenges = useRecoilValue(challengeState);

  const imageUri = challenges[challengeIds[0]].image;
  const subtitle = challenges[challengeIds[0]].subtitle;
  const title = challenges[challengeIds[0]].title;
  const min = challenges[challengeIds[0]].price.min;
  const max = challenges[challengeIds[0]].price.max;
  const num = challenges[challengeIds[0]].userIds.length;
  const endAt = challenges[challengeIds[0]].endAt;

  const challengeListItems = [];

  const ref = useRef();

  useScrollToTop(ref);

  challengeIds.map((id) => {
    challengeListItems.push(
      <Pressable
        key={id}
        onPress={() => {
          navigation.navigate("ChInfo");
        }}
      >
        <ChallengeListItem
          imageUri={challenges[id].image}
          subtitle={challenges[id].subtitle}
          title={challenges[id].title}
          min={challenges[id].price.min}
          max={challenges[id].price.max}
          num={challenges[id].userIds.length}
          endAt={challenges[id].endAt}
        />
      </Pressable>
    );
  });

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView ref={ref}>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.margin} />
            <MivvLogo />
            <AlarmIcon />
          </View>
          <View style={styles.challengeRecommandContainer}>
            <Text
              style={{
                color: "#ECECEC",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 15,
              }}
            >
              이런 챌린지는 어때요?
            </Text>
            <Text
              style={{
                color: "#ECECEC",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 15,
              }}
            >
              오늘의 추천 챌린지
            </Text>
          </View>
          <View style={styles.challengeBannerContainer}>
            <ChallengeBanner
              imageUri={imageUri}
              subtitle={subtitle}
              title={title}
              min={min}
              max={max}
              num={num}
              endAt={endAt}
              isArrow={false}
            />
          </View>
          <View style={styles.challengeFilterContainer}>
            <View style={styles.challengeFilterTitle}>
              <Text
                style={{
                  color: "#ECECEC",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 15,
                }}
              >
                참여자 수
              </Text>
            </View>
            <Pressable
              style={styles.challengeFilterButtonContainer}
              onPress={() => setIsUp(!isUp)}
            >
              <Image
                style={{
                  width: 15,
                  height: 10,
                }}
                source={
                  isUp
                    ? require("../../assets/whiteUpIcon.png")
                    : require("../../assets/whiteDownIcon.png")
                }
              />
            </Pressable>
          </View>
          {challengeListItems.map((item) => item)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ChList;

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
    justifyContent: "space-around",
  },
  margin: {
    width: 22,
  },
  challengeRecommandContainer: {
    width: 315,
    height: 70,
    marginTop: 20,
    backgroundColor: "#0047CF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  challengeBannerContainer: {
    width: 315,
    height: 160,
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  challengeFilterContainer: {
    width: 315,
    height: 37,
    margin: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  challengeFilterTitle: {
    width: 270,
    height: 37,
    backgroundColor: "#292929",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  challengeFilterButtonContainer: {
    width: 39,
    height: 37,
    backgroundColor: "#292929",
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
  },
  challenge: {
    width: 315,
    height: 110,
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
  },
});
