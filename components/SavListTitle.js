import { Text, View } from "react-native";

function SavListTitle({ content }) {
  return (
    <View
      style={{
        width: "100%",
        height: 44,
        backgroundColor: "#EBEBEB",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        opacity: 0.28,
      }}
    >
      <Text style={{ fontFamily: "KoPubWorldDotum700", fontSize: 14 }}>
        {content}
      </Text>
    </View>
  );
}

export default SavListTitle;
