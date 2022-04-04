import React from "react";
import { SafeAreaView, View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/actions";
import AvatarComponent from "../../components/Profile/AvatarComponent";
import ButtonComponent from "../../components/ButtonComponent";

export default Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
console.log(user)
const { email, name } = user

  const signOut = async () => {
    try {
      await AsyncStorage.delItem("user", JSON.stringify(false));
    } catch (e) {
      // saving error
    }
    dispatch(actions.user.setUser(
      {
        user: false,
        email: ''
      }
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AvatarComponent
          size={150}
          uri="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{email}</Text>

        <View style={styles.buttonContainer}>
          <ButtonComponent title="Cerrar Sesion" onPress={()=>signOut()} />
        </View>
      </View>
    </SafeAreaView>
  );
};
