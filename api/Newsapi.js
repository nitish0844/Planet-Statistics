import axios from "axios";
import React, { useState, useEffect } from "react";
import { Text, Image, View, ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewsApi = ({ navigation }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    getNewsData();
  }, []);

  const getNewsData = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/everything?q=space&apiKey=acce31040366454ea74f3ee29d3fc1ee`
      )
      .then((res) => {
        // console.log("getting from", res.data.articles);
        setNewsData(res.data.articles);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={{ height: "100%", width: "100%" }}>
      {newsData?.slice(0, 11)?.map((z) => {
        return (
          <View key={Math.random()}>
            <Card
              style={{
                backgroundColor: "#000",
                borderRadius: 0,
                marginBottom: 18,
              }}
            >
              <Card.Title
                titleStyle={{
                  color: "#cbcbcb",
                  fontWeight: "700",
                  top: 5,
                  letterSpacing: 1,
                }}
                title={z?.author}
              />
              <Card.Cover
                style={{ height: 165, width: 335, left: 10 }}
                source={{ uri: z?.urlToImage }}
              />
              <Card.Content>
                <Text
                  numberOfLines={2}
                  style={{
                    paddingRight: 70,
                    top: 15,
                    color: "#d2d2d2",
                    letterSpacing: 0.8,
                  }}
                  variant="bodyMedium"
                >
                  {z?.content}
                </Text>
              </Card.Content>
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  bottom: 25,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Nextnews", { uri: z?.url });
                  }}
                >
                  <View style={{ paddingRight: 20, marginTop: 10 }}>
                    <MaterialCommunityIcons
                      name="chevron-right-circle-outline"
                      size={24}
                      color="white"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        );
      })}
    </View>
  );
};

export default NewsApi;
