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

function ChInfo({ navigation }) {
  const [popUpVisible, setPopUpVisible] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
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
          <Pressable
            onPress={() => {
              setPopUpVisible(true);
            }}
          >
            <View style={styles.challengeBannerContainer}></View>
          </Pressable>
          <Dialog
            visible={popUpVisible}
            onTouchOutside={() => {
              setPopUpVisible(false);
            }}
          >
            <View style={styles.popUp}>
              <Text>참여하시겠습니까?</Text>
              <Button
                title="예"
                onPress={() => {
                  setPopUpVisible(false);
                }}
              />
              <Button
                title="아니오"
                onPress={() => {
                  setPopUpVisible(false);
                }}
              />
            </View>
          </Dialog>
          <View style={styles.challenge}>
            <Text>챌린지 소개</Text>
            <Text>배달말고 포장해서, 배달팁도 아끼고 건강도 챙기기!</Text>
            <Text>
              칼로리 높은 배달음식도 먹을텐데, 조금 걸어두는 편이 좋지 않겠어요?
            </Text>
          </View>
          <View style={styles.challenge}>
            <Text>챌린지 일정</Text>
            <Text>2023.03.31 챌린지 종료</Text>
          </View>
          <View style={styles.challenge}>
            <Text>챌린지 참여 Rule</Text>
            <Text>1회당 2000~4000원 송금할 수 있어요.</Text>
            <Text>하루에 2회 송금할 수 있어요.</Text>
          </View>
          <View style={styles.challenge}>
            <Text>
              지금 나와 함께 423명의 SAVER가 이 챌린지에 참여하고 있어요.
            </Text>
          </View>
          <View style={styles.challenge}>
            <Text>이 챌린지에 참여한 분들이 총 462500원을 모았어요.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ChInfo;

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
  challengeBannerContainer: {
    width: 315,
    height: 160,
    marginTop: 20,
    marginBottom: 24,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  challenge: {
    width: 315,
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
    padding: 24,
  },
});
