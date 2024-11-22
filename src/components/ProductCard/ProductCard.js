import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ProductCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetail", { item: item })}
      style={style.cardContainer}>
      <Image style={style.image} source={item.image} />
      
      <Text style={style.categoryText}>{item.category}</Text>
      
      <View style={style.productInfoContainer}>
        <Text style={style.productNameText}>{item.name}</Text>
        <Text style={style.productPriceText}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  cardContainer: {
    width: 180,
    height: 200,

    padding: 10, 
  },
  image: {
    width: 170,
    height: 150,
  },
  categoryText: {
    color: "#827D7D",
    fontFamily: "BeatriceDeck-RegularItalic",
  },
  productInfoContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
  },
  productNameText: {
    color: "#000000",
    fontFamily: "BeatriceDeck-RegularItalic",
  },
  productPriceText: {
    color: "#000000", 
    fontFamily: "BeatriceDeck-SemiBoldItalic",
  }
});
