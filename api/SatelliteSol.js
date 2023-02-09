import axios from "axios";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Lightbox from "react-native-lightbox-v2";

import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Slider from "@react-native-community/slider";

const DataSol = () => {
  const [sol, setSol] = useState(100);
  const [roverPhotos, setRoverPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRoverData();
  }, []);

  const getRoverData = async () => {
    await axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(
          sol
        )}&api_key=0Pjk8Neps3dUjKmauVhMYNuUIbyDJPyBFHP6eswA`
      )
      .then((res) => {
        setRoverPhotos(res.data.photos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    // <View style={{ backgroundColor: "#252525" }}>
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#252525",
          width: 360,
          height: 120,
          left: 0,
          top: 0,
        }}
      >
        <Text
          style={{
            color: "#fff",
            width: 80,
            height: 22,
            left: 155,
            top: 66,
            fontWeight: "700",
            fontSize: 18,
            letterSpacing: 1,
          }}
        >
          Rovers
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 125,
            left: 122,
            top: 93,
            fontWeight: "700",
            fontSize: 10,
            letterSpacing: 1,
            color: "#928f8f",
            textAlign: "center",
          }}
        >
          (Rover in Mars)
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#252525",
        }}
      >
        <Slider
          minimumValue={0}
          maximumValue={400}
          minimumTrackTintColor="#47B2FF"
          maximumTrackTintColor="#c7dbe3"
          value={sol}
          onValueChange={(sliderValue) => setSol(sliderValue)}
          thumbTintColor="white"
          style={{ width: 300, height: 100, top: 10 }}
        />
      </View>

      <View
        style={{
          bottom: 95,
          left: 160,
          backgroundColor: "#3174A5",
          width: 50,
          paddingBottom: 10,
          paddingTop: 10,
          alignItems: "center",
          borderRadius: 4,
        }}
      >
        <Text style={{ textAlign: "center", color: "#fff" }}>
          {Math.floor(sol)}
        </Text>
      </View>
      <View style={{ alignItems: "center", bottom: 40 }}>
        <TouchableOpacity
          onPress={() => {
            getRoverData();
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 312,
              height: 56,
              // bottom: 40,
              borderRadius: 8,
              // left: 34,
              backgroundColor: "#47b2ff",
            }}
          >
            <Text style={{ color: "#fff" }}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{
          display: "flex",
          flexDirection: "column",
          bottom: 50,
          alignItems: "center",
          right: 20,
        }}
      >
        {roverPhotos?.slice(0, 10 + 1)?.map((z) => {
          return (
            <View key={Math.random()} style={{ paddingBottom: 40 }}>
              {loading ? (
                <View>
                  <ActivityIndicator
                    color="#ebf0f7"
                    size="large"
                    style={styles.loader}
                  />
                </View>
              ) : (
                <Lightbox
                  activeProps={{
                    style: { width: "100%", height: "40%" },
                  }}
                >
                  <Image
                    source={{ uri: z?.img_src }}
                    style={{
                      width: 312,
                      height: 174,
                      left: 24,
                      top: 50,
                      borderRadius: 12,
                      marginBottom: 18,
                    }}
                  />
                </Lightbox>
              )}
            </View>
          );
        })}

        {/* {roverPhotos?.slice(0, 10 + 1)?.map((z) => {
          return (
            <View key={Math.random()} style={{ paddingBottom: 40 }}>
              <Lightbox
                activeProps={{
                  style: { width: "100%", height: "40%" },
                }}
              >
                {loading ? (
                  <ActivityIndicator
                    color="red"
                    size="large"
                    style={styles.loader}
                  />
                ) : (
                  <Image
                    source={{ uri: z?.img_src }}
                    style={{
                      width: 312,
                      height: 174,
                      left: 24,
                      top: 50,
                      borderRadius: 12,
                      marginBottom: 18,
                    }}
                  />
                )}
              </Lightbox>
            </View>
          );
        })} */}
      </ScrollView>
    </View>
  );
};

export default DataSol;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#252525",
  },
  loader: {
    flex: 1,
    position: "relative",
    bottom: 150,
    left: 15,
  },
});
