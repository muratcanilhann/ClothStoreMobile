import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { useContext } from "react";
import BasketContext from "../context/basketContext";
import ShoppingItemCard from "../components/ShoppingItemCard/ShoppingItemCard";

export default function BasketScreen({ tab = null }) {
  const [activeTab, setActiveTab] = useState(tab);
  const [totalPrice, setTotalPrice] = useState(0);
  const {items,addItem,removeItem,deleteItem} = useContext(BasketContext);


  useEffect(()=>{
    const total = items.reduce((prc,item) =>{

      return  item.price * item.quantity;
    },0)

    setTotalPrice(total);

  },items)

  function handleSetActiveBasket(){
    setActiveTab("basket");
  }
  function handleSetActiveFavourites(){
    setActiveTab("favourites");
  }

 

  
  return (
    <ScrollView style={{ marginHorizontal: 12 }}>


      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

        <TouchableOpacity style={style.button} onPress={handleSetActiveBasket} >
          <Text style={style.text}>SHOPPING BAG</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={handleSetActiveFavourites}>
          <Text style={style.text}>FAVOURTIES</Text>
        </TouchableOpacity>
        
      </View>

      {items.length > 0  ?  (
  <FlatList
data={items}
renderItem={({ item }) => <ShoppingItemCard item={item} addItem={addItem} deleteItem={deleteItem} removeItem={removeItem} />}
keyExtractor={(item) => item.id.toString()} 
  />
) : <Text style={{fontFamily:"BeatriceDeck-RegularItalic"}}>Do not have any products in your basket.</Text>}



{items.length > 0 ? (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
    <View>
      <Text style={style.text}>Subtotal  {totalPrice}$</Text>
      <Text style={style.text}>Shipping  10$</Text>
      <Text style={style.text}>Total  {totalPrice + 10}$</Text>
    </View>
    <TouchableOpacity style={style.continueButton}>
      <Text style={style.text}>CONTINUE</Text>
    </TouchableOpacity>
  </View>
) : null}
 
    </ScrollView>
  );
}

const style = StyleSheet.create({
  button: {
    flex: 1, 
    paddingVertical: 10, 
  },
  text: {
    fontFamily: "BeatriceDeck-Light",
    textAlign: "center", 
    alignItems: "center",
  },
  continueButton: {
    width: 200,
    backgroundColor: "gray",
    height: 50,
    justifyContent: "center", 
    alignItems: "center",
    marginTop: 20,
  },
});
