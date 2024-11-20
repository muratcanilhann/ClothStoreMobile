import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import LikeIcon from "../../assets/LikeIcon.svg";

import { useContext } from "react";
import BasketContext from "../context/basketContext.js"



export default function ProductDetail({ route }) {

  const { item } = route.params;
  const basketCtx = useContext(BasketContext);

  function handleAddItemToBasket(){
    basketCtx.addItem(item);
    }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 12 }}>
        <Image style={style.image} source={item.image} />

        <View style={{ marginTop: 100 }}>
          <Text>Other Images</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={style.nameText}>{item.name}</Text>
            <Text style={style.taxText}>MRP incl. of all taxes</Text>
          </View>

          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LikeIcon />
            </TouchableOpacity>
            <Text style={{ fontFamily: "BeatriceDeck-SemiBoldItalic" }}>{item.price}</Text>
          </View>
        </View>

        <Text style={style.descText}>
          {item.description}
        </Text>
      </ScrollView>

     
      <TouchableOpacity style={style.addButton} onPress={handleAddItemToBasket} >
        <Text style={style.nameText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    flex: 1,
    width: "auto",
    resizeMode: "contain",
  },
  nameText: {
    fontFamily: "BeatriceDeck-SemiBoldItalic",
  },
  taxText: {
    fontFamily: "BeatriceDeck-SemiBoldItalic",
    color: "gray",
  },
  addButton: {
    position: "absolute",
    bottom: 0,
    left: 0, 
    right: 0, 
    backgroundColor: "#D9D9D9",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  descText:{
    fontFamily:"BeatriceDeck-Light"
  }
});
