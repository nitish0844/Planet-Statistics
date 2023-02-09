import axios from "axios";
import { Text, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useState, useRef } from "react";
import LottieView from "lottie-react-native";
import { mapstyle } from "../functions/Mapstyle";

const IssLocation = () => {
  const [astronomy, setAstronomy] = useState([]);

  const mapRef = useRef();

  const getSatelliteLocation = async () => {
    let firstLoad = false;

    setInterval(async () => {
      axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then((res) => {
          if (mapRef.current) {
            if (!firstLoad) {
              mapRef.current.animateToRegion(
                {
                  latitude: res.data.latitude,
                  longitude: res.data.longitude,
                  latitudeDelta: 60,
                  longitudeDelta: 60,
                },
                3000
              );
            }

            firstLoad = true;
          }

          //   console.log("getting from", res.data);
          setAstronomy(res?.data);
        })
        .catch((err) => console.log(err));
    }, 5000);
  };

  useEffect(() => {
    getSatelliteLocation();
  }, []);

  return (
    <View>
      <View
        style={{
          width: 400,
          height: 100,
          backgroundColor: "#000",
          zIndex: 99,
        }}
      >
        <Text
          style={{
            color: "#fff",
            position: "absolute",
            width: 78,
            left: 160,
            top: 30,
            fontWeight: "700",
            fontSize: 18,
            letterSpacing: 1,
          }}
        >
          Satellite
        </Text>
        <Text
          style={{
            position: "absolute",
            width: 125,
            left: 135,
            top: 65,
            fontWeight: "700",
            fontSize: 10,
            letterSpacing: 1,
            color: "#928f8f",
          }}
        >
          (ISS Satellite Tracker)
        </Text>
      </View>
      <MapView
        ref={mapRef}
        style={{
          width: "100%",
          height: "100%",
        }}
        // customMapStyle={mapstyle}
      >
        {astronomy && (
          <Marker
            title="International Space Station"
            coordinate={{
              latitude: astronomy?.latitude ? astronomy?.latitude : 0,
              longitude: astronomy?.longitude ? astronomy?.longitude : 0,
            }}
            // description={`Current Location of International Space Station at Latitude ${astronomy?.iss_position?.latitude} and Longitude ${astronomy?.iss_position?.longitude}`}
            // icon={require("./icon.png")}
          >
            <Image
              source={require("../images/satellite.png")}
              style={{ height: 70, width: 70 }}
            />

            {/* <LottieView
              style={{
                width: 70,
                height: 70,
              }}
              source={require("../satellite.json")}
            /> */}
          </Marker>
        )}
      </MapView>
    </View>
  );
};

export default IssLocation;
