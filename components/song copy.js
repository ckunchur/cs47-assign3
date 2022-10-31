import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import { getAlbumTracks } from '../utils/apiOptions';
import { Images, Themes } from "../assets/Themes";
import  { millisToMinutesAndSeconds, useSpotifyAuth } from "../utils";
  
  export default function Song({id, songIndex, imageUrl, songTitle, artistName, albumTitle, duration }) {
    return (
      <SafeAreaView style={styles.trackContainer}>
        <Text style={[styles.Text, {color: Themes.colors.gray}]}>{songIndex}</Text>
        <Image style={styles.image} source={imageUrl}/>
        <View style={styles.stackedBox}>
            <Text style={styles.Text} numberOfLines={1}>{songTitle}</Text>
            <Text style={[styles.Text, {color: Themes.colors.gray}]}>{artistName}</Text>
        </View>
        <Text style={styles.Text} numberOfLines={1}>{albumTitle}</Text>
        <Text style={styles.Text}>{millisToMinutes(duration)}</Text>
      </SafeAreaView>
    );
  }
  
  //order: index, image, songname above artist name, album name, time 
  const styles = StyleSheet.create({
    trackContainer: {
      padding: 6,
      marginVertical: 5,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    
    // shortBox: {
    //     //padding: 16,
    //    // marginVertical: 8,
    //     flex: 2,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // },
     
    // wideBox: {
    //   padding: 16,
    //   marginVertical: 8,
    //   flex: 1,
    //   flexDirection: 'row',
    //   justifyContent: 'space-between'
    //   },
    
    stackedBox: {
        // padding: 16,
        // marginVertical: 8,
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
  
    // wideBox: {
    //   padding: 16,
    //   marginVertical: 8,
    //   flex: 1,
    //   flexDirection: 'row',
    //   justifyContent: 'space-between'
    //   },

    Text: {
      fontSize: 14,
      color: Themes.colors.white,
      // borderWidth: 1,
      // padding: 4,
      flex: 1
    },

    image: {
      width: 80,
      height: 80,
      margin: 10,
      resizeMode: 'contain'
    }
  });