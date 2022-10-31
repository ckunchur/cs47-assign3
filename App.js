import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Dimensions, Image, Button} from "react-native";
import { useSpotifyAuth } from "./utils";
import {Themes, Images } from "./assets/Themes";
import { AuthButton, TrackList } from './components';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  console.log(token);
  console.log(tracks[0]);
  
  
  // if token is True, render FlatList
  // else, render Authentication button

  let contentDisplayed; // set equal to list component if true
  if (token) {
    // render Flatlist
    contentDisplayed = <TrackList tracks={tracks}/>;
  }
  else { // if token false
    // render AuthButton
    contentDisplayed = <AuthButton authFunction={getSpotifyAuth}/>

  }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.titleRow}>
        <Image source={Images.spotify} style={styles.spotifyIcon}/>
        <Text style={styles.titleText}>My Top Tracks</Text>
    </View>
      {contentDisplayed} 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    padding: 20,
    marginTop: 30,
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: "center",
    padding: 15

  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginLeft: 20
    
  },
  spotifyIcon: {
    height: 0.08 * windowWidth,
    width: 0.08 * windowWidth,
    resizeMode: 'contain'
  },
  
});
