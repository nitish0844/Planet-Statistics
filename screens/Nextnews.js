import React from "react";
import { WebView } from "react-native-webview";
import { View, Text, SafeAreaView } from "react-native";

const Nextnews = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: route?.params?.uri }} />
    </SafeAreaView>
  );
};

export default Nextnews;
