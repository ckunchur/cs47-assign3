import { StyleSheet, SafeAreaView, Text, TouchableOpacity, Image, Button} from "react-native";
import { useSpotifyAuth } from "./utils";
import {Themes } from "./assets/Themes";
import { AuthButton, TrackList } from './components';



export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  
  // if token is True, render FlatList
  // else, render Authentication button

  let contentDisplayed; // set equal to list component if true
  if (token) {
    // render Flatlist
    contentDisplayed = <TrackList tracks={tracks}/>;
  }
  else { // if token false
    // render AuthButton
    contentDisplayed = <AuthButton authfunction={getSpotifyAuth}/>

  }
  return (
    <SafeAreaView style={styles.container}>
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
});
