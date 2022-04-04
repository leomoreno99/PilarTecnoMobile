import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { getPokemonList, IMG_URL } from "../../api";
import { getPokemonImgId } from "../../utils";
import { styles } from "./styles";

const width = Dimensions.get("window").width;

export default List = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState([]);

  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemons(data.results);
      setNext(data.next);
    });
  }, []);

  const renderItem = (item, index) => {
    const path = item.url.split("/");
    // const imgID = getPokemonImgId(JSON.stringify(index+1))
    const imgID = getPokemonImgId(path[6]);
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ListItem", (item = { item }))}
      >
        <ListItem key={index} bottomDivider style={{ width }}>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
          <Avatar source={{ uri: `${IMG_URL}${imgID}.png` }} />
        </ListItem>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* <ScrollView>
            {pokemons.map((item, index) => renderItem(item, index))}
          </ScrollView> */}
        <FlatList
          data={pokemons}
          renderItem={(item, index) => renderItem(item.item, index)}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};
