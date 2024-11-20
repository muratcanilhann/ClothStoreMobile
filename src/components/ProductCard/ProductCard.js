import { View,Text,Image,StyleSheet,TouchableOpacity } from "react-native";
import {
    useNavigation,
  } from '@react-navigation/native';

export default function ProductCard({item}) {
    const navigation = useNavigation();
    return(
    <TouchableOpacity
    onPress={() => navigation.navigate("ProductDetail",{item:item})}
    style={style.cardContainer}>
        <Image style={style.image} source={item.image} />

        <Text style={style.categoryText}>{item.name}</Text>
        
        <View style={{flex:1, justifyContent:"space-between"}}>
        <Text style={style.productNameText}>blab <Text>{item.price}</Text> </Text>
        
        </View>
    </TouchableOpacity>
   
    )
}

const style = StyleSheet.create({
    cardContainer:{
        width:180,
        height:200,
        marginTop:20
    },
    image:{
        width:170,
        height:150,
    },
    categoryText:{
        color:"#827D7D",
        fontFamily:"BeatriceDeck-RegularItalic"

    },
    productNameText:{
        flex:1,
        color:"#000000",
        fontFamily:"BeatriceDeck-RegularItalic",
    
    }
})