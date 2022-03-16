import React from "react";
import { SafeAreaView, View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";

export default ListItem = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/patterns/fondo.jpg")}
      >
        <View style={styles.content}>
          <Text style={styles.title}>LIST ITEM</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
