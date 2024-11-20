import { StyleSheet,Text,View } from "react-native"
import SearchInput from "../components/UI/SearchInput"
import CategoryBox from "../components/CategoryBox/CategoryBox"

export default function Products(){
    return(
        <View style={style.container}>
        <Text style={style.headerLocation}>Home/Products</Text>
        <Text style={style.header}>PRODUCTS</Text>

        <View style={{marginTop:10}}>
        <SearchInput/>
        </View>

    
        <View style={{marginTop:40}}>
        <CategoryBox text="Tshirt" />
        </View>


        </View>
    )
}

const style= StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:15, 
        marginTop:30     
    },
    headerLocation:{
    textAlign:"center",
    fontFamily:"BeatriceDeck-RegularItalic"
    },
    header:{
        fontFamily:"BeatriceDeck-EBItalic",
        fontSize:25,
        textAlign:"center"
    }
})