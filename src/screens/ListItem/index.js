import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import { Header, Icon, Image } from "react-native-elements";
import { getPokemon, IMG_URL } from "../../api";
import { styles } from "./styles";
import { getPokemonImgId } from "../../utils";
import Collapsible from "react-native-collapsible";
import { TouchableOpacity } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default ListItem = (props) => {
  const { url } = props.route.params.item;
  const [pokemon, setPokemon] = useState();
  const [imgId, setImgId] = useState();
  const [isCollapsedAbilities, setIsCollapsedAbilities] = useState(true);
  const [isCollapsedTypes, setIsCollapsedTypes] = useState(true);

  useEffect(() => {
    getPokemon(url).then((data) => {
      const path = url.split("/");
      setPokemon(data);
      setImgId(getPokemonImgId(path[6]));
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* <Header /> */}
        <ScrollView contentContainerStyle={{ flex: 1, width }}>
          <Text style={styles.title} >{pokemon?.name}</Text>
          <View style={styles.circle__container}>
            <Text style={styles.text__circle}>
              {imgId}
            </Text>
          </View>
          <View style={styles.container__image}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{ uri: `${IMG_URL}${imgId}.png` }}
            />
          </View>
          {/* Informacion */}
          <View style={styles.container__information}>
            <View style={styles.information}>
                <View style={styles.text__information__container} >
                  <View style={[styles.container__text, styles.cont_1]} ><Text style={styles.text__information} >Peso</Text></View>
                  <View style={[styles.container__text, styles.cont_2]} ><Text style={styles.text_var} >{pokemon?.weight}</Text></View>
                </View>
                <View style={styles.text__information__container}>
                  <View style={[styles.container__text, styles.cont_1]} ><Text style={styles.text__information}>Altura</Text></View>
                  <View style={[styles.container__text, styles.cont_2]} ><Text style={styles.text_var}>{pokemon?.height}</Text></View>
                </View>


              <View
                style={styles.collapsible__container}
              >
                <TouchableOpacity onPress={() => setIsCollapsedAbilities(!isCollapsedAbilities)}>
                <View style={styles.collapsible__container__text} >
                  <View style={[styles.container__text, styles.cont_1]} ><Text style={styles.text__information}>Habilidades</Text></View>
                  <View style={[styles.container__text, styles.cont_2]} ><Icon name={'angle-down'} type="font-awesome" size={22} color='white' /></View>
                </View>
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsedAbilities}>
                  {pokemon?.abilities.map((a) => (
                      <Text style={styles.collapsible__text}>{a.ability.name} </Text>
                  ))}
                </Collapsible>
              </View>

              <View
                style={styles.collapsible__container}
              >
                <TouchableOpacity onPress={() => setIsCollapsedTypes(!isCollapsedTypes)}>
                <View style={styles.collapsible__container__text} >
                  <View style={[styles.container__text, styles.cont_1]} ><Text style={styles.text__information}>Tipos</Text></View>
                  <View style={[styles.container__text, styles.cont_2]} ><Icon name={'angle-down'} type="font-awesome" size={22} color='white' /></View>
                </View>
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsedTypes}>
                  {pokemon?.types.map((type) => (
                      <Text style={styles.collapsible__text}>{type.type.name} </Text>
                  ))}
                </Collapsible>
              </View>

              
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
