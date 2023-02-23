import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import MivvLogo from "../components/MivvLogo";
import AlarmIcon from "../components/AlarmIcon";
import BackIcon from "../components/BackIcon";
import { useRecoilValue } from "recoil";
import {
  challengeIdState,
  challengeState,
  userIdState,
  userState,
} from "../data/atom";
import RankItem from "../components/RankItem";

function RankScreen({ navigation }) {
  const challengeIds = useRecoilValue(challengeIdState);
  const challenges = useRecoilValue(challengeState);
  const users = useRecoilValue(userState);
  const userIds = useRecoilValue(userIdState);
  const subtitle = challenges[challengeIds[0]].subtitle;
  var firstId = "";

  for (const id of userIds) {
    if (users[id].ranking === 1) {
      firstId = id;
      break;
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rootContainer}>
        <View style={styles.logoContainer}>
          <Pressable
            style={styles.margin}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackIcon />
          </Pressable>
          <MivvLogo />
          <AlarmIcon />
        </View>
        <View style={styles.titleContainer}>
          <Text
            style={{
              color: "#535353",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 15,
            }}
          >
            👣 {subtitle} 챌린지 랭킹
          </Text>
        </View>
        <View style={styles.firstRankContainer}>
          <Text
            style={{
              color: "#F6F7FA",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 20,
            }}
          >
            1
          </Text>
          <Text
            style={{
              color: "#F6F7FA",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 15,
            }}
          >
            위
          </Text>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              margin: 15,
              backgroundColor: "#281F1F",
            }}
            source={{ uri: users[firstId].image }}
          />
          <Text
            style={{
              color: "#F6F7FA",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 15,
            }}
          >
            {users[firstId].nickname} 님
          </Text>
          <Text
            style={{
              marginLeft: 50,
              color: "#F6F7FA",
              fontFamily: "KoPubWorldDotum500",
              fontSize: 15,
            }}
          >
            {users[firstId].price.thisMonthTotal.toLocaleString("ko-KR")} 원
          </Text>
        </View>
        <View
          style={{
            width: 140,
            height: 40,
            borderRadius: 23,
            margin: 25,
            backgroundColor: "#3A3A3A",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#E8E8E8",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 16,
            }}
          >
            나의 순위
          </Text>
        </View>
        <RankItem
          rank={2}
          image={users[userIds[2]].image}
          nickname={users[userIds[2]].nickname}
          price={users[userIds[2]].price.thisMonthTotal}
        />
        <RankItem
          rank={3}
          image={users[userIds[1]].image}
          nickname={users[userIds[1]].nickname}
          price={users[userIds[1]].price.thisMonthTotal}
        />
        <RankItem
          rank={4}
          image={users[userIds[4]].image}
          nickname={users[userIds[4]].nickname}
          price={users[userIds[4]].price.thisMonthTotal}
        />
        <RankItem
          rank={5}
          image={users[userIds[3]].image}
          nickname={users[userIds[3]].nickname}
          price={users[userIds[3]].price.thisMonthTotal}
        />
      </View>
    </SafeAreaView>
  );
}

export default RankScreen;

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
    marginTop: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  margin: {
    width: 22,
  },
  titleContainer: {
    width: 300,
    height: 60,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  firstRankContainer: {
    width: 330,
    height: 90,
    backgroundColor: "#281F1F",
    borderRadius: 12,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
