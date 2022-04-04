import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { styles } from "./style";
import { Input, Icon, Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { actions } from '../../../store/actions'
import auth from "@react-native-firebase/auth";
import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";

export default SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  useEffect(()=>{
    GoogleSignin.configure({
      webClientId: '951854969622-b5a55hb8ihs3o55skimpahfkep2qmsu5.apps.googleusercontent.com',
    })
  }, [])

  const signIn = async () => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(true));
    } catch (e) {
      // saving error
    }
    dispatch(actions.user.setUser(
      {
        user: true,
        email: email
      }
    ))
  };

  const onGoogleButtonPress = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

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
      <Button
        title="Ingresar con Google"
        containerStyle={{ width: "90%", marginTop: 10 }}
        onPress={()=> onGoogleButtonPress().then(async(data)=>{
          console.log('Signed in with Google!')
          if(data){
            console.log('res login: '+JSON.stringify(data.user))
            try{
              await AsyncStorage.setItem('user', JSON.stringify(data.user))
            } catch (e) {
              console.log('hubo un error: '+e)
            }
            dispatch(actions.user.setUser(
              {
                user: true,
                email: data.user
              }
            ))
          }
        })
      }
      />
    </SafeAreaView>
  );
};
