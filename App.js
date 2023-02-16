import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Onboard from "./screens/Onboard";
import HomeScreen from "./screens/HomeScreen";
import IssLocation from "./api/Isslocation";
import DataSol from "./api/SatelliteSol";
import Planetsapi from "./api/Planetsapi";

import Nextnews from "./screens/Nextnews";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Nextnews"
          component={Nextnews}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OnBoard"
          component={Onboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const BottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarStyle: { backgroundColor: "red" },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-variant" : "home-variant-outline";
            } else if (route.name === "Planetsapi") {
              iconName = focused ? "earth" : "google-earth";
            } else if (route.name === "Isslocation") {
              iconName = focused ? "satellite-uplink" : "satellite-variant";
            } else if (route.name === "DataSol") {
              iconName = focused ? "robot" : "robot-outline";
            }

            // let iconName;
            // if (route.name === "Home") {
            //   iconName = focused ? "home-variant" : "home-variant-outline";
            // } else if (route.name === "Planetsapi") {
            //   iconName = focused ? "earth" : "google-earth";
            // } else if (route.name === "DataSol") {
            //   iconName = focused ? "robot" : "robot-outline";
            // }
            return (
              // <View style={{ backgroundColor: focused ? "red" : "blue" }}>
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                // colour={focused ? "red" : "blue"}
              />
              // </View>
            );
          },
        })}
      >
        <Tab.Screen
          options={{
            header: () => null,
            tabBarLabel: () => {
              return null;
            },
          }}
          name="Home"
          // component={HomeScreen}
          component={HomeStack}
        />
        <Tab.Screen
          options={{
            header: () => null,
            tabBarLabel: () => {
              return null;
            },
          }}
          name="Planetsapi"
          component={Planetsapi}
        />
        <Tab.Screen
          options={{
            header: () => null,
            tabBarLabel: () => {
              return null;
            },
          }}
          name="Isslocation"
          component={IssLocation}
        />
        <Tab.Screen
          options={{
            header: () => null,
            tabBarLabel: () => {
              return null;
            },
          }}
          name="DataSol"
          component={DataSol}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoard"
          component={Onboard}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return <RootNavigator />;
}
