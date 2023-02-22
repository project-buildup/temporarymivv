//수정사항
//클릭시 설명 페이지 이동
//질문 서버로 보내기
//>로고 위치 제대로
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

export function CustomerCenter() {
  const navigation = useNavigation();

  return (
    <View style={styles.questioncontainer}>
      <Text style={[styles.text, styles.presstext]}>자주 묻는 질문 Top5</Text>
      <Pressable
        style={[styles.smallpresstext, { marginTop: 21 }]}
        onPress={() => {
          console.log("1");
        }}
      >
        <Text style={{ fontSize: 16, color: "#808080" }}>
          개인정보 변경 문의
        </Text>
        <Text style={{ fontSize: 16, color: "#888888", marginLeft: 42.16 }}>
          {">"}
        </Text>
      </Pressable>
      <Pressable
        style={styles.smallpresstext}
        onPress={() => {
          console.log("2");
        }}
      >
        <Text style={{ fontSize: 16, color: "#808080" }}>
          개인정보 변경 문의
        </Text>
        <Text style={{ fontSize: 16, color: "#888888", marginLeft: 42.16 }}>
          {">"}
        </Text>
      </Pressable>
      <Pressable
        style={styles.smallpresstext}
        onPress={() => {
          console.log("3");
        }}
      >
        <Text style={{ fontSize: 16, color: "#808080" }}>
          개인정보 변경 문의
        </Text>
        <Text style={{ fontSize: 16, color: "#888888", marginLeft: 42.16 }}>
          {">"}
        </Text>
      </Pressable>
      <Pressable
        style={styles.smallpresstext}
        onPress={() => {
          console.log("4");
        }}
      >
        <Text style={{ fontSize: 16, color: "#808080" }}>
          개인정보 변경 문의
        </Text>
        <Text style={{ fontSize: 16, color: "#888888", marginLeft: 42.16 }}>
          {">"}
        </Text>
      </Pressable>
      <Pressable
        style={styles.smallpresstext}
        onPress={() => {
          console.log("5");
        }}
      >
        <Text style={{ fontSize: 16, color: "#808080" }}>
          개인정보 변경 문의
        </Text>
        <Text style={{ fontSize: 16, color: "#888888", marginLeft: 42.16 }}>
          {">"}
        </Text>
      </Pressable>

      <Pressable
        style={styles.presstext}
        onPress={() => {
          console.log("약관");
        }}
      >
        <Text style={styles.text}>이용약관</Text>
        <Text style={{ fontSize: 16, color: "#888888", marginLeft: 42.16 }}>
          {">"}
        </Text>
      </Pressable>
      <Pressable
        style={styles.presstext}
        onPress={() => {
          console.log("방침");
        }}
      >
        <Text style={styles.text}>개인정보 처리방침</Text>
        <Text style={{ fontSize: 16, color: "#888888", marginLeft: 42.16 }}>
          {">"}
        </Text>
      </Pressable>
    </View>
  );
}

export function MyQuestions() {
  return (
    <View style={styles.questioncontainer}>
      <Text style={{ textAlign: "center" }}>가져와서해야함</Text>
    </View>
  );
}

export function Asking() {
  const [question, setQuestion] = useState();
  const handling = (newText) => {
    if (newText.length <= 1000) {
      setQuestion(newText);
    }
  };
  function sendQuestion() {
    console.log(question);
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
      <View style={styles.container}>
        <TextInput
          placeholder="궁금한 점을 작성해주세요 (최대 1,000자)"
          onChangeText={handling}
          multiline={true}
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
  },
  presstext: {
    marginLeft: 48,
    marginTop: 27,
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
  },
  smallpresstext: {
    marginLeft: 48,
    marginTop: 16,
    flexDirection: "row",
  },
});
