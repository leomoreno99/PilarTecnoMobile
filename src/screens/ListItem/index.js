import React from "react";
import { SafeAreaView, View, Text, ImageBackground, ScrollView, Dimensions } from "react-native";
import { Header } from "react-native-elements";
import { styles } from "./styles";

const width = Dimensions.get('window').width;

export default ListItem = () => {
  return (
    <SafeAreaView style={styles.container}>
      
        <View style={styles.content}>
          {/* <Header /> */}
          <ScrollView contentContainerStyle={{flex: 1, width}} >
            <View style={{flex: 1, backgroundColor: 'red'}} ></View>
            <View style={{flex: 2, backgroundColor: 'blue'}} ></View>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};
