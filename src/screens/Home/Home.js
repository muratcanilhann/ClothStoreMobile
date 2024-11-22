import { View,StyleSheet,Text,TouchableOpacity,FlatList,ScrollView } from "react-native";
import Button from "../../components/UI/Button.js";
import styles from "./Home.style.js"
import SearchInput from "../../components/UI/SearchInput.js";
import ProductCard from "../../components/ProductCard/ProductCard.js";
import ArrowRightIcon from "../../../assets/ArrowRightIcon.svg";
import {
    useNavigation,
  } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();

    const products = [
        { id: '1', name: 'White Pants',category:"Pants", price: 100, image: require('./../../../assets/Kiyafet1.png'),
            description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front."
         },
        { id: '2', name: 'Blue Shirt',category:"Shirt", price: 200, image: require('./../../../assets/Kiyafet2.png'),
            description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front." },
        { id: '3', name: 'Black Tshirt',category:"Tshirt", price: 300, image: require('./../../../assets/Kiyafet3.png'),
            description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front." },
        { id: '4', name: 'Yellow Shoe',category:"Shoes", price: 400, image: require('./../../../assets/Kiyafet1.png'),
            description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front." },
      ];
    return(
        <ScrollView style={styles.container}>
        
                 <View style={{gap:2}}>

                    <Button style={styles.genderText} title="MAN" onPress={() => {navigation.navigate("Products",{gender:"MAN"})}} />
                    <Button title="WOMEN" onPress={() => {navigation.navigate("Products",{gender:"WOMEN"})}} />
                    <Button title="KIDS" onPress={() => {navigation.navigate("Products",{gender:"KIDS"})}} />

                 </View>
        
        <SearchInput/>

       
       <View>
        <Text style={styles.header}>NEW </Text>
        <Text style={styles.header}>COLLECTION </Text>
        <Text style={styles.subTitle}>Summer {"\n"} 2024</Text>

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
      
        <Text style={styles.subTitle}>Go Shopping</Text>
        <ArrowRightIcon  />
      </TouchableOpacity>
      

        </ScrollView>

    )
}
