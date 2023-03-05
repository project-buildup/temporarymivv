import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import BackIcon from "../../components/BackIcon";
import SavListItem from "../../components/SavListItem";
import { useRecoilValue } from "recoil";
import { userIdState, userState } from "../../data/atom";
import SavListTitle from "../../components/SavListTitle";

function SavList_001({ setIsMonth, navigation }) {
  const userIds = useRecoilValue(userIdState);
  const users = useRecoilValue(userState);

  return (
    <View style={styles.root}>
      <ScrollView bounces={false}>
        <View style={styles.rootContainer}>
          <SavListTitle content={"2023년 3월 3일 (금)"} />
          <SavListItem
            image={users[userIds[0]].image}
            content="택시 대신 만보걷기"
            time="04:12"
            price={4500}
          />
          <SavListItem
            image={users[userIds[0]].image}
            content="택시 대신 만보걷기"
            time="04:12"
            price={4500}
          />
          <SavListTitle content={"2023년 3월 1일 (수)"} />
          <SavListItem
            image={users[userIds[0]].image}
            content="택시 대신 만보걷기"
            time="04:12"
            price={4500}
          />
          <SavListItem
            image={users[userIds[0]].image}
            content="택시 대신 만보걷기"
            time="04:12"
            price={4500}
          />
        </View>
      </ScrollView>
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
            절약 내역
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => setIsMonth(true)}>
            <Text
              style={{
                color: "#C8C8C8",
                fontFamily: "KoPubWorldDotum700",
                fontSize: 19,
              }}
            >
              월별
            </Text>
          </Pressable>
          <Text
            style={{
              color: "#C8C8C8",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 19,
            }}
          >
            {" "}
            |{" "}
          </Text>
          <Text
            style={{
              color: "#0047CF",
              fontFamily: "KoPubWorldDotum700",
              fontSize: 19,
              marginRight: 24,
            }}
          >
            전체
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SavList_001;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 120,
  },
  logoContainer: {
    width: "100%",
    height: 120,
    paddingTop: 50,
    position: "absolute",
    top: 0,
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

/*
<View style={{ flexDirection: "row" }}>
              <Pressable
                onPress={() => {
                  setIsMonth(true);
                }}
              >
                <Text
                  style={{
                    color: "#C8C8C8",
                    fontFamily: "KoPubWorldDotum700",
                    fontSize: 19,
                  }}
                >
                  월별
                </Text>
              </Pressable>
              <Text
                style={{
                  color: "#C8C8C8",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 19,
                }}
              >
                {" "}
                |{" "}
              </Text>
              <Text
                style={{
                  color: "#0047CF",
                  fontFamily: "KoPubWorldDotum700",
                  fontSize: 19,
                  marginRight: 24,
                }}
              >
                전체
              </Text>
            </View>
*/
