import React from "react";
import { SafeAreaView, View, Text, ImageBackground, ToastAndroid } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { styles } from "./styles";

export default Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.mainContent} source={require('../../assets/patterns/fondo.jpg')} >
        <View style= {styles.rowContent} >
        <Pressable
          style={styles.buttonContent}
          onPress={() => ToastAndroid.show('Ya te encuentras en Home', ToastAndroid.SHORT)}
        >
          <Text style={styles.title} >Home</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContent}
          onPress={() => props.navigation.navigate('List')}
        >
          <Text style={styles.title} >List</Text>
        </Pressable>
        </View>
        <View style= {styles.rowContent} >
        <Pressable
          style={styles.buttonContent}
          onPress={() => props.navigation.navigate('Map')}
        >
          <Text style={styles.title} >Map</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContent}
          onPress={() => props.navigation.navigate('Profile')}
        >
          <Text style={styles.title} >Profile</Text>
        </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
