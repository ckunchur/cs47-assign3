import { StyleSheet, SafeAreaView, Text, FlatList} from "react-native";
import { Images, Themes } from "../assets/Themes";
import Constants from 'expo-constants';
import Song from './song';



export default TrackList=({tracks}) => {

  const renderSong = ({item, index}) => (
    <Song
      id={item.id}
      songIndex={index}
      imageUrl={item.album.images} 
      songTitle={item.name}
      artistName={item.artists[0].name}
      albumTitle={item.album.name}
      duration={item.duration_ms}
      />
  );


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tracks} // the array of data that the FlatList displays
        renderItem={(item) => renderSong(item)} // function that renders each item
        keyExtractor={(item) => item.id} // unique key for each item
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    backgroundColor: Themes.colors.background,
  },
});

  

