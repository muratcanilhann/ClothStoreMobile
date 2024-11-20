import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import BasketIcon from "./assets/basketIcon.svg";
import ProfileIcon from "./assets/profileIcon.svg"
import NavHamburgerIcon from "./assets/navHamburger.svg";
import { useFonts } from 'expo-font';
import {useEffect} from 'react';
import { BasketContextProvider } from './src/context/basketContext.js';


import {Profile,BasketPage,Products,Home,ProductDetail} from "./src/screens/index.js"

import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

function HomeScreen() {

  const navigation = useNavigation();

  const [loaded,error] = useFonts({
    "BeatriceDeck-EBItalic" : require("./assets/fonts/BeatriceDeck-ExtraboldItalic.ttf"),
    "BeatriceDeck-RegularItalic" : require("./assets/fonts/BeatriceDeck-RegularItalic.ttf"),
    "BeatriceDeck-SemiBoldItalic" : require("./assets/fonts/BeatriceDeck-SemiboldItalic.ttf"),
    "BeatriceDeck-Thin" : require("./assets/fonts/BeatriceDeck-Thin.ttf"),
    "BeatriceDeck-Light" : require("./assets/fonts/BeatriceDeck-Light.ttf")
  })

  
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }



  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Notifications Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (

   <BasketContextProvider>
    <NavigationContainer>
      <Drawer.Navigator
  initialRouteName="Home"
  screenOptions={({ navigation }) => ({
    headerBackground: () => (
      <ImageBackground
        source={require('./assets/noisy-background.png')}
        style={styles.headerBackground}
      />
    ),
    headerTintColor: '#000',
    headerTitle: null, 
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require('./assets/navHamburger.png')} 
          style={styles.navButton} 
        />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={styles.headerRight}>

      <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
      <BasketIcon width={45} height={45} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <ProfileIcon width={45} height={45} />
      </TouchableOpacity>
      </View>
    )
  })}
>
  <Drawer.Screen name="Home" component={Home} options={{title:"Home",headerTitleAlign:"center"}} />
  <Drawer.Screen name="Products" component={Products} />
  <Drawer.Screen name="Basket" component={BasketPage} />
  <Drawer.Screen name="Profile" component={Profile} />
  <Drawer.Screen name="ProductDetail" component={ProductDetail} />

</Drawer.Navigator>
    </NavigationContainer>
    </BasketContextProvider>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  headerRight:{
    flex:1,
    flexDirection:"row",
    gap:4,
    marginRight:10
  },
  text: {
    fontSize: 24,
    color: '#fff',
    
  },
  navButton: {
    width: 30, 
    marginLeft: 15, 
  },
  navIconButton:{
    width: 40, 
    marginRight:10
  }
});
