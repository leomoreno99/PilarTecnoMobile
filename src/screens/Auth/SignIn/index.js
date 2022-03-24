import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { styles } from "./style";
import { Input, Icon, Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { actions } from '../../../store/actions'

export default SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const signIn = async () => {
    // try {
    //   await AsyncStorage.setItem("user", JSON.stringify(true));
    // } catch (e) {
    //   // saving error
    // }
    dispatch(actions.user.setUser(
      {
        user: true,
        email: email
      }
    ))
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Ingresa a Pilar Tecno</Text>
        <Input
          placeholder="Correo electrónico"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          placeholder="Contraseña"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(value) => setPassword(value)}
          keyboardType="number-pad"
        />
      </View>
      <Button
        title="Ingresar"
        containerStyle={{ width: "90%" }}
        onPress={() => signIn()}
      />
    </SafeAreaView>
  );
};
