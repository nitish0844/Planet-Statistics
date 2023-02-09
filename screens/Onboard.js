import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Onboard = ({ navigation }) => {
  return (
    // <SafeAreaView >
    <View style={styles.container}>
      <View style={{ position: "relative", height: "100%", width: "100%" }}>
        <Image
          style={{ height: "100%", width: "100%" }}
          // source={require("../images/1.png")}
          source={{ uri: "https://i.postimg.cc/xdsNK6kS/1.png" }}
        />
        <View
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            top: 120,
            alignSelf: "center",
          }}
        >
          <FontAwesome name="globe" size={50} color="white" />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: "45%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 30,
              color: "#fff",
            }}
          >
            Planet Statistics
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 13,
              fontWeight: "600",
              paddingTop: 10,
              color: "#c3c3c3",
              textAlign: "center",
              lineHeight: 18,
            }}
          >
            Explore the universe where {"\n"} information is delivered to you
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: "80%",
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("BottomTabs")}>
            <Text
              style={{
                color: "#fff",
                backgroundColor: "#040509",
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 132,
                paddingRight: 132,
                alignItems: "center",
                textAlign: "center",
                borderRadius: 8,
                justifyContent: "center",
                alignContent: "center",
                fontWeight: "700",
                lineHeight: 24,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  head: {
    color: "#fff",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
