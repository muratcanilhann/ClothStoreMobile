import * as React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import BasketIcon from "./assets/basketIcon.svg";
import ProfileIcon from "./assets/profileIcon.svg";
import NavHamburgerIcon from "./assets/navHamburger.svg";
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { BasketContextProvider } from './src/context/basketContext.js';

import Home from './src/screens/Home/Home.js';
import { Profile, BasketPage, Products, ProductDetail, Checkout } from "./src/screens/index.js";

SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    "BeatriceDeck-EBItalic": require("./assets/fonts/BeatriceDeck-ExtraboldItalic.ttf"),
    "BeatriceDeck-RegularItalic": require("./assets/fonts/BeatriceDeck-RegularItalic.ttf"),
    "BeatriceDeck-SemiBoldItalic": require("./assets/fonts/BeatriceDeck-SemiboldItalic.ttf"),
    "BeatriceDeck-Thin": require("./assets/fonts/BeatriceDeck-Thin.ttf"),
    "BeatriceDeck-Light": require("./assets/fonts/BeatriceDeck-Light.ttf")
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

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
              <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ padding: 10 }}>
                <NavHamburgerIcon width={30} height={30} />
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
          <Drawer.Screen name="Home" component={Home} options={{ title: "Home", headerTitleAlign: "center" }} />
          <Drawer.Screen name="Products" initialParams={{ gender: "All" }} component={Products} />
          <Drawer.Screen name="Basket" options={{ drawerItemStyle: { display: 'none' } }} component={BasketPage} />
          <Drawer.Screen name="Profile" options={{ drawerItemStyle: { display: 'none' } }} component={Profile} />
          <Drawer.Screen name="ProductDetail" options={{ drawerItemStyle: { display: 'none' } }} component={ProductDetail} />
          <Drawer.Screen name="Checkout" options={{ drawerItemStyle: { display: 'none' } }} component={Checkout} />
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
  headerRight: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
    marginRight: 10
  },
});
