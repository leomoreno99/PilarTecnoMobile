import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },
      content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
      },
      title: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 50
      }
})