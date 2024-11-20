import { View,StyleSheet,Text,TouchableOpacity,FlatList,ScrollView } from "react-native";
import Button from "../components/UI/Button.js";
import SearchInput from "../components/UI/SearchInput.js";
import ProductCard from "../components/ProductCard/ProductCard.js";
import ArrowRightIcon from "../../assets/ArrowRightIcon.svg";
import {
    useNavigation,
  } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();

    const products = [
        { id: '1', name: 'Ürün 1', price: 100, image: require('./../../assets/Kiyafet1.png'),
            description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front."
         },
        { id: '2', name: 'Ürün 2', price: 200, image: require('./../../assets/Kiyafet2.png'),
            description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front." },
        { id: '3', name: 'Ürün 3', price: 300, image: require('./../../assets/Kiyafet3.png'),
            description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front." },
        { id: '4', name: 'Ürün 4', price: 400, image: require('./../../assets/Kiyafet1.png'),
            description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front." },
      ];
    return(
        <ScrollView style={style.container}>
        
                 <View style={{gap:2}}>

                    <Button title="MAN" />
                    <Button title="WOMEN" />
                    <Button title="KIDS" />

                 </View>
        
        <SearchInput/>

       
       <View>
        <Text style={style.header}>NEW </Text>
        <Text style={style.header}>COLLECTION </Text>
        <Text style={style.subTitle}>Summer {"\n"} 2024</Text>

        </View>


      <FlatList
      style={{marginTop:30}}
      data={products}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
          <ProductCard item={item}/>
      )}
    />


      

        
      <TouchableOpacity
      onPress={()=> navigation.navigate("Products")}
      style={{backgroundColor:"#827D7D",width:180,padding:10,marginTop:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:10}}>
      
        <Text style={style.subTitle}>Go To Shop</Text>
        <ArrowRightIcon  />
      </TouchableOpacity>
      

        </ScrollView>

    )
}

const style = StyleSheet.create({
    container:{
       flex:1,
        marginHorizontal:12,
        marginTop:32
    },
    header:{
        fontFamily:"BeatriceDeck-EBItalic",
        fontSize:50, 
    },
    subTitle:{
        fontFamily:"BeatriceDeck-SemiBoldItalic"
    }
})