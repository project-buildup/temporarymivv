//수정사항
//클릭시 설명 페이지 이동 - notion update 아직
//문의내역 가져오기 - 이미지 업데이트 아직

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { helpIdState, userIdState, helpState } from "../data/atom";
import { useSetRecoilState, useRecoilValue } from "recoil";

export function CustomerCenter() {
  const navigation = useNavigation();

  return (
    <View style={styles.questioncontainer}>
      <View
        style={{
          backgroundColor: "#F9F9FB",
          marginTop: 16.75,
          width: 330,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#EFF1F5",
            height: 56,
            borderRadius: 20,
            width: 330,
          }}
        >
          <Text style={[styles.text, styles.presstext]}>
            자주 묻는 질문 Top5
          </Text>
        </View>
        <Pressable
          style={[styles.smallpresstext, { marginTop: 21 }]}
          onPress={() => {
            console.log("1");
          }}
        >
          <View style={styles.displayrow}>
            <Text style={styles.bigFont}>개인정보 변경 문의</Text>
            <Text style={styles.font}>{">"}</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.smallpresstext}
          onPress={() => {
            console.log("2");
          }}
        >
          <View style={styles.displayrow}>
            <Text style={styles.bigFont}>개인정보 변경 문의</Text>
            <Text style={styles.font}>{">"}</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.smallpresstext}
          onPress={() => {
            console.log("3");
          }}
        >
          <View style={styles.displayrow}>
            <Text style={styles.bigFont}>개인정보 변경 문의</Text>
            <Text style={styles.font}>{">"}</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.smallpresstext}
          onPress={() => {
            console.log("4");
          }}
        >
          <View style={styles.displayrow}>
            <Text style={styles.bigFont}>개인정보 변경 문의</Text>
            <Text style={styles.font}>{">"}</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.smallpresstext}
          onPress={() => {
            console.log("5");
          }}
        >
          <View style={[styles.displayrow, { marginBottom: 19 }]}>
            <Text style={styles.bigFont}>개인정보 변경 문의</Text>
            <Text style={styles.font}>{">"}</Text>
          </View>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: "#EFF1F5",
          height: 56,
          borderRadius: 20,
          width: 330,
          marginTop: 17,
        }}
      >
        <Pressable
          style={styles.presstext}
          onPress={() => {
            console.log("약관");
          }}
        >
          <View style={[styles.displayrow, { width: "90%" }]}>
            <Text style={styles.text}>이용약관</Text>
            <Text style={[styles.font, { fontSize: 20 }]}>{">"}</Text>
          </View>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: "#EFF1F5",
          height: 56,
          borderRadius: 20,
          width: 330,
          marginTop: 17,
        }}
      >
        <Pressable
          style={styles.presstext}
          onPress={() => {
            console.log("방침");
          }}
        >
          <View style={[styles.displayrow, { width: "90%" }]}>
            <Text style={styles.text}>개인정보 처리방침</Text>
            <Text style={[styles.font, { fontSize: 20 }]}>{">"}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
///////////////////////////////// 내 문의내역 //////////////////////////////////////////////
export function MyQuestions() {
  return (
    <View style={styles.questioncontainer}>
      <Text style={{ textAlign: "center" }}>가져와서해야함</Text>
    </View>
  );
}
/////////////////////////////////////// 문의하기 //////////////////////////////////////////////
export function Asking() {
  const userIds = useRecoilValue(userIdState);
  const [question, setQuestion] = useState();
  const [title, setTitle] = useState();
  const setHelps = useSetRecoilState(helpState);
  const helpIds = useRecoilValue(helpIdState);
  const helps = useRecoilValue(helpState);
  const handling = (newText) => {
    if (newText.length <= 1000) {
      setQuestion(newText);
    }
  };
  const handlingTitle = (title) => {
    setTitle(title);
  };
  function sendQuestion() {
    const id = helpIds[0];
    const updatedHelp = {
      ...helps,
      [id]: {
        ...helps[id],
        askTime: new Date(),
        content: question,
        userId: userIds[0],
        title: title,
      },
    };
    console.log(helps[id]);
    setHelps(updatedHelp);
  }
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          marginLeft: 49,
          marginBottom: 13,
          marginTop: 13,
          fontWeight: "bold",
        }}
      >
        어떤 점이 궁금하신가요?
      </Text>
      <View style={[styles.container, { height: 48, marginBottom: 13 }]}>
        <TextInput
          placeholder="문의 제목"
          onChangeText={handlingTitle}
          multiline={true}
          style={{ marginLeft: 23, marginRight: 26 }}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          placeholder="궁금한 점을 작성해주세요 (최대 1,000자)"
          onChangeText={handling}
          multiline={true}
          style={{ marginLeft: 23, marginRight: 26 }}
        />
      </View>
      <View style={styles.buttonwrapper}>
        <Button color="white" title="문의하기" onPress={sendQuestion} />
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    height: (height / 3) * 2,
    marginLeft: 41,
    marginRight: 40,
    height: 360,
    backgroundColor: "#F2F3F7",
    borderRadius: 19,
  },
  buttonwrapper: {
    backgroundColor: "#292929",
    marginLeft: 40,
    marginRight: 39,
    marginTop: 15,
    borderRadius: 29,
  },
  questioncontainer: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  presstext: {
    marginLeft: 20,
    flexDirection: "row",
    marginTop: 13,
  },
  text: {
    fontSize: 20,
    fontFamily: "KoPubWorldDotum500",
  },
  smallpresstext: {
    marginTop: 16,
    flexDirection: "row",
  },
  displayrow: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
  font: {
    fontSize: 16,
    color: "#888888",
  },
  bigFont: {
    fontSize: 16,
    color: "#808080",
    marginLeft: 31,
  },
});
