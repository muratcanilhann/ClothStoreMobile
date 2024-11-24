import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useContext } from "react";
import styles from "./Basket.style";
import BasketContext from "../../context/basketContext";
import ShoppingItemCard from "../../components/ShoppingItemCard/ShoppingItemCard";
import { useNavigation } from '@react-navigation/native';

export default function BasketScreen({ tab = null }) {
  const [activeTab, setActiveTab] = useState("shoppingbag");
  const [totalPrice, setTotalPrice] = useState(0);
  const { items, addItem, removeItem, deleteItem } = useContext(BasketContext);

  const navigation = useNavigation();

  useEffect(() => {
    const total = items.reduce((prc, item) => {
      return prc + item.price * item.quantity;
    }, 0);
    setTotalPrice(total);
  }, [items]);

  function handleSetActiveBasket() {
    setActiveTab("shoppingbag");
  }

  function handleSetActiveFavourites() {
    setActiveTab("favourites");
  }

  return (
    <View style={{ flex: 1, marginHorizontal: 12 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.button} onPress={handleSetActiveBasket}>
          <Text style={activeTab === "shoppingbag" ? styles.activeButton : styles.text}>
            SHOPPING BAG
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSetActiveFavourites}>
          <Text style={activeTab === "favourites" ? styles.activeButton : styles.text}>
            FAVOURITES
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === "shoppingbag" && items.length > 0 ? (
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ShoppingItemCard
              item={item}
              addItem={addItem}
              deleteItem={deleteItem}
              removeItem={removeItem}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={{ fontFamily: "BeatriceDeck-RegularItalic" }}>
          Do not have any products in your basket.
        </Text>
      )}

      {activeTab === "shoppingbag" && items.length > 0 ? (
        <View style={{  alignItems: "center", justifyContent: "center", marginVertical: 20, marginTop:20 }}>
          <View>
            <Text style={styles.text}>Subtotal  {totalPrice}$</Text>
            <Text style={styles.text}>Shipping  10$</Text>
            <Text style={styles.text}>Total  {totalPrice + 10}$</Text>
          </View>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate('Checkout')}
          >
            <Text style={styles.text}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

