import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import { Icon, Switch } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import { styles } from "./styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default Maps = (props) => {
  const ASPECT_RATIO = width / height;
  const LATITUDE = -29.4118108;
  const LONGITUDE = -66.8556534;
  const LATITUDE_DELTA = 0.00422;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const [checked, setChecked] = useState(true);
  const [mapType, setMapType] = useState("standard");
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const mapRef = useRef(null);

  useEffect(() => {
    _getLocation();
  }, []);

  useEffect(() => {
    checked ? setMapType("standard") : setMapType("hybrid");
  }, [checked]);

  const onRegionChange = (region) => {
    setRegion(region);
  };

  const fitCoordinates = async () => {
    console.log("centrando mapa");
    _getLocation();
  };

  const _getLocation = async () => {
    await Geolocation.getCurrentPosition(
      async (posicion) => {
        const longitude = posicion.coords.longitude;
        const latitude = posicion.coords.latitude;
        mapRef.current.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          },
          1000
        );
        setRegion({ region: { ...region, longitude, latitude } });
        console.log(
          "posicion actual... Latitud: " +
            `${JSON.stringify(longitude)}` +
            "latitud: " +
            `${JSON.stringify(latitude)}`
        );
      },
      (error) => {
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        console.log(error.code, error.message);
      },
      {
        accuracy: {
          android: "high",
          ios: "best",
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
      }
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        initialRegion={region}
        style={styles.map}
        onRegionChange={(region) => onRegionChange(region)}
        mapType={mapType}
      />
      <View style={styles.circle}>
        <Icon
          name="crosshairs"
          type="font-awesome"
          color="gray"
          size={width / 10}
          onPress={() => fitCoordinates()}
        />
      </View>

      <View style={styles.markerFixed}>
        <Image
          style={styles.marker}
          source={require("../../assets/images/location-marker-icon.png")}
        />
      </View>

      {/* <Switch
      style={styles.switch}
      value={checked}
      onValueChange={(value) => setChecked(value)}
      /> */}
      <View style={styles.switch}>
        <Icon
          name="layers"
          type="material"
          color="gray"
          size={width / 10}
          value={checked}
          onPress={() => setChecked(!checked)}
        />
      </View>

      <SafeAreaView style={styles.footer}>
        <Text style={styles.region}>
          longitud:{JSON.stringify(region.longitude)}
          {"\n"}latitud:{JSON.stringify(region.latitude)}
        </Text>
      </SafeAreaView>
    </View>
  );
};
