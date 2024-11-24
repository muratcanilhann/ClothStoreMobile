import { View,Text,Image,StyleSheet } from "react-native";
import { useContext } from "react";
import BasketContext from "../../context/basketContext";
import styles from "./OrderProductCard.style";

export default function OrderProductCard({item}){
    const {items} = useContext(BasketContext);
    
    return(
        <View style={styles.cardContainer}>
            <View>
            <Image style={styles.cardImage} source={item.image} />
            </View>

            <View style={{padding:10,justifyContent:"space-between"}}>
        <Text style={{fontFamily:"BeatriceDeck-SemiBoldItalic"}}>{item.name}</Text>
        <Text style={{fontFamily:"BeatriceDeck-Light",color:"#5E5E5E"}}>{item.category}</Text>

        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{color:"#000E8A"}}>({item.quantity})</Text>    <Text>${item.price}</Text>
        </View>
            </View>
        </View>
    )
}

