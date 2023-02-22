//수정사항
//은행 이름 받아서 빈 칸에 넣기
//완료 버튼 넣기
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { useState } from "react";

function LinkAccount_000({ navigation }) {
  const [input, setInput] = useState();
  return (
    <SafeAreaView style={styles.root}>
      <View style={{ marginTop: 45, marginLeft: 45 }}>
        <Text style={{ fontSize: 22 }}>은행계좌 연결하기</Text>
        <Text style={{ fontSize: 18, marginTop: 10 }}>
          버튼을 눌러 나의 계좌를 연결해보세요.
        </Text>
      </View>
      <View style={styles.rootContainer}>
        {input ? (
          <View
            style={{
              backgroundColor: "#EFF1F5",
              width: 333,
              borderRadius: 20,
              height: 33,
            }}
          >
            <Text
              style={{ color: "#616161", fontSize: 20, textAlign: "center" }}
            >
              {input}
            </Text>
          </View>
        ) : null}

        <View style={styles.buttonContainer}>
          <Button
            title={"완료"}
            onPress={() => {
              navigation.replace("LinkAccount_002");
            }}
          />
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("LinkAccount_001");
          setInput("A 은행");
        }}
        style={{ alignItems: "center" }}
      >
        <View style={styles.buttonWrapper}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#ECECEC",
              textAlign: "center",
            }}
          >
            동의하고 다음
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
export default LinkAccount_000;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
  },

  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 22,
  },
  buttonContainer: {
    width: 120,
    height: 40,
    justifyContent: "center",
  },
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.7,
  },
  buttonWrapper: {
    backgroundColor: "#292929",
    width: 333,
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
    height: 45,
    justifyContent: "center",
  },
});
