import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./ProductCard.style";
export default function ProductCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetail", { item: item })}
      style={styles.cardContainer}>
      <Image style={styles.image} source={item.image} />
      
      <Text style={styles.categoryText}>{item.category}</Text>
      
      <View style={styles.productInfoContainer}>
        <Text style={styles.productNameText}>{item.name}</Text>
        <Text style={styles.productPriceText}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

