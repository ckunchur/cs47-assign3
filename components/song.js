import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions} from 'react-native';
import {Themes } from "../assets/Themes";
import  { millisToMinutesAndSeconds } from "../utils";
  
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  export default function Song({id, songIndex, imageUrl, songTitle, artistName, albumTitle, duration }) {
    return (
      <SafeAreaView style={styles.trackContainer}>
        <Text style={[styles.Text, {color: Themes.colors.gray}]}>{songIndex + 1}</Text>
        <Image style={styles.image} source={imageUrl}/>
        <View style={styles.stackedBox}>
            <Text style={styles.stackedText} numberOfLines={1}>{songTitle}</Text>
            <Text style={[styles.stackedText, {color: Themes.colors.gray}]}>{artistName}</Text>
        </View>
        <Text style={styles.Text} numberOfLines={1}>{albumTitle}</Text>
        <Text style={styles.Text}>{millisToMinutesAndSeconds(duration)}</Text>
      </SafeAreaView>
    );
  }
  
  //order: index, image, songname above artist name, album name, time 
  const styles = StyleSheet.create({
    trackContainer: {
      marginLeft: 10,
      marginRight: 10,
      marginVertical: 4,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      width: '85%'
    },
    
    stackedBox: {
        //flex: 4,
        flexDirection: 'column',
        height: 0.1 * windowHeight,
        //justifyContent: 'space-between',
        backgroundColor: 'red',
        //display: 'flex', 
        width: '30%',
    },
    stackedText: {
      fontSize: 14,
      color: Themes.colors.white,
      
    },
    Text: {
      marginLeft: 10,
      fontSize: 14,
      color: Themes.colors.white,
      width: '10%',
      
    },

    image: {
      width: 0.25 * windowWidth,
      height: 0.25 * windowWidth,
      margin: 10,
      resizeMode: 'contain'
    }
  });