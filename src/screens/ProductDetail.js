import { useContext } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import LikeIcon from "../../assets/LikeIcon.svg";
import BasketContext from "../context/basketContext.js";

export default function ProductDetail({ route }) {
  const { item } = route.params;
  const basketCtx = useContext(BasketContext);

  const isItemInBasket = basketCtx.items.some((basketItem) => basketItem.id === item.id);

  // Add or remove item from basket
  function handleAddItemToBasket() {
    if (isItemInBasket) {
      basketCtx.removeItem(item.id); 
    } else {
      basketCtx.addItem(item); 
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 12 }}>
        <Image style={style.image} source={item.image} />
        <View style={{ marginTop: 20 }}>
          <Text style={style.otherImagesText}>Other Images</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Here you can add other images of the product in a horizontal scroll */}
            {item.otherImages?.map((image, index) => (
              <Image key={index} style={style.otherImage} source={image} />
            ))}
          </ScrollView>
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
            <Text style={{ fontFamily: "BeatriceDeck-SemiBoldItalic" }}>{item.price}$</Text>
          </View>
        </View>

        <Text style={style.descText}>{item.description}</Text>
      </ScrollView>

      <TouchableOpacity style={style.addButton} onPress={handleAddItemToBasket}>
        <Text style={style.nameText}>
          {isItemInBasket ? "REMOVE FROM BASKET" : "ADD TO BASKET"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    width: "100%",  
    height: 300,    
    resizeMode: "contain",
  },
  otherImage: {
    width: 120,    
    height: 120,   
    marginRight: 10, 
    resizeMode: "contain",
  },
  otherImagesText: {
    fontFamily: "BeatriceDeck-SemiBoldItalic",
    marginBottom: 10,
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
  descText: {
    fontFamily: "BeatriceDeck-Light",
  },
});
