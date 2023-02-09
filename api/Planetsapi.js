import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Planetsapi = () => {
  const planets = [
    {
      id: "soleil",
    },
    {
      id: "mercure",
    },
    {
      id: "venus",
    },
    {
      id: "terre",
    },
    {
      id: "mars",
    },
    {
      id: "jupiter",
    },
    {
      id: "saturne",
    },
    {
      id: "uranus",
    },
    {
      id: "neptune",
    },
  ];

  const [datas, setDatas] = useState({});
  const [pressed, onPressed] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onLoadGetPlanetData();
  }, []);

  const onLoadGetPlanetData = async () => {
    await axios
      .get(`https://api.le-systeme-solaire.net/rest/bodies/soleil`)
      //   .get(`https://api.le-systeme-solaire.net/rest/bodies/`)
      .then((res) => {
        // console.log("getting from", res.data);
        setDatas(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getPlanetData = async (planetId) => {
    await axios
      .get(`https://api.le-systeme-solaire.net/rest/bodies/${planetId}`)
      //   .get(`https://api.le-systeme-solaire.net/rest/bodies/`)
      .then((res) => {
        // console.log("getting from", res.data);
        setDatas(res.data);
        onPressed(planetId);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          style={{
            resizeMode: "cover",
            height: "100%",
            width: "100%",
          }}
          source={{ uri: "https://i.postimg.cc/tT2kndb1/bg-img.png" }}
        />
      </View>
      <View style={{ flex: 1, position: "absolute" }}>
        <ScrollView horizontal={true}>
          <TouchableOpacity
            onPress={async () => {
              await getPlanetData("soleil");
            }}
          >
            <Text style={styles.planettext}>Sun</Text>
            <Image
              style={styles.planet}
              source={{
                uri: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await getPlanetData("mercure");
            }}
          >
            <Text style={styles.planettext}>Mercury</Text>
            <Image
              style={styles.planet}
              source={{
                uri: "https://cdn.mos.cms.futurecdn.net/GA4grWEsUYUqH58cDbRBw8.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await getPlanetData("venus");
            }}
          >
            <Text style={styles.planettext}>Venus</Text>
            <Image
              style={styles.planet}
              source={{
                uri: "https://cdn.mos.cms.futurecdn.net/pR9pCBjB7tcodWJow8XVGU.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await getPlanetData("terre");
            }}
          >
            <Text style={styles.planettext}>Earth</Text>
            <Image
              style={styles.planet}
              source={{
                uri: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await getPlanetData("mars");
            }}
          >
            <Text style={styles.planettext}>Mars</Text>
            <Image
              style={styles.planet}
              source={{
                uri: "https://static.scientificamerican.com/sciam/cache/file/C454F5A6-536E-4C9F-AA6AF354BB85A85B.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await getPlanetData("jupiter");
            }}
          >
            <Text style={styles.planettext}>Jupiter</Text>
            <Image
              style={styles.planet}
              source={{
                uri: "https://cdn.mos.cms.futurecdn.net/Mza6ccKYF6WVrqZekTtJxN.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await getPlanetData("saturne");
            }}
          >
            <Text style={styles.planettext}>Saturn</Text>
            <Image
              style={styles.planet}
              source={{
                uri: "https://space-facts.com/wp-content/uploads/saturn-v2.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await getPlanetData("uranus");
            }}
          >
            <Text style={styles.planettext}>Uranus</Text>
            <Image
              style={styles.planet}
              // source={require("../images/uranus_.png")}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await getPlanetData("neptune");
            }}
          >
            <Text style={styles.planettext}>Neptune</Text>
            <Image
              style={styles.planet}
              // source={require("../images/neptune_.png")}
              source={{
                uri: "http://www.nasa.gov/sites/default/files/thumbnails/image/neptune_voyager1.jpg",
              }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
      {loading ? (
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 500,
          }}
        >
          <ActivityIndicator
            color="#ebf0f7"
            size="large"
            style={styles.loader}
          />
        </View>
      ) : (
        <View
          style={{
            position: "absolute",
            width: 312,
            height: 500,
            // left: 50,
            top: 210,
            backgroundColor: "#000",
            opacity: 0.7,
            borderRadius: 20,
            alignSelf: "center",
          }}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                left: 60,
                top: 36,
                fontWeight: "700",
                fontSize: 16,
                //   lineHeight: 8,
                letterSpacing: 1,
              }}
            >
              {`Latest weather on ${datas?.englishName}`}
            </Text>
          </View>
          <View>
            <Text
              style={{
                position: "absolute",
                width: 229,
                left: 50,
                top: 45,
                fontWeight: "500",
                fontSize: 12,
                letterSpacing: 1,
                color: "#bab7b7",
              }}
            >
              Live report from NASA Organisation
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              width: 263,
              height: 71,
              left: 25,
              top: 102,
              backgroundColor: "#353535",
              borderRadius: 15,
            }}
          >
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                left: 10,
                top: 11,
                backgroundColor: "#c2f3ed",
                borderRadius: 12,
                width: 50,
                height: 50,
              }}
            >
              <FontAwesome5
                style={{ height: 24, width: 24, top: 10, left: 5 }}
                name="temperature-high"
                size={24}
                color="black"
              />
              <Text
                style={{
                  fontSize: 12,
                  position: "absolute",
                  width: 95,
                  height: 27,
                  left: 74,
                  top: 14,
                  fontWeight: "700",
                  color: "#fff",
                  lineHeight: 13,
                }}
              >
                {`The Temperature of the ${datas?.englishName}`}
              </Text>
              <Text
                style={{
                  color: "#fff",
                  position: "absolute",
                  width: 49,
                  left: 190,
                  top: 12,
                  fontWeight: "700",
                  fontSize: 18,
                }}
              >
                {`${datas?.avgTemp}`}°F
              </Text>
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              width: 263,
              height: 71,
              left: 25,
              top: 198,
              backgroundColor: "#353535",
              borderRadius: 15,
            }}
          >
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                left: 10,
                top: 11,
                backgroundColor: "#c2f3ed",
                borderRadius: 12,
                width: 50,
                height: 50,
              }}
            >
              <FontAwesome5
                style={{ height: 24, width: 24, top: 10, left: 0 }}
                name="grav"
                size={24}
                color="black"
              />
              <Text
                style={{
                  fontSize: 12,
                  position: "absolute",
                  width: 95,
                  height: 27,
                  left: 74,
                  top: 14,
                  fontWeight: "700",
                  color: "#fff",
                  lineHeight: 13,
                }}
              >
                {`The Gravity of ${datas?.englishName}`}
              </Text>
              <Text
                style={{
                  color: "#fff",
                  position: "absolute",
                  width: 49,
                  left: 190,
                  top: 12,
                  fontWeight: "700",
                  fontSize: 18,
                }}
              >
                {`${datas?.gravity}`}
              </Text>
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              width: 263,
              height: 71,
              left: 25,
              top: 294,
              backgroundColor: "#353535",
              borderRadius: 15,
            }}
          >
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                left: 10,
                top: 11,
                backgroundColor: "#c2f3ed",
                borderRadius: 12,
                width: 50,
                height: 50,
              }}
            >
              <MaterialCommunityIcons
                style={{ height: 24, width: 24, top: 12, left: 0 }}
                name="axis-x-rotate-counterclockwise"
                size={24}
                color="black"
              />
              <Text
                style={{
                  fontSize: 12,
                  position: "absolute",
                  width: 120,
                  height: 27,
                  left: 74,
                  top: 14,
                  fontWeight: "700",
                  color: "#fff",
                  lineHeight: 13,
                }}
              >
                {`The Axial Tilt of the ${datas?.englishName}`}
              </Text>
              <Text
                style={{
                  color: "#fff",
                  position: "absolute",
                  width: 49,
                  left: 215,
                  top: 12,
                  fontWeight: "700",
                  fontSize: 18,
                }}
              >
                {Math.floor(datas?.axialTilt)}
              </Text>
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              width: 263,
              height: 71,
              left: 25,
              top: 390,
              backgroundColor: "#353535",
              borderRadius: 15,
            }}
          >
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                left: 10,
                top: 11,
                backgroundColor: "#c2f3ed",
                borderRadius: 12,
                width: 50,
                height: 50,
              }}
            >
              <FontAwesome5
                name="water"
                size={24}
                color="black"
                style={{ height: 24, width: 24, top: 10 }}
              />
              <Text
                style={{
                  fontSize: 12,
                  position: "absolute",
                  width: 95,
                  height: 27,
                  left: 74,
                  top: 14,
                  fontWeight: "700",
                  color: "#fff",
                  lineHeight: 13,
                }}
              >
                {`The Density of the ${datas?.englishName} `}
              </Text>
              <Text
                style={{
                  color: "#fff",
                  position: "absolute",
                  width: 49,
                  left: 215,
                  top: 12,
                  fontWeight: "700",
                  fontSize: 18,
                }}
              >
                {/* {`${datas?.density}`} */}
                {Math.floor(datas?.density)}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  planet: {
    height: 100,
    width: 100,
    marginLeft: 18,
    borderRadius: 20,
    width: 120,
    height: 130,
    marginTop: 60,
  },
  planettext: {
    color: "#fff",
    position: "absolute",
    top: 65,
    zIndex: 999,
    left: 30,
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
  loader: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Planetsapi;
