import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";
export function CustomerCenter() {
  return (
    <View style={styles.questioncontainer}>
      <Text>고객센터*****</Text>
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
});
