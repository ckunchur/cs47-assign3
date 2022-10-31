import { StyleSheet, SafeAreaView, Text, TouchableOpacity, Image, Button, Dimensions} from "react-native";
import { Images, Themes } from "../assets/Themes";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default AuthButton = ({authFunction}) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={authFunction}
          >
            <Image source={Images.spotify} style={styles.spotifyIcon}/>
            <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
          </TouchableOpacity>
        </View>
      );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: 'center',
      paddingHorizontal: 10,
      flexDirection: row
    },
    button: {
      alignItems: "center",
      backgroundColor: Themes.colors.spotify,
      borderRadius: '100%',
      padding: 10
    },
    authText: {
      fontSize: windowWidth * 0.04,
      fontWeight: "bold",
      color: 'white',
      flex: 5
    },
    spotifyIcon: {
        height: 0.1 * windowWidth,
        width: 0.1 * windowWidth,
        flex: 1
      },
  });
  

