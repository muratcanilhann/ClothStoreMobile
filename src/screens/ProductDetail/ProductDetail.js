import { useContext } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import LikeIcon from "../../../assets/LikeIcon.svg";
import BasketContext from "../../context/basketContext.js";
import styles from "./ProductDetail.style.js";

export default function ProductDetail({ route }) {
  const { item } = route.params;
  const basketCtx = useContext(BasketContext);

  const isItemInBasket = basketCtx.items.some((basketItem) => basketItem.id === item.id);

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
        <Image style={styles.image} source={item.image} />
        <View style={{ marginTop: 20 }}>
          <Text style={styles.otherImagesText}>Other Images</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {item.otherImages?.map((image, index) => (
              <Image key={index} style={styles.otherImage} source={image} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.productDetailsContainer}>
          <View>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.taxText}>MRP incl. of all taxes</Text>
          </View>

          <View>
            <TouchableOpacity
              style={styles.likeButton}
            >
              <LikeIcon />
            </TouchableOpacity>
            <Text style={styles.likeButtonText}>{item.price}$</Text>
          </View>
        </View>

        <Text style={styles.descText}>{item.description}</Text>
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={handleAddItemToBasket}>
        <Text style={styles.nameText}>
          {isItemInBasket ? "REMOVE FROM BASKET" : "ADD TO BASKET"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

