import { Text, View, StyleSheet, Dimensions, Pressable } from "react-native";
import { useState } from "react";
import {
  CustomerCenter,
  Asking,
  MyQuestions,
} from "../components/HelpComponents";

export default function HelpStatus() {
  const name = ["고객센터", "내 문의내역", "문의하기"];
  const [where, setWhere] = useState(0);
  function pressHandler(index) {
    setWhere(index);
  }

  let makes = name.map((value, index) => (
    <View
      key={index}
      style={[
        styles.textwrapper,
        {
          borderColor: where === index ? "black" : "#D9D9D9",
        },
      ]}
    >
      <Pressable
        onPress={() => {
          pressHandler(index);
        }}
      >
        <Text style={styles.textbox}>{value}</Text>
      </Pressable>
    </View>
  ));
  return (
    <View>
      <View style={styles.wrapper}>{makes}</View>
      {where === 0 ? (
        <CustomerCenter />
      ) : where === 1 ? (
        <MyQuestions />
      ) : (
        <Asking />
      )}
    </View>
  );
}
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 22,
    marginRight: 22,
    flexDirection: "row",
  },
  textbox: {
    width: width / 3,
    textAlign: "center",
    fontSize: 17,
  },
  textwrapper: {
    flex: 1,
    borderBottomWidth: 1.5,
    height: 37,
  },
});
