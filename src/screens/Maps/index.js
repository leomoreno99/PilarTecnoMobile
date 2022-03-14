import React from "react";
import { SafeAreaView, View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";

export default Maps = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/patterns/fondo.jpg")}
      >
        <View style={styles.content}>
          <Text style={styles.title}>MAP</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
