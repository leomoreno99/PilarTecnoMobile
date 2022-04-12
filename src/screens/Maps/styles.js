import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  markerFixed: {
    // left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: "absolute",
    // top: '50%'
    top: height / 2,
    left: width / 2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    alignSelf: "center",
  },
  marker: {
    height: 48,
    width: 48,
  },
  footer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  region: {
    color: "#fff",
    lineHeight: 20,
    margin: 20,
    alignSelf: "center",
  },
  switch: {
    position: "absolute",
    top: 10,
    right: 50,
    backgroundColor: "white",
    borderRadius: 100,
    
  },
  circle: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 100,
  },
});