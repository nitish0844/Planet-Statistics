import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Lightbox from "react-native-lightbox-v2";
import ImageViewer from "react-native-image-zoom-viewer";

const Picoftheday = () => {
  const [astronomy, setAstronomy] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAstronomy();
  }, []);

  // const getAstronomy = async () => {
  //   try {
  //     await axios
  //       .get(
  //         "https://api.nasa.gov/planetary/apod?api_key=0Pjk8Neps3dUjKmauVhMYNuUIbyDJPyBFHP6eswA"
  //       )
  //       .then((res) => {
  //         //   console.log("getting from", res.data);
  //         setAstronomy(res.data);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getAstronomy = async () => {
    await axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=0Pjk8Neps3dUjKmauVhMYNuUIbyDJPyBFHP6eswA"
      )
      .then((res) => {
        //   console.log("getting from", res.data);
        setAstronomy(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={{ marginTop: 0 }}>
          <ActivityIndicator color={"red"} size="large" />
        </View>
      ) : (
        <View>
          <Lightbox
            activeProps={{
              style: { width: "100%", height: "50%" },
            }}
          >
            <Image
              source={{ uri: astronomy?.url }}
              style={{
                width: 345,
                height: 188,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                marginLeft: 25,
              }}
            />
          </Lightbox>
          <View style={{ position: "relative", bottom: 60, left: 34 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "800",
              }}
            >
              {astronomy?.title}
            </Text>
            <Text
              style={{
                color: "#adadad",
                fontSize: 12,
                fontWeight: "400",
                letterSpacing: 1,
                top: 5,
              }}
            >
              {astronomy?.date}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
export default Picoftheday;

const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get("window").width ,
    // height: Dimensions.get("window").height,
    width: "95%",
  },
});
