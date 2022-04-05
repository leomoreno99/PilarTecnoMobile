import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  RefreshControl,
} from "react-native";
import { Avatar, Button, Card, Image, ListItem } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { getPokemonList, IMG_URL } from "../../api";
import { getPokemonImgId } from "../../utils";
import { styles } from "./styles";


const width = Dimensions.get("window").width;

export default List = (props) => {
  const [pokemons, setPokemons] = useState();
  const [next, setNext] = useState();
  const [refreshing, setRefreshing] = useState(false)
  const [load, setLoad] = useState(false)

  // const wait = (timeout) => {
  //   return new Promise(resolve => setTimeout(resolve, timeout));
  // }

  const getPokeList = () => {
    getPokemonList().then((data) => {
      setPokemons(data.results);
      setNext(data.next);
    });
  }

  useEffect(() => {
    console.log('Refreshing')
    getPokeList()
  }, []);

  const loadMore = () => {
    setLoad(true)
    getPokemonList(next).then((data) => {
      setPokemons([...pokemons, ...data.results]);
      setNext(data.next);
      setLoad(false)
    });
  }

  const onRefresh = useCallback( async () => {
    setRefreshing(true);
    await getPokeList()
    setRefreshing(false)
    // wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = (item, index) => {
    const path = item.url.split("/");
    // const imgID = getPokemonImgId(JSON.stringify(index+1))
    const imgID = getPokemonImgId(path[6]);
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ListItem", item = { item })}
      >
        <ListItem containerStyle={{backgroundColor: '#1F2024'}} key={index} bottomDivider style={{ width }} >
          <ListItem.Content >
            <ListItem.Title style={{color: 'white'}} >{item.name}</ListItem.Title>
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
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={()=>onRefresh()}
            />
          }
          ListFooterComponent={
            <Button buttonStyle={{backgroundColor: '#FAC820'}} titleStyle={{color: 'black'}} title='Cargar mas' loading={load} onPress={()=>loadMore()} />
          }
        />
      </View>
    </SafeAreaView>
  );
};
