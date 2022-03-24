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
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#1F2024',
        paddingTop: 80
      },
      title: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 30,
        paddingTop: 20
      },
      subtitle: {
        color: '#787481',
        fontWeight: '500',
        fontSize: 12,
        paddingTop: 5
      },
      buttonContainer: {
        marginTop: 50
      }
})