import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      
        <ImageBackground source={{ uri: 'https://www.wallpapers13.com/wp-content/uploads/2018/04/Pink-Lily-Flower-with-Beautiful-Pink-Color-Photo-Wallpaper-HD-3840x2160-1600x1200.jpg' }}

          resizeMode="cover" style={styles.image}
       
        >

          <View style={{flex:1, backgroundColor: 'rgba(0,0,0,.6)',justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.TxtWeight}>Welcome Back</Text>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TextInput style={styles.input}
                placeholder="Username"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
              />
            </View>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} >
              <Text style={styles.lgBtn}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity  >
              <Text style={styles.Design1}>Forgot Password</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>

              <Text style={styles.Design1}>No account ?</Text>
              <TouchableOpacity  >
                <Text style={styles.Design}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ImageBackground >

      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',


  },
  lgBtn: {
    height: 40,
    width: 300,
    color: 'white',
    backgroundColor: 'pink',
    borderRadius: 10,
    borderColor: 'white',
    textAlign: 'center',
    borderWidth: 2,
    marginTop: 20,
    paddingHorizontal: 100,
    paddingVertical: 5,
  },
  input: {
    margin: 5,
    height: 40,
    width: 300,
    borderColor: '#daa520',
    borderWidth: 2,
    color: 'black',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,


  },
  TxtWeight: {
    //fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 30,
    color: 'pink',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Helvetica'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,.6)'



  },
  Design: {
    color: 'pink',
    fontSize: 15,
    fontFamily: 'roboto',
    marginRight: 5,
    marginTop: 50,
  },
  Design1: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'roboto',
    marginRight: 5,
    marginTop: 50,

    textAlign: 'center',
    justifyContent: 'center',
  },



});

