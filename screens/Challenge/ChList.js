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
import MivvLogo from "../../components/MivvLogo";
import AlarmIcon from "../../components/AlarmIcon";

function ChList({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView bounces={false}>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.margin} />
            <MivvLogo />
            <AlarmIcon />
          </View>
          <View style={styles.challengeRecommandContainer}>
            <Text>챌린지 추천 배너</Text>
          </View>
          <View style={styles.challengeBannerContainer}>
            <Text>챌린지 배너</Text>
          </View>
          <View style={styles.challengeFilterContainer}>
            <View style={styles.challengeFilterTitle}>
              <Text>챌린지 필터 제목</Text>
            </View>
            <View style={styles.challengeFilterButtonContainer}>
              <Text>정렬</Text>
            </View>
          </View>
          <Pressable
            style={styles.container}
            onPress={() => {
              navigation.navigate("ChInfo");
            }}
          >
            <View style={styles.challenge}>
              <Text>챌린지</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.container}
            onPress={() => {
              navigation.navigate("ChInfo");
            }}
          >
            <View style={styles.challenge}>
              <Text>챌린지</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.container}
            onPress={() => {
              navigation.navigate("ChInfo");
            }}
          >
            <View style={styles.challenge}>
              <Text>챌린지</Text>
            </View>
          </Pressable>
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
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  challengeBannerContainer: {
    width: 315,
    height: 120,
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  challengeFilterContainer: {
    width: 315,
    height: 37,
    margin: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  challengeFilterTitle: {
    width: 270,
    height: 37,
    backgroundColor: "#c0c0c0",
    borderRadius: 15,
  },
  challengeFilterButtonContainer: {
    width: 39,
    height: 37,
    backgroundColor: "#c0c0c0",
    borderRadius: 29,
  },
  challenge: {
    width: 315,
    height: 110,
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
  },
});
