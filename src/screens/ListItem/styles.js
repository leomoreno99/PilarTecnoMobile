import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c'
      },
      content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
      },
      title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 10
      },
      circle__container: {
        height: 50, width: 50, zIndex: 2, borderRadius: 10, position: "absolute", right: 20, top: 85,
        backgroundColor: "#FAC820",
        justifyContent: "center",
        alignItems: "center",
            
      },
      text__circle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black"
      },
      container__image: {
        flex: 1,
        backgroundColor: "#1F2024",
        margin: '3%',
        borderRadius: 10
      },
      image: {
        width: "100%",
        height: "100%"
      },
      container__information: {
        flex: 2,
        alignItems: "flex-start",
        backgroundColor: "#1F2024",
        margin: '3%',
        marginTop: 0,
        borderRadius: 10
      },
      information: {
        // backgroundColor: "black",
        width: '100%'
      },
      text__information__container: {
        margin: '2%',
        flexDirection: 'row',
        padding: '2%',
        borderRadius: 6,
        backgroundColor: '#303035',
      },
      text__information: {
        color: 'white',
        fontWeight: 'bold',
      },
      text_var: {
        color: '#FAC820',
        fontWeight: 'bold',
      },
      container__text: {
        width: '50%',
      },
      cont_2: {
        alignItems: 'flex-end'
      },
      collapsible__container: {
        flexDirection: "column",
        margin: '2%',
        padding: '2%',
        borderRadius: 6,
        backgroundColor: '#303035',
      },
      collapsible__container__text: {
        flexDirection: 'row'
      },
      collapsible__text: {
        color: '#FAC820',
        margin: '1%',
        marginBottom: 0
      }

})