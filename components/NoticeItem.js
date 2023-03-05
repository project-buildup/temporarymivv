import { Image, Pressable, Text, View } from "react-native";

function NoticeItem({ image, content, desc }) {
  return (
    <View
      style={{
        width: 358,
        height: 83,
        borderRadius: 16,
        marginBottom: 14,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f4f6f9",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.65,
        elevation: 6,
      }}
    >
      <View
        style={{
          width: 43,
          height: 43,
          borderRadius: 100,
          marginLeft: 6,
          backgroundColor: "#f0f0f0",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.2,
          shadowRadius: 3.65,
          elevation: 6,
        }}
      >
        <Image
          style={{
            width: 43,
            height: 43,
            borderRadius: 100,
            overflow: "hidden",
          }}
          source={image}
        />
      </View>
      <View style={{ marginLeft: 11 }}>
        <Text
          style={{
            color: "#000000",
            fontFamily: "KoPubWorldDotum700",
            fontSize: 15,
          }}
        >
          {content}
        </Text>
        <Text
          style={{
            color: "#999999",
            fontFamily: "KoPubWorldDotum500",
            fontSize: 12,
          }}
        >
          {desc}
        </Text>
      </View>
      <Pressable
        style={{ position: "absolute", top: 15, right: 15 }}
        onPress={() => {}}
      >
        <Image
          style={{
            width: 15,
            height: 15,
          }}
          source={require("../assets/xIcon.png")}
        />
      </Pressable>
    </View>
  );
}

export default NoticeItem;
